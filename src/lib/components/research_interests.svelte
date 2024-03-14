<script>
    import ResearchTopic from './research_topic.svelte'
</script>

<h2 class="sec-title mb-0">Research Topics</h2>
<div class="flex flex-col">
    <ResearchTopic
        img="pcb.png"
        title="Explainable Architecture"
        content="Ever-increasing complex chip designs make them hard for humans to understand. If the designers cannot fully understand the architecture, the chip will inevitably contain hardware bugs, performance bottlenecks, reliability issues, and security vulnerabilities. Therefore, we need to develop data visualization tools that help designers make well-informed and evidence-based decisions."
    />

    <ResearchTopic
        img="circuit.jpg"
        title="Computer Architecture Simulation"
        content="A cycle-based simulator is an essential tool for computer architecture researchers to validate their ideas. The community requires the simulators to be easy to learn, highly flexible, highly performant, and highly accurate. I am honored to take the challenge and contribute to the community with the Akita simulator framework and the MGPUSim multi-GPU simulator."
    />

    <ResearchTopic
        img="multigpu.jpg"
        title="Multi-GPU and Wafer-Scale System Design"
        content="Single GPU systems struggle to meet the performance requirement. Therefore, researchers start to use large-scale multi-GPU systems to achieve extreme performance. Inter-GPU communication can easily kill the performance. I design architecture and system solutions for multi-GPU systems to avoid inter-GPU traffic and improve performance."
    />
</div>

<style lang="postcss">
</style>
