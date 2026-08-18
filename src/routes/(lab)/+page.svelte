<script>
    import News from '$components/news.svelte'
    import LabIntro from '$components/labintro.svelte'
    import Seo from '$components/seo.svelte'
    import '$src/app.css'

    const organizationStructuredData = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        '@id': 'https://sarchlab.org/#organization',
        name: 'HUSCARL',
        alternateName: 'Human-Centered System & Computer Architecture Lab',
        url: 'https://sarchlab.org/',
        logo: 'https://sarchlab.org/branding/huscarl_full_light.png',
        parentOrganization: {
            '@type': 'CollegeOrUniversity',
            name: 'William & Mary',
            url: 'https://www.wm.edu/',
        },
        sameAs: ['https://github.com/sarchlab'],
    }
</script>

<Seo
    title="HUSCARL | Human-Centered System & Computer Architecture Lab"
    description="HUSCARL at William & Mary develops human-centered computer architecture tools, open-source simulators, visualizations, and AI agents."
    path="/"
    structuredData={organizationStructuredData}
/>

<div class="two-col-left">
    <LabIntro />
</div>
<div class="two-col-right">
    <News />
</div>

<style lang="postcss">
</style>
