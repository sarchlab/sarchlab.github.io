<script>
    import ResearchInterests from './research_interests.svelte'

    import Sponsor from './sponsor.svelte'
</script>

<h2 class="sec-title">Scalable Architecture Lab</h2>

<p class="mt-2 text-sm">
    Scalable Architecture Lab (SARCHLAB) is a research lab that runs under the
    Computer Science Department of William & Mary, under the supervision of Dr.
    Yifan Sun. SARCHLAB aims to develop scalable and efficient computer
    architectures by emphasizing the capabilities for human to understand the
    architecture and for the architecture to serve human.
</p>

<h2 class="sec-title">Hiring</h2>

<p>
    SArchLab has no plan of hiring new Ph.D. students, research interns, or
    undergraduate research assistants in Spring 2026, Fall 2026 and Spring
    2027.
</p>

<!-- 
<p>
    <b>Ph.D.</b> SARCHLAB is actively seeking <u>1-2 Ph.D. students</u>,
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
    <b>How to apply.</b> Interested candidates should email Yifan Sun (ysun25@wm.edu)
    with their CV and transcript attached to inquire about opportunities.
</p> -->

<ResearchInterests />

<h2 class="sec-title">Sponsors</h2>

<div
    class="flex flex-row flex-wrap gap-6 items-center justify-center md:justify-start"
>
    <Sponsor img="NSF_logo.png" name="National Science Foundation" />
    <Sponsor img="AMD_Logo.svg.png" name="Advanced Micro Devices" />
</div>

<style>
</style>
