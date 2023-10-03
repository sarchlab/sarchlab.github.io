<script>
    import Nav from '$components/nav.svelte'
    import News from '$components/news.svelte'
    import '$src/app.css'
    import Software from '$src/lib/components/software.svelte'
</script>

<svelte:head>
    <title>Scalable Architecture Lab | Software</title>
</svelte:head>

<Nav />

<div class="main-container">
    <div class="two-col-left">
        <div class="flex flex-wrap">
            <Software img="akita_logo.png" title="Akita">
                <a slot="link" href="https://github.com/sarchlab/akita">
                    https://github.com/sarchlab/akita
                </a>
                <div slot="description">
                    Akita is a highly flexible event-driven computer
                    architecture simulator engine. Akita features first party
                    models like caches, TLBs, and memory controllers. Akita
                    also highlights the capability of monitoring the simulation
                    in realtime and visualizing the simulation results.
                </div>
            </Software>

            <Software img="mgpusim_logo.png" title="MGPUSim">
                <a slot="link" href="https://github.com/sarchlab/mgpusim">
                    https://github.com/sarchlab/mgpusim
                </a>
                <div slot="description">
                    MGPUSim is a GPU simulator that especially features the
                    capability of simulating multi-GPU platforms. MGPUSim
                    simulates OpenCL workloads running on AMD GPUs. MGPUSim is
                    built on top of Akita.
                </div>
            </Software>
        </div>
    </div>
    <div class="two-col-right">
        <News />
    </div>
</div>

<style>
</style>
