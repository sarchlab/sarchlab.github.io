<script>
    import Nav from '$components/nav.svelte'
    import News from '$components/news.svelte'
    import YifanSidebar from './YifanSidebar.svelte'
    import ResearchInterests from '$src/lib/components/ResearchInterests.svelte'
    import '$src/app.css'
</script>

<svelte:head>
    <title>Yifan Sun</title>
</svelte:head>

<div>
    <p>
        I am an Assistant Professor in the Department of Computer Science at
        William & Mary. I am the lead of the <a href="/"
            >Scalable Architecture Lab</a
        >. I received my Ph.D. degree from the Department of Electrical and
        Computer Engineering at Northeastern University in 2020. My research
        interests lie in GPU architecture, performance evaluation, and
        performance modeling.
    </p>

    <ResearchInterests />
</div>

<style lang="postcss">
</style>
