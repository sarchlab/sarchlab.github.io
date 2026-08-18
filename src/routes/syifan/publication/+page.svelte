<script>
    import '$src/app.css'
    import News from '$components/news.svelte'
    import Seo from '$components/seo.svelte'
    import PublicationList from '$src/lib/components/publication_list.svelte'

    export let data
</script>

<Seo
    title="Yifan Sun | Publications"
    description="Publications by Yifan Sun on computer architecture, GPU systems, simulation, performance analysis, visualization, and computing education."
    path="/syifan/publication"
    image="/yifan_profile.png"
    imageAlt="Yifan Sun"
/>

<div>
    <h1 class="sec-title">Publications</h1>
    <PublicationList filter="yifan" publications={data.publications} />
</div>

<style>
</style>
