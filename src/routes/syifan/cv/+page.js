import yaml from 'js-yaml'

const SELF_NAME = 'Yifan Sun'
const WM_ADVISEES = [
    'Ying Li',
    'Daoxuan Xu',
    'Chris Thames',
    'Yijia Shi',
    'Sabila Al Jannat',
    'Enze Xu',
]
const PUBLICATION_TAG = 'yifan'
const PUBLICATION_SECTION_ID = 'publicationEntries'
const SOFTWARE_SECTION_ID = 'softwareEntries'
const PUBLICATION_TYPE_TITLES = {
    conference: 'Conference Papers',
    journal: 'Journal Articles',
    workshop: 'Workshop Papers',
    book: 'Books',
    bookChapter: 'Book Chapters',
    bookTranslation: 'Book Translations',
    patent: 'Patents',
    preprint: 'Preprints',
    dissertation: 'Dissertations',
}
const PUBLICATION_TYPE_ORDER = [
    'conference',
    'journal',
    'workshop',
    'book',
    'bookChapter',
    'bookTranslation',
    'patent',
    'preprint',
    'dissertation',
]

const escapeHtml = (value) =>
    String(value)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;')

const highlight = (source, name, className) => {
    const escapedName = name.replace(/[\\^$*+?.()|[\\]{}]/g, '\\$&')
    const pattern = new RegExp(`\\b${escapedName}\\b`, 'g')
    return source.replace(pattern, `<span class="${className}">${name}</span>`)
}

const formatAuthors = (authors) => {
    let formatted = escapeHtml(authors ?? '')
    for (const advisee of WM_ADVISEES) {
        formatted = highlight(formatted, advisee, 'wm-advisee')
    }
    formatted = highlight(formatted, SELF_NAME, 'self-name')
    return formatted
}

const formatTitle = (publication) => {
    const year = publication.year ? `(${publication.year})` : ''
    const title = (publication.title ?? '').trim()
    return [year, title].filter(Boolean).join(' ')
}

const formatVenue = (publication) => {
    const venue = (publication.venue ?? '').trim()
    const full = (publication.venue_full ?? venue).trim()

    if (!full && !venue) {
        return ''
    }

    const fullLower = full.toLowerCase()
    const venueLower = venue.toLowerCase()

    if (!venue || fullLower === venueLower) {
        return full
    }

    if (fullLower.includes(venueLower)) {
        return full
    }

    return `${full} (${venue})`
}

const formatIdentification = (value) => {
    if (!value) {
        return null
    }
    const trimmed = value.trim()
    return trimmed.length > 0 ? trimmed : null
}

const formatDoi = (value) => {
    if (!value) {
        return null
    }
    const trimmed = value.trim()
    if (trimmed.length === 0) {
        return null
    }
    const escapedValue = escapeHtml(trimmed)
    return `DOI: <a href="${escapedValue}" target="_blank" rel="noreferrer">${escapedValue}</a>`
}

const formatAcceptance = (value) => {
    if (!value) {
        return null
    }
    const trimmed = value.trim()
    if (trimmed.length === 0) {
        return null
    }
    return trimmed.toLowerCase().startsWith('accept')
        ? trimmed
        : `Acceptance: ${trimmed}`
}

const sortPublications = (a, b) => {
    const yearDiff = (b.year ?? 0) - (a.year ?? 0)
    if (yearDiff !== 0) {
        return yearDiff
    }

    const monthDiff = (b.month ?? 0) - (a.month ?? 0)
    if (monthDiff !== 0) {
        return monthDiff
    }

    const dayDiff = (b.day ?? 0) - (a.day ?? 0)
    if (dayDiff !== 0) {
        return dayDiff
    }

    const titleA = (a.title ?? '').toLowerCase()
    const titleB = (b.title ?? '').toLowerCase()
    return titleA.localeCompare(titleB)
}

const toCvTableEntry = (publication, index, total) => {
    const identification = formatIdentification(
        publication.identification_information
    )

    const left = [
        formatTitle(publication),
        { html: formatAuthors(publication.authors ?? '') },
        formatVenue(publication) +
            (identification ? `, ${identification}` : ''),
    ]

    const doiHtml = formatDoi(publication.doi)
    if (doiHtml) {
        left.push({ html: doiHtml })
    }

    const acceptance = formatAcceptance(publication.acceptance_comment)
    if (acceptance) {
        left.push(acceptance)
    }

    return {
        hanging: `${total - index}.`,
        left,
        right: [],
    }
}

const createPublicationSubsection = (type, publications) => {
    const sorted = [...publications].sort(sortPublications)
    if (sorted.length === 0) {
        return null
    }

    return {
        id: `${type}Publications`,
        title: PUBLICATION_TYPE_TITLES[type] ?? type,
        entries: sorted.map((publication, index) =>
            toCvTableEntry(publication, index, sorted.length)
        ),
    }
}

const createPublicationSection = (publications) => {
    if (!Array.isArray(publications) || publications.length === 0) {
        return null
    }

    const filtered = publications.filter(
        (publication) =>
            publication &&
            Array.isArray(publication.tags) &&
            publication.tags.includes(PUBLICATION_TAG)
    )

    const subsections = PUBLICATION_TYPE_ORDER.flatMap((type) => {
        const items = filtered.filter(
            (publication) => publication.type === type
        )
        const subsection = createPublicationSubsection(type, items)
        return subsection ? [subsection] : []
    })

    if (subsections.length === 0) {
        return null
    }

    return {
        id: PUBLICATION_SECTION_ID,
        title: 'Publications',
        subsections,
    }
}

const insertSectionBefore = (sections, sectionToInsert, beforeId) => {
    if (!sectionToInsert) {
        return sections
    }

    const index = sections.findIndex((section) => section.id === beforeId)
    const insertionIndex = index === -1 ? sections.length : index

    return [
        ...sections.slice(0, insertionIndex),
        sectionToInsert,
        ...sections.slice(insertionIndex),
    ]
}

/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
    const cvResponse = await fetch('/cv/cv_data.yml')

    if (!cvResponse.ok) {
        throw new Error(`Failed to load CV data: ${cvResponse.status}`)
    }

    const cvText = await cvResponse.text()
    const cvData = yaml.load(cvText)

    if (!cvData || typeof cvData !== 'object') {
        throw new Error('Invalid CV data format')
    }

    const publicationResponse = await fetch('/publication_list.json')

    if (!publicationResponse.ok) {
        throw new Error(
            `Failed to load publication data: ${publicationResponse.status}`
        )
    }

    let publicationData
    try {
        publicationData = await publicationResponse.json()
    } catch (error) {
        throw new Error('Invalid publication data format')
    }

    const publicationSection = createPublicationSection(publicationData)
    const sections = Array.isArray(cvData.sections) ? [...cvData.sections] : []
    const mergedSections = publicationSection
        ? insertSectionBefore(
              sections,
              publicationSection,
              SOFTWARE_SECTION_ID
          )
        : sections

    return {
        cvData: {
            ...cvData,
            sections: mergedSections,
        },
    }
}
