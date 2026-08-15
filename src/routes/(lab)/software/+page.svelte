<script>
    import Nav from '$components/nav.svelte'
    import News from '$components/news.svelte'
    import '$src/app.css'
    import Software from '$src/lib/components/software.svelte'
</script>

<svelte:head>
    <title>HUSCARL | Software</title>
</svelte:head>

<div class="two-col-left flex flex-wrap">
    <Software img="/akita_logo.png" title="Akita" titleLink="/akita">
        <a slot="link" href="https://github.com/sarchlab/akita">
            https://github.com/sarchlab/akita
        </a>
        <div slot="description">
            Akita is a highly flexible event-driven computer architecture
            simulator engine. Akita features first party models like caches,
            TLBs, and memory controllers. Akita also highlights the capability
            of monitoring the simulation in realtime and visualizing the
            simulation results.
        </div>
    </Software>

    <Software img="/mgpusim_logo.png" title="MGPUSim" titleLink="/akita">
        <a slot="link" href="https://github.com/sarchlab/mgpusim">
            https://github.com/sarchlab/mgpusim
        </a>
        <div slot="description">
            MGPUSim is a GPU simulator that especially features the capability
            of simulating multi-GPU platforms. MGPUSim simulates OpenCL
            workloads running on AMD GPUs. MGPUSim is built on top of Akita.
        </div>
    </Software>

    <Software
        img="/triosim_logo.svg"
        title="TrioSim"
        titleLink="https://github.com/sarchlab/triosim"
    >
        <a slot="link" href="https://github.com/sarchlab/triosim">
            https://github.com/sarchlab/triosim
        </a>
        <div slot="description">
            TrioSim is a lightweight simulator for large-scale DNN workloads on
            multi-GPU systems. It supports data, tensor, and pipeline
            parallelism and models both electrical and optical interconnects.
        </div>
    </Software>

    <Software
        img="/thebotcompany_logo.svg"
        title="TheBotCompany"
        titleLink="https://github.com/syifan/thebotcompany"
    >
        <a slot="link" href="https://github.com/syifan/thebotcompany">
            https://github.com/syifan/thebotcompany
        </a>
        <div slot="description">
            TheBotCompany coordinates persistent, self-organizing AI agent
            teams that plan, implement, and verify software projects. It
            provides multi-project orchestration, human escalation, budget
            controls, and a unified monitoring dashboard.
        </div>
    </Software>
</div>
<div class="two-col-right">
    <News />
</div>

<style>
</style>
