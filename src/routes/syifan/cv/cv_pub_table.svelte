<script lang="ts">
    import CvTable from './cv_table.svelte'

    type TableCell =
        | string
        | number
        | boolean
        | null
        | undefined
        | { html: string }

    type TableEntry = {
        left: Array<TableCell>
        right: Array<TableCell>
        hanging?: TableCell
    }

    type PublicationLink = {
        icon?: string
        link: string
        text: string
    }

    type PublicationType =
        | 'conference'
        | 'journal'
        | 'book'
        | 'bookTranslation'
        | 'bookChapter'
        | 'patent'
        | 'workshop'
        | 'preprint'
        | 'dissertation'

    type Publication = {
        title: string
        authors: string
        venue: string
        venue_full?: string
        year: number
        tags: string[]
        links: PublicationLink[]
        type: PublicationType
        identification_information?: string
        doi?: string
        acceptance_comment?: string
    }

    const SELF_NAME = 'Yifan Sun'
    const WM_ADVISEES = new Set(['Ying Li', 'Daoxuan Xu', 'Chris Thames'])

    export let title: string
    export let publications: Publication[] = []
    export let types: PublicationType | PublicationType[]

    const escapeHtml = (value: string): string =>
        value
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;')

    const highlight = (source: string, name: string, className: string): string => {
        const escapedName = name.replace(/[\\^$*+?.()|[\\]{}]/g, '\\$&')
        const pattern = new RegExp(`\\b${escapedName}\\b`, 'g')
        return source.replace(pattern, `<span class="${className}">${name}</span>`)
    }


    const formatAuthors = (authors: string): string => {
        let formatted = escapeHtml(authors)
        for (const advisee of WM_ADVISEES) {
            formatted = highlight(formatted, advisee, 'wm-advisee')
        }
        formatted = highlight(formatted, SELF_NAME, 'self-name')
        return formatted
    }

    const formatTitle = (title: string): string => escapeHtml(title.trim())

    const formatVenue = (publication: Publication): string => {
        const rawFull = (publication.venue_full ?? publication.venue).trim()
        const rawShort = publication.venue.trim()
        const full = escapeHtml(rawFull)
        const short = escapeHtml(rawShort)
        const fullLower = rawFull.toLowerCase()
        const shortLower = rawShort.toLowerCase()
        if (fullLower === shortLower) {
            return full
        }
        if (fullLower.includes(shortLower)) {
            return full
        }
        return `${full} (${short})`
    }

    const formatIdentification = (value?: string): string | null =>
        value ? escapeHtml(value.trim()) : null

    const formatDoi = (value?: string): string | null =>
        value
            ? `DOI: <a href="${value}" target="_blank" rel="noreferrer">${escapeHtml(value)}</a>`
            : null

    const formatAcceptance = (value?: string): string | null => {
        if (!value) {
            return null
        }
        const trimmed = value.trim()
        const escaped = escapeHtml(trimmed)
        return trimmed.toLowerCase().startsWith('accept') ? escaped : `Acceptance: ${escaped}`
    }

    $: typeSet = Array.isArray(types) ? new Set(types) : new Set([types])

    $: filtered = publications.filter((publication) => typeSet.has(publication.type))

    let entries: TableEntry[] = []
    $: entries = filtered.map((publication, index, array) => {
        const leftCells: TableCell[] = [
            formatTitle(publication.title),
            { html: formatAuthors(publication.authors) },
            formatVenue(publication),
        ]

        const identification = formatIdentification(publication.identification_information)
        if (identification) {
            leftCells.push(identification)
        }

        const doiHtml = formatDoi(publication.doi)
        if (doiHtml) {
            leftCells.push({ html: doiHtml })
        }

        const acceptance = formatAcceptance(publication.acceptance_comment)
        if (acceptance) {
            leftCells.push(acceptance)
        }

        const rightCells: TableCell[] = [publication.year]
        while (rightCells.length < leftCells.length) {
            rightCells.push(null)
        }

        return {
            hanging: `${array.length - index}.`,
            left: leftCells,
            right: rightCells,
        }
    })
</script>

<div class="publication-subsection">
    <h3>{title}</h3>
    {#if entries.length > 0}
        <div class="publication-list">
            <CvTable entries={entries} />
        </div>
    {:else}
        <p class="empty-message">No publications available.</p>
    {/if}
</div>

<style>
    .publication-subsection + .publication-subsection {
        margin-top: 1.5rem;
    }

    .empty-message {
        font-style: italic;
        color: #666;
        margin: 0.5rem 0 0;
    }

</style>
