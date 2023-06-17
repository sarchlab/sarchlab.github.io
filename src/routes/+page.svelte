<script>
    import Nav from '$components/nav.svelte'
    import '$src/app.css'
</script>

<Nav />

<div class="main-container">
    <div class="w-9/12">Main Content</div>
    <div class="w-3/12">News</div>
    <!-- <h1>Scalable Architecture Lab</h1>

    <p>
        The Scalable Architecture Lab is a research lab at the College of
        William and Mary, lead by<a href="https://syifan.github.io"
            >Dr. Yifan Sun</a
        >.
    </p>

    <p>
        <b>Mission:</b>
        Empower computer architecture developers designing large-scale computing
        systems with explainable computer architecture design methods and tools.
    </p>

    <h2>People</h2> -->
</div>

<style lang="postcss">
    .main-container {
        @apply flex;
        @apply md:container md:mx-auto;
        /* @apply bg-white dark:bg-stone-900; */
    }
</style>
