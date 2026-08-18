<script>
    import '$src/app.css'
    import News from '$src/lib/components/news.svelte'
    import PublicationList from '$src/lib/components/publication_list.svelte'
    import Seo from '$components/seo.svelte'

    export let data
</script>

<Seo
    title="HUSCARL | Publications"
    description="Publications from HUSCARL on computer architecture, GPU simulation, performance analysis, visualization, and human-AI collaboration."
    path="/publication"
/>

<div class="two-col-left">
    <h1 class="sec-title">Publications</h1>
    <PublicationList filter="lab" publications={data.publications} />
</div>

<div class="two-col-right">
    <News />
</div>

<style>
</style>
