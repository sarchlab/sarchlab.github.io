<script>
    import '$src/app.css'
    import News from '$components/news.svelte'
    import PublicationList from '$src/lib/components/PublicationList.svelte'

    export let data
</script>

<svelte:head>
    <title>Scalable Architecture Lab | Publication</title>
</svelte:head>

<div>
    <PublicationList filter="yifan" publications={data.publications} />
</div>

<style>
</style>
