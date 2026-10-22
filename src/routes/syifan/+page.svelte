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

    <h2 class="sec-title">Join My Lab</h2>

    <p>
        If you are interested in joining HUSCARL, either as a Ph.D. student,
        master's student, undergraduate researcher, or research intern, you can
        contact me by sending an email to
        <a href="mailto:profyifansun@gmail.com">profyifansun@gmail.com</a>.
    </p>

    <ResearchInterests />
</div>

<style lang="postcss">
</style>
