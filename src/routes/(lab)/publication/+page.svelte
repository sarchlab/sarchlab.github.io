<script>
    import '$src/app.css'
    import News from '$src/lib/components/news.svelte'
    import PublicationList from '$src/lib/components/PublicationList.svelte'

    export let data
</script>

<svelte:head>
    <title>Scalable Architecture Lab | Publication</title>
</svelte:head>

<div class="two-col-left">
    <PublicationList filter="lab" publications={data.publications} />
</div>

<div class="two-col-right">
    <News />
</div>

<style>
</style>
