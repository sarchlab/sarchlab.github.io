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
    <nav
        aria-label="Research topics"
        class="flex flex-wrap items-center justify-between gap-4 border-b py-5 text-sm text-primary"
    >
        <a href="/">Home</a>
        <div class="flex gap-6">
            <a
                href="/research/{data.previousTopic.slug}"
                aria-label="Previous topic: {data.previousTopic.title}"
                rel="prev"
            >← Previous topic</a>
            <a
                href="/research/{data.nextTopic.slug}"
                aria-label="Next topic: {data.nextTopic.title}"
                rel="next"
            >Next topic →</a>
        </div>
    </nav>
    <header class="py-6 md:py-8">
        <h1 class="page-title">{data.topic.title}</h1>
    </header>

    <figure class="mx-auto max-w-3xl" aria-label="{data.topic.title} research overview">
        <img
            src="/research/overview/{data.topic.slug}.png"
            alt={data.topic.figure.alt}
            width={data.topic.figure.width}
            height={data.topic.figure.height}
            class="block h-auto w-full rounded-xl border"
        />
    </figure>

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
