<script lang="ts">
    import Publication from '$src/lib/components/publication.svelte'
    import PublicationLink from '$src/lib/components/publication_link.svelte'

    export let filter = ''
    export let publications = [] as pubType[]

    interface pubType {
        title: string
        authors: string
        venue: string
        year: number
        month?: number
        day?: number
        tags?: string[]
        links: {
            icon: string
            text: string
            link: string
        }[]
    }

    let filterTokens: string[] = []
    let filteredPublications = [] as pubType[]
    let publicationByYear: { year: number; publications: pubType[] }[] = []

    const asNumber = (value?: number) =>
        typeof value === 'number' && Number.isFinite(value) ? value : 0

    $: filterTokens = filter
        .split('|')
        .map((token) => token.trim())
        .filter((token) => token.length > 0)

    $: filteredPublications = publications.filter((publication) => {
        const tags = publication.tags
        if (tags === undefined) {
            return filterTokens.length === 0
        }

        for (const filterToken of filterTokens) {
            if (!tags.includes(filterToken)) {
                return false
            }
        }

        return true
    })

    $: publicationByYear = (() => {
        const grouped: { year: number; publications: pubType[] }[] = []
        const publicationYearToIndex = {} as Record<number, number>

        for (const publication of filteredPublications) {
            const year = publication.year
            if (publicationYearToIndex[year] === undefined) {
                publicationYearToIndex[year] = grouped.length
                grouped.push({
                    year,
                    publications: [],
                })
            }

            grouped[publicationYearToIndex[year]].publications.push(
                publication
            )
        }

        for (const entry of grouped) {
            entry.publications.sort((a, b) => {
                const monthDiff = asNumber(b.month) - asNumber(a.month)
                if (monthDiff !== 0) {
                    return monthDiff
                }

                const dayDiff = asNumber(b.day) - asNumber(a.day)
                if (dayDiff !== 0) {
                    return dayDiff
                }

                return (a.title ?? '').localeCompare(b.title ?? '')
            })
        }

        grouped.sort((a, b) => (b.year ?? 0) - (a.year ?? 0))
        return grouped
    })()
</script>

{#each publicationByYear as { year, publications }}
    <h2 class="sec-title">{year}</h2>
    {#each publications as publication}
        <Publication
            title={publication.title}
            authors={publication.authors}
            venue={publication.venue}
        >
            {#each publication.links as link}
                <PublicationLink
                    icon={link.icon}
                    text={link.text}
                    link={link.link}
                />
            {/each}
        </Publication>
    {/each}
{/each}
