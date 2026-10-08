<script lang="ts">
    import '$src/app.css'
    import PublicationList from '$lib/components/publication_list.svelte'
    import Seo from '$lib/components/seo.svelte'
    import type { PageData } from './$types'

    export let data: PageData
</script>

<Seo
    title="HUSCARL | {data.topic.title}"
    description={data.topic.summary}
    path="/research/{data.topic.slug}"
/>

<article class="mx-auto w-full min-w-0 max-w-5xl pb-12">
    <header class="grid items-center gap-6 py-6 md:grid-cols-2">
        <h1 class="sec-title m-0">{data.topic.title}</h1>
        <img
            src={data.topic.image}
            alt=""
            width="1200"
            height="600"
            class="aspect-[2/1] w-full rounded-2xl border object-cover"
        />
    </header>

    <section aria-labelledby="overview">
        <h2 id="overview" class="sec-title">Overview</h2>
        {#each data.topic.overview as paragraph}
            <p>{paragraph}</p>
        {/each}
    </section>

    <section aria-labelledby="research-questions">
        <h2 id="research-questions" class="sec-title">Research questions</h2>
        <ul class="list-disc space-y-2 pl-6">
            {#each data.topic.questions as question}
                <li>{question}</li>
            {/each}
        </ul>
    </section>

    <section aria-labelledby="publications">
        <h2 id="publications" class="sec-title">Publications</h2>
        <PublicationList publications={data.publications} />
        {#if data.architecturePublications.length}
            <h3 class="sec-title text-2xl">GPU Architecture</h3>
            <PublicationList publications={data.architecturePublications} />
        {/if}
    </section>

    <section aria-labelledby="related-software">
        <h2 id="related-software" class="sec-title">Related software</h2>
        <ul class="list-disc space-y-2 pl-6">
            {#each data.topic.software as software}
                <li><a href={software.href}>{software.name}</a></li>
            {/each}
        </ul>
    </section>
</article>
