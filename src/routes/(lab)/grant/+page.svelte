<script>
    import '$src/app.css'
    import News from '$src/lib/components/news.svelte'
    import GrantEntry from './grant_entry.svelte'
</script>

<svelte:head>
    <title>Scalable Architecture Lab | Grant</title>
</svelte:head>

<div class="two-col-left">
    <p>
        SARCHLAB has acquired $908K external grant to support the research and
        education activities. We thank our sponsors for the generous support.
    </p>
    <GrantEntry
        title="Enabling Graphics Processing Unit Performance Simulation for Large-Scale Workloads with Lightweight Simulation Methods"
        sponsor="National Science Foundation (NSF)"
        program="CISE Core, SHF, Medium"
        duration="5/2024 - 4/2028"
        amount="≅1.2M"
        labAmount="≅$376K"
        pi="Yifan Sun, Adwait Jog (UVA), Sreepathi Pai (Rochester)"
    />
    <GrantEntry
        title="Building Explainable Architecture with Simulation and Visualization Techniques"
        sponsor="National Science Foundation (NSF)"
        program="CRII, OAC"
        duration="5/2023 - 4/2025"
        amount="$175K"
        labAmount="$175K"
        pi="Yifan Sun"
    />
    <GrantEntry
        title="Enabling Computer Architecture Simulation as a Service"
        sponsor="National Science Foundation (NSF)"
        program="CIRC, Planning-C"
        duration="2/2023 - 2/2025"
        amount="$100K"
        labAmount="≅$73K"
        pi="Yifan Sun, Katherine E. Isaacs (University of Utah)"
    />
    <GrantEntry
        title="Enabling Computer Architecture Simulation as a Service"
        sponsor="AMD Inc."
        program="Multiple Gifts"
        duration="Unconstrained Gift"
        amount="$284K"
        labAmount="$284K"
        pi="Yifan Sun"
    />
</div>

<div class="two-col-right">
    <News />
</div>
