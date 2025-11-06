import yaml from 'js-yaml'

import type { PageLoad } from './$types'

const SELF_NAME = 'Yifan Sun'
const WM_ADVISEES = [
    'Ying Li',
    'Daoxuan Xu',
    'Chris Thames',
    'Yijia Shi',
    'Sabila Al Jannat',
    'Enze Xu',
] as const

const PUBLICATION_TAG = 'yifan'
const PUBLICATION_SECTION_ID = 'publication'

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
} as const

type PublicationType = keyof typeof PUBLICATION_TYPE_TITLES

const PUBLICATION_TYPE_ORDER: PublicationType[] = [
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

type HtmlValue = { html: string }
type TableCell = string | number | boolean | null | undefined | HtmlValue

type CvMetaLine = string | HtmlValue

type CvEntry = {
    left: TableCell[]
    right: TableCell[]
    hanging?: TableCell
}

type CvSubsection = {
    id: string
    title: string
    entries: CvEntry[]
    meta?: CvMetaLine[]
    condensed?: boolean
}

type CvSection = {
    id: string
    title: string
    entries?: CvEntry[]
    meta?: CvMetaLine[]
    condensed?: boolean
    subsections?: CvSubsection[]
}

type CvHeader = {
    name: string
    tags?: string[]
    contact?: Record<string, string>
}

type CvData = {
    version?: number
    header: CvHeader
    sections?: CvSection[]
}

type PublicationLink = {
    icon: string
    text: string
    link: string
}

type Publication = {
    title?: string
    authors?: string
    venue?: string
    venue_full?: string
    year?: number
    month?: number
    day?: number
    tags?: string[]
    links?: PublicationLink[]
    type?: PublicationType | (string & {})
    identification_information?: string
    doi?: string
    acceptance_comment?: string
}

const isRecord = (value: unknown): value is Record<string, unknown> =>
    typeof value === 'object' && value !== null && !Array.isArray(value)

const escapeHtml = (value: unknown): string =>
    String(value)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;')

const highlight = (source: string, name: string, className: string): string => {
    const escapedName = name.replace(/[\\^$*+?.()|[\]{}]/g, '\\$&')
    const pattern = new RegExp(`\\b${escapedName}\\b`, 'g')
    return source.replace(pattern, `<span class="${className}">${name}</span>`)
}

const formatAuthors = (authors?: string | null): string => {
    let formatted = escapeHtml(authors ?? '')
    for (const advisee of WM_ADVISEES) {
        formatted = highlight(formatted, advisee, 'wm-advisee')
    }
    formatted = highlight(formatted, SELF_NAME, 'self-name')
    return formatted
}

const formatTitle = (publication: Publication): string => {
    const year = publication.year ? `(${publication.year})` : ''
    const title = (publication.title ?? '').trim()
    return [year, title].filter(Boolean).join(' ')
}

const formatVenue = (publication: Publication): string => {
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

const formatIdentification = (value?: string | null): string | null => {
    if (!value) {
        return null
    }
    const trimmed = value.trim()
    return trimmed.length > 0 ? trimmed : null
}

const formatDoi = (value?: string | null): string | null => {
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

const formatAcceptance = (value?: string | null): string | null => {
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

const sortPublications = (a: Publication, b: Publication): number => {
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

const toCvTableEntry = (
    publication: Publication,
    index: number,
    total: number
): CvEntry => {
    const identification = formatIdentification(
        publication.identification_information
    )

    const left: TableCell[] = [
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

const createPublicationSubsection = (
    type: PublicationType,
    publications: Publication[]
): CvSubsection | null => {
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

const createPublicationSubsections = (
    publications: Publication[]
): CvSubsection[] => {
    if (!Array.isArray(publications) || publications.length === 0) {
        return []
    }

    const filtered = publications.filter(
        (publication) =>
            isRecord(publication) &&
            Array.isArray(publication.tags) &&
            publication.tags.includes(PUBLICATION_TAG)
    )

    return PUBLICATION_TYPE_ORDER.flatMap((type) => {
        const items = filtered.filter(
            (publication) => publication.type === type
        )
        const subsection = createPublicationSubsection(type, items)
        return subsection ? [subsection] : []
    })
}

const ensureCvData = (value: unknown): CvData => {
    if (!isRecord(value)) {
        throw new Error('Invalid CV data format')
    }
    if (!isRecord(value.header) || typeof value.header.name !== 'string') {
        throw new Error('Invalid CV header data')
    }
    const sections = Array.isArray(value.sections)
        ? (value.sections as CvSection[])
        : undefined
    return {
        version:
            typeof value.version === 'number' ? (value.version as number) : undefined,
        header: value.header as CvHeader,
        sections,
    }
}

const ensurePublicationArray = (value: unknown): Publication[] => {
    if (!Array.isArray(value)) {
        throw new Error('Invalid publication data format')
    }
    return value.filter(isRecord) as Publication[]
}

export const load: PageLoad = async ({ fetch }) => {
    const cvResponse = await fetch('/cv/cv_data.yml')

    if (!cvResponse.ok) {
        throw new Error(`Failed to load CV data: ${cvResponse.status}`)
    }

    const cvText = await cvResponse.text()
    const cvData = ensureCvData(yaml.load(cvText))

    const publicationResponse = await fetch('/publication_list.json')

    if (!publicationResponse.ok) {
        throw new Error(
            `Failed to load publication data: ${publicationResponse.status}`
        )
    }

    const publicationData = ensurePublicationArray(
        await publicationResponse.json()
    )

    const publicationSubsections =
        createPublicationSubsections(publicationData)
    const sections = Array.isArray(cvData.sections)
        ? [...cvData.sections]
        : []

    const mergedSections = (() => {
        if (publicationSubsections.length === 0) {
            return sections
        }

        const index = sections.findIndex(
            (section) => section.id === PUBLICATION_SECTION_ID
        )

        if (index === -1) {
            console.warn(
                'CV publication section placeholder not found; skipping publications.'
            )
            return sections
        }

        return sections.map((section, currentIndex) =>
            currentIndex === index
                ? {
                      ...section,
                      subsections: publicationSubsections,
                  }
                : section
        )
    })()

    return {
        cvData: {
            ...cvData,
            sections: mergedSections,
        },
    }
}
