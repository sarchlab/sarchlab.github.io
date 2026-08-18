<script>
    import ResearchTopic from './research_topic.svelte'
</script>

<h2 class="sec-title mb-0">Research Topics</h2>
<div class="flex flex-col">
    <ResearchTopic
        img="/explainable.jpg"
        title="Explainable Architecture"
        content="Ever-increasing complex chip designs make them hard for humans to understand. If the designers cannot fully understand the architecture, the chip will inevitably contain hardware bugs, performance bottlenecks, reliability issues, and security vulnerabilities. Therefore, we need to develop data visualization tools that help designers make well-informed and evidence-based decisions."
    />

    <ResearchTopic
        img="/simulation.jpg"
        title="Computer Architecture Simulation"
        content="Cycle-based simulators are essential tools for computer architecture researchers to validate their ideas. The community needs simulators that are easy to learn, flexible, fast, and accurate. We address these needs through the Akita simulator framework and the MGPUSim multi-GPU simulator."
    />

    <ResearchTopic
        img="/waferscale.jpg"
        title="Multi-GPU and Wafer-Scale System Design"
        content="Single-GPU systems struggle to meet the performance requirements of large-scale workloads. Researchers use multi-GPU and wafer-scale systems to achieve higher performance, but inter-GPU communication can become a dominant bottleneck. We design architecture and system techniques that reduce inter-GPU traffic and improve performance."
    />
</div>

<style lang="postcss">
</style>
