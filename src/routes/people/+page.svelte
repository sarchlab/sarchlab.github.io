<script>
    import Nav from '$components/nav.svelte'
    import News from '$components/news.svelte'
    import PeoplePage from '$src/lib/components/PeoplePage.svelte'
    import '$src/app.css'
</script>

<Nav />

<div class="main-container">
    <div class="two-col-left">
        <PeoplePage />
    </div>
    <div class="two-col-right">
        <News />
    </div>
</div>

<style>
</style>
