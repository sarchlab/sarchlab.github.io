<script>
    import Nav from '$components/nav.svelte'
    import News from '$components/news.svelte'
    import YifanSidebar from './YifanSidebar.svelte'
    import ResearchInterests from '$src/lib/components/research_interests.svelte'
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

    <h2 class="sec-title">Hiring</h2>

    <p>
        <b>Ph.D.</b> I am actively seeking <u>1-2 Ph.D. students</u>, starting
        to join our team in Spring 2024 or Fall 2025. Candidates should possess
        a solid background in programming and a keen interest in computer
        hardware research. Specifically, I am eager to mentor a student
        specializing in data visualization and a student in LLM/NLP.
    </p>
    <p>
        <b>Research intern.</b> I also mentor unpaid, remote research intern who
        may consider to pursue Ph.D. degree under my supervision later. William
        & Mary undergraduate students are always welcome to contact me for research
        opportunities. I am happy to provide recommendation letters for productive
        students.
    </p>
    <p>
        <b>How to apply.</b> Interested candidates should email me (ysun25@wm.edu)
        with their CV and transcript attached to inquire about opportunities.
    </p>

    <ResearchInterests />
</div>

<style lang="postcss">
</style>
