<script>
    import Nav from '$components/nav.svelte'
    import News from '$components/news.svelte'
    import PeoplePage from '$src/lib/components/PeoplePage.svelte'
    import '$src/app.css'
</script>

<svelte:head>
    <title>Scalable Architecture Lab | News</title>
</svelte:head>

<Nav />

<div class="main-container">
    <div class="w-full md:w-9/12 lg:w-6/12 max-lg">
        <News />
    </div>
</div>

<style>
</style>
