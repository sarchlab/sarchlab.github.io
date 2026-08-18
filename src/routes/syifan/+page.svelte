<script>
    import ResearchInterests from '$src/lib/components/research_interests.svelte'
    import Seo from '$components/seo.svelte'
    import '$src/app.css'

    const personStructuredData = {
        '@context': 'https://schema.org',
        '@type': 'ProfilePage',
        mainEntity: {
            '@type': 'Person',
            '@id': 'https://sarchlab.org/syifan#person',
            name: 'Yifan Sun',
            alternateName: '孙轶凡',
            url: 'https://sarchlab.org/syifan',
            image: 'https://sarchlab.org/yifan_profile.png',
            jobTitle: 'Class of 1953 Associate Professor of Computer Science',
            affiliation: {
                '@type': 'CollegeOrUniversity',
                name: 'William & Mary',
                url: 'https://www.wm.edu/',
            },
            memberOf: {
                '@id': 'https://sarchlab.org/#organization',
                '@type': 'Organization',
                name: 'HUSCARL',
            },
            sameAs: [
                'https://scholar.google.com/citations?user=LZg-kGAAAAAJ&hl=en',
                'https://github.com/syifan',
            ],
        },
    }
</script>

<Seo
    title="Yifan Sun | Computer Architecture Researcher"
    description="Yifan Sun is the Class of 1953 Associate Professor of Computer Science at William & Mary and leads HUSCARL."
    path="/syifan"
    image="/yifan_profile.png"
    imageAlt="Yifan Sun"
    type="profile"
    structuredData={personStructuredData}
/>

<div>
    <h1 class="sec-title">Yifan Sun</h1>
    <p>
        I am the Class of 1953 Associate Professor of Computer Science at
        William & Mary. I am the lead of <a href="/"
            >HUSCARL (Human-Centered System & Computer Architecture Lab)</a
        >. I received my Ph.D. degree from the Department of Electrical and
        Computer Engineering at Northeastern University in 2020. My research
        interests lie in GPU architecture, performance evaluation, and
        performance modeling.
    </p>

    <h2 class="sec-title">Hiring</h2>

    <p>
        I have no plan of hiring new Ph.D. students, research interns, or
        undergraduate research assistants in Spring 2026, Fall 2026 and Spring
        2027.
    </p>

    <!-- <p>
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
        <b>How to apply.</b> Interested candidates should email me (profyifansun@gmail.com)
        with their CV and transcript attached to inquire about opportunities.
    </p> -->

    <ResearchInterests />
</div>

<style lang="postcss">
</style>
