<script>
    import '$src/app.css'
    import News from '$components/news.svelte'
    import PublicationList from '$src/lib/components/publication_list.svelte'

    export let data
</script>

<svelte:head>
    <title>Yifan Sun | Publications</title>
</svelte:head>

<div>
    <PublicationList filter="yifan" publications={data.publications} />
</div>

<style>
</style>
