<script>
    import ResearchInterests from './ResearchInterests.svelte'

    import Sponsor from './sponsor.svelte'
</script>

<h2 class="font-bold">Scalable Architecture Lab</h2>

<p class="mt-2 text-sm">
    Scalable Architecture Lab (SAarchL) is a research lab that runs under the
    Computer Science Department of William & Mary, under the supervision of Dr.
    Yifan Sun. SARCHLAB aims to develop scalable and efficient computer
    architectures by emphasizing the capabilities for human to understand the
    architecture and for the architecture to serve human.
</p>

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
