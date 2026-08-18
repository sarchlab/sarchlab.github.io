<script>
    import News from '$components/news.svelte'
    import Seo from '$components/seo.svelte'
    import '$src/app.css'
</script>

<Seo
    title="HUSCARL | News"
    description="Read the latest HUSCARL news about publications, student achievements, software releases, and research activities."
    path="/news"
/>

<div class="w-full md:w-9/12 lg:w-6/12 max-lg">
    <h1 class="sec-title">News</h1>
    <News />
</div>

<style>
</style>
