<script>
    import Nav from '$components/nav.svelte'
    import News from '$components/news.svelte'
    import '$src/app.css'
</script>

<svelte:head>
    <title>Scalable Architecture Lab | News</title>
</svelte:head>

<div class="w-full md:w-9/12 lg:w-6/12 max-lg">
    <News />
</div>

<style>
</style>
