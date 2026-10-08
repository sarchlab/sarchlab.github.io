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
    To become a Huscarl, you need to be able to drive your own research.
    Huscarls work with labmates as collaborators, shaping and leading their own
    research questions while seeking help from each other.
</p>

<p>
    If you are interested in joining HUSCARL, either as a Ph.D. student,
    master's student, undergraduate researcher, or research intern, please fill
    out
    <a href="https://forms.gle/KQ6JHUNNnai7Kfwg7" target="_blank" rel="noopener"
        >this form</a
    >. Note that submitting the form does not replace the formal graduate or
    undergraduate program application through William & Mary.
</p>

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
