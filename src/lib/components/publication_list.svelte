<script lang="ts">
    import Publication from '$src/lib/components/publication.svelte'
    import PublicationLink from '$src/lib/components/publication_link.svelte'
    import { onMount } from 'svelte'

    export let filter = ''
    export let publications = [] as pubType[]

    interface pubType {
        title: string
        authors: string
        venue: string
        year: number
        tags: string[]
        links: {
            icon: string
            text: string
            link: string
        }[]
    }

    let publicationByYear: { year: number; publications: pubType[] }[] = []

    onMount(() => {
        const filterTokens = filter.split('|')
        const filteredPublications = publications.filter((publication) => {
            const tags = publication['tags']
            if (tags === undefined) {
                return false
            }

            for (const filterToken of filterTokens) {
                if (tags.indexOf(filterToken) === -1) {
                    return false
                }
            }

            return true
        })

        publicationByYear = []
        const publiationYears: number[] = []
        const publicationYearToIndex = {} as Record<number, number>
        for (const publication of filteredPublications) {
            const year = publication['year']
            if (publicationYearToIndex[year] === undefined) {
                publicationYearToIndex[year] = publicationByYear.length
                publicationByYear.push({
                    year: year,
                    publications: [] as pubType[],
                })
                publiationYears.push(year)
            }

            publicationByYear[publicationYearToIndex[year]].publications.push(
                publication
            )
        }

        console.log(publicationByYear)
    })
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
