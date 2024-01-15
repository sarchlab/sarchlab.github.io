<script lang="ts">
    import Publication from '$lib/components/Publication.svelte'
    import PublicationLink from '$lib/components/PublicationLink.svelte'
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

<!-- <h2 class="sec-title">2023</h2> -->
<!-- <Publication
    title="Visual Exploratory Analysis for Designing Large-Scale Network-on-Chip Architectures: A Domain Expert-Led Design Study"
    authors="Shaoyu Wang (co-first author), Hang Yan (co-first author), Katherine E. Isaacs, Yifan Sun"
    venue="TVCG"
>
    <PublicationLink
        icon="/file_outline.svg"
        text="PDF"
        link="/vis4mesh.pdf"
    />
</Publication>

<Publication
    title="Path Forward Beyond Simulators: Fast and Accurate GPU
        Execution Time Prediction for DNN Workloads"
    authors="Ying Li, Yifan Sun, Adwait Jog"
    venue="MICRO 2023"
/>

<Publication
    title="Photon: A Fine-grained Sampled Simulation Methodology for GPU
            Workloads"
    authors="Changxi Liu, Yifan Sun, Trevor E. Carlson"
    venue="MICRO 2023"
>
    <PublicationLink
        icon="/file_outline.svg"
        text="PDF"
        link="https://www.researchgate.net/profile/Yifan-Sun-16/publication/374910558_Photon_A_Fine-grained_Sampled_Simulation_Methodology_for_GPU_Workloads/links/65356a5724bbe32d9a61fe9e/Photon-A-Fine-grained-Sampled-Simulation-Methodology-for-GPU-Workloads.pdf?origin=publicationDetail&_sg%5B0%5D=YBb3e0P2MK3wo67j7v2DhQlIQElf2Rbet9KD4ROEWJxpCnx2n38QRv9ggP4vcZ8ToMR-pGfjoKW3BzfUYfDoFA.8NodPI2_fY0QE2Z6oFqSOzl8tf9-rjTu1TAAUdB2SQGXPIpT1Z56IlrQnhK7PtkpmdwEcABBD26rZga0HihE1w&_sg%5B1%5D=KLnVsyUMBGPQmXWV-q_QpR04IXpqVrwUzoJmTj9au7No-mcdGs7MaOH33TEUV0rZ8NwuAetw1_AKTvV59XbbDm81WmHMyEcbjkNUGlMpt8Lo.8NodPI2_fY0QE2Z6oFqSOzl8tf9-rjTu1TAAUdB2SQGXPIpT1Z56IlrQnhK7PtkpmdwEcABBD26rZga0HihE1w&_iepl=&_rtd=eyJjb250ZW50SW50ZW50IjoibWFpbkl0ZW0ifQ%3D%3D&_tp=eyJjb250ZXh0Ijp7ImZpcnN0UGFnZSI6InByb2ZpbGUiLCJwYWdlIjoicHVibGljYXRpb24iLCJwcmV2aW91c1BhZ2UiOiJwcm9maWxlIiwicG9zaXRpb24iOiJwYWdlSGVhZGVyIn19"
    />
</Publication>

<h2 class="sec-title">2022</h2>
<Publication
    title="Accelerated Computing with HIP"
    authors="Yifan Sun, Trinayan Baruah, David Kaeli"
    venue="Book"
/>

<Publication
    title="NaviSim: A Highly Accurate GPU Simulator for AMD RDNA GPUs"
    authors="Yuhui Bao, Yifan Sun, Zlatan Feric, Michael Tian Shen, Micah
            Weston, José L. Abellán, Trinayan Baruah, John Kim, Ayay Joshi,
            and David Kaeli"
    venue="PACT 2022"
/>

<h2 class="sec-title">2021</h2>

<Publication
    title="Daisen: A Framework for Visualizing Detailed GPU Execution"
    authors="Yifan Sun, Yixuan Zhang, Ali Mosallaei, Michael D. Shah, Cody
            Dunne, David Kaeli"
    venue="EuroVis 2021"
/> -->
