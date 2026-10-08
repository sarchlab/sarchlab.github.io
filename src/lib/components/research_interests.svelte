<script>
    import ResearchTopic from './research_topic.svelte'
    import { researchTopics } from '$lib/data/research_topics'
</script>

<h2 class="sec-title mb-0">Research Topics</h2>
<div class="flex flex-col">
    {#each researchTopics as topic}
        <ResearchTopic
            img={topic.image}
            title={topic.title}
            content={topic.summary}
            href="/research/{topic.slug}"
        />
    {/each}
</div>
