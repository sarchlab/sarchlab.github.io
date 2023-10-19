<script>
    import News from '$components/news.svelte'
    import LabIntro from '$components/labintro.svelte'
    import '$src/app.css'
</script>

<svelte:head>
    <title>Scalable Architecture Lab</title>
</svelte:head>

<div class="two-col-left">
    <LabIntro />
</div>
<div class="two-col-right">
    <News />
</div>

<style lang="postcss">
</style>
