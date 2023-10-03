<script>
    import Nav from '$components/nav.svelte'
    import News from '$components/news.svelte'
    import LabIntro from '$components/labintro.svelte'
    import '$src/app.css'
    import YifanSidebar from './YifanSidebar.svelte'
    import ResearchInterests from '$src/lib/components/ResearchInterests.svelte'
</script>

<svelte:head>
    <title>Scalable Architecture Lab</title>
</svelte:head>

<Nav />

<div class="main-container">
    <div class="w-full md:w-3/12 lg:w-3/12">
        <YifanSidebar />
    </div>
    <div class="w-full md:w-6/12 lg:w-6/12">
        <p>
            I am an Assistant Professor in the Department of Computer Science
            at William & Mary since Fall 2020. I received my Ph.D. degree from
            the Department of Electrical and Computer Engineering at
            Northeastern University in 2020 under the supervision of David
            Kaeli. My research interests lie in GPU architecture, performance
            evaluation, and performance modeling.
        </p>

        <ResearchInterests />
    </div>

    <div class="w-full md:w-3/12">
        <News />
    </div>
</div>

<style lang="postcss">
</style>
