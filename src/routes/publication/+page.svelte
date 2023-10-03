<script>
    import Nav from '$components/nav.svelte'
    import News from '$components/news.svelte'

    import '$src/app.css'
    import Publication from '$src/lib/components/publication.svelte'
</script>

<svelte:head>
    <title>Scalable Architecture Lab | Publication</title>
</svelte:head>

<Nav />

<div class="main-container">
    <div class="two-col-left">
        <h2 class="sec-title">2023</h2>
        <Publication>
            <span slot="title">
                Path Forward Beyond Simulators: Fast and Accurate DNN Execution
                Time Prediction
            </span>
            <span slot="authors"> Ying Li, Yifan Sun, Adwait Jog </span>
            <span slot="venue">MICRO 2023</span>
            <span slot="links" />
        </Publication>

        <Publication>
            <span slot="title">
                Photon: A Fine-grained Sampled Simulation Methodology for GPU
                Workloads
            </span>
            <span slot="authors">
                Changxi Liu, Yifan Sun, Trevor E. Carlson
            </span>
            <span slot="venue">MICRO 2023</span>
            <span slot="links" />
        </Publication>

        <h2 class="sec-title">2022</h2>
        <Publication>
            <span slot="title"> Accelerated Computing with HIP </span>
            <span slot="authors">
                <b>Yifan Sun</b>, Trinayan Baruah, David Kaeli
            </span>
            <span slot="venue">Book</span>
            <span slot="links" />
        </Publication>

        <Publication>
            <span slot="title">
                NaviSim: A Highly Accurate GPU Simulator for AMD RDNA GPUs
            </span>
            <span slot="authors">
                Yuhui Bao, Yifan Sun, Zlatan Feric, Michael Tian Shen, Micah
                Weston, José L. Abellán, Trinayan Baruah, John Kim, Ayay Joshi,
                and David Kaeli
            </span>
            <span slot="venue">PACT 2022</span>
            <span slot="links" />
        </Publication>

        <h2 class="sec-title">2021</h2>
        <Publication>
            <span slot="title">
                Daisen: A Framework for Visualizing Detailed GPU Execution
            </span>
            <span slot="authors">
                Yifan Sun, Yixuan Zhang, Ali Mosallaei, Michael D. Shah, Cody
                Dunne, David Kaeli
            </span>
            <span slot="venue">EuroVis 2021</span>
            <span slot="links" />
        </Publication>
    </div>
    <div class="two-col-right">
        <News />
    </div>
</div>

<style>
</style>
