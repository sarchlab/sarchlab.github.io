<script>
    import Nav from '$components/nav.svelte'
    import News from '$components/news.svelte'
    import People from '$components/people.svelte'
    import '$src/app.css'
</script>

<Nav />

<div class="main-container">
    <div class="two-col-left">
        <People />
    </div>
    <div class="two-col-right">
        <News />
    </div>
</div>

<style>
</style>
