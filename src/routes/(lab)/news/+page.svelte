<script>
    import News from '$components/news.svelte'
    import '$src/app.css'
</script>

<svelte:head>
    <title>Scalable Architecture Lab | News</title>
</svelte:head>

<div class="main-container">
    <div class="w-full md:w-9/12 lg:w-6/12 max-lg">
        <News />
    </div>
</div>

<style>
</style>
