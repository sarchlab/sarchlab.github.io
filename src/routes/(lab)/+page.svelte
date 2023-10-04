<script>
    import Nav from '$components/nav.svelte'
    import News from '$components/news.svelte'
    import LabIntro from '$components/labintro.svelte'
    import '$src/app.css'
</script>

<svelte:head>
    <title>Scalable Architecture Lab</title>
</svelte:head>

<div class="main-container">
    <div class="two-col-left">
        <LabIntro />
    </div>
    <div class="two-col-right">
        <News />
    </div>
</div>

<style lang="postcss">
</style>
