<script>
    import ResearchInterests from './research_interests.svelte'

    import Sponsor from './sponsor.svelte'
</script>

<h1 class="sec-title">HUSCARL</h1>

<p class="mt-2 text-sm">
    HUSCARL (Human-Centered System & Computer Architecture Lab), formerly known
    as the Scalable Architecture Lab, is a research lab in the Computer Science
    Department at William & Mary. HUSCARL is led by Dr.
    <a href="/syifan">Yifan Sun</a>. HUSCARL believes that computer systems and
    chips are designed by humans and for humans. HUSCARL bridges HCI and data
    visualization with chip design,
    building open-source simulators, visualization tools, and AI agents that
    help humans understand computer architectures and make architectures serve
    humans better.
</p>

<h2 class="sec-title">Join HUSCARL</h2>

<p>
    If you are interested in joining HUSCARL, either as a Ph.D. student,
    master's student, undergraduate researcher, or research intern, you can
    contact Yifan Sun by sending an email to
    <a href="mailto:profyifansun@gmail.com">profyifansun@gmail.com</a>.
</p>

<ResearchInterests />

<h2 class="sec-title">Sponsors</h2>

<div
    class="flex flex-row flex-wrap gap-6 items-center justify-center md:justify-start"
>
    <Sponsor img="NSF_logo.png" name="U.S. National Science Foundation" />
    <Sponsor
        img="AMD_Logo.svg.png"
        name="Advanced Micro Devices"
        invertInDark={true}
    />
</div>

<style>
</style>
