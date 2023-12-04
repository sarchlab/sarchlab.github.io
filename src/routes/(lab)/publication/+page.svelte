<script>
    import '$src/app.css'
    import Publication from '$src/lib/components/publication.svelte'
    import News from '$src/lib/components/news.svelte'
</script>

<svelte:head>
    <title>Scalable Architecture Lab | Publication</title>
</svelte:head>

<div class="two-col-left">
    <h1>Publication</h1>

    <h2 class="sec-title">2023</h2>
    <Publication
        title="Visual Exploratory Analysis for Designing Large-Scale Network-on-Chip Architectures: A Domain Expert-Led Design Study"
        authors="Shaoyu Wang (co-first author), Hang Yan (co-first author), Katherine E. Isaacs, Yifan Sun"
        venue="TVCG"
    />

    <Publication
        title="Path Forward Beyond Simulators: Fast and Accurate GPU
        Execution Time Prediction for DNN Workloads"
        authors="Ying Li, Yifan Sun, Adwait Jog"
        venue="MICRO 2023"
    />

    <Publication
        title="Photon: A Fine-grained Sampled Simulation Methodology for GPU
            Workloads"
        authors="Changxi Liu, Yifan Sun, Trevor E. Carlson"
        venue="MICRO 2023"
    />

    <h2 class="sec-title">2022</h2>
    <Publication
        title="Accelerated Computing with HIP"
        authors="Yifan Sun, Trinayan Baruah, David Kaeli"
        venue="Book"
    />

    <Publication
        title="NaviSim: A Highly Accurate GPU Simulator for AMD RDNA GPUs"
        authors="Yuhui Bao, Yifan Sun, Zlatan Feric, Michael Tian Shen, Micah
            Weston, José L. Abellán, Trinayan Baruah, John Kim, Ayay Joshi,
            and David Kaeli"
        venue="PACT 2022"
    />

    <h2 class="sec-title">2021</h2>

    <Publication
        title="Daisen: A Framework for Visualizing Detailed GPU Execution"
        authors="Yifan Sun, Yixuan Zhang, Ali Mosallaei, Michael D. Shah, Cody
            Dunne, David Kaeli"
        venue="EuroVis 2021"
    />
</div>
<div class="two-col-right">
    <News />
</div>

<style>
</style>
