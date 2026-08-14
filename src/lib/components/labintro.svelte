<script>
    import ResearchInterests from './research_interests.svelte'

    import Sponsor from './sponsor.svelte'
</script>

<h2 class="sec-title">HUSCARL</h2>

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

<h2 class="sec-title">Hiring</h2>

<p>
    HUSCARL has no plan of hiring new Ph.D. students, research interns, or
    undergraduate research assistants in Spring 2026, Fall 2026 and Spring
    2027.
</p>

<!-- 
<p>
    <b>Ph.D.</b> HUSCARL is actively seeking <u>1-2 Ph.D. students</u>,
    starting from either the Spring 2024 or Fall 2025 semester, with an
    requirement of a strong programming background and an interest in
    researching the computer hardware domain.
</p>
<p>
    We particularly eager to hire one student with background in <u
        >Complexity Science or Mathematical Modeling
    </u>.
</p>
<p>
    <b>Research intern.</b> We welcome applications for unpaid, remote research
    intern positions. William & Mary undergraduate students are always welcome
    to contact <a href="/syifan">Yifan Sun</a> for research opportunities. Recommendation
    letters can be provided for productive students.
</p>
<p>
    <b>How to apply.</b> Interested candidates should email Yifan Sun (profyifansun@gmail.com)
    with their CV and transcript attached to inquire about opportunities.
</p> -->

<ResearchInterests />

<h2 class="sec-title">Sponsors</h2>

<div
    class="flex flex-row flex-wrap gap-6 items-center justify-center md:justify-start"
>
    <Sponsor img="NSF_logo.png" name="National Science Foundation" />
    <Sponsor
        img="AMD_Logo.svg.png"
        name="Advanced Micro Devices"
        invertInDark={true}
    />
</div>

<style>
</style>
