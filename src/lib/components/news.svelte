<script lang="ts">
    import { onMount } from 'svelte'

    export let maxItems = 6

    let box: HTMLDivElement | null = null
    let folded = false
    let foldedItems: Element[] = []

    let moreNewsButton = onMount(() => {
        if (maxItems > 0) {
            foldNews(null)
        }

        box?.classList.remove('invisible')
    })

    const toggleFold = (event: Event) => {
        if (folded) {
            unfoldNews(event.target)
        } else {
            foldNews(event.target)
        }
    }

    const foldNews = (btn: EventTarget | null) => {
        folded = true
        foldedItems = [...document.querySelectorAll('ul li')]
        foldedItems.slice(maxItems).forEach((item) => {
            ;(item as HTMLElement).style.display = 'none'
        })

        if (btn) {
            ;(btn as HTMLElement).innerHTML = 'More news ...'
        }
    }

    const unfoldNews = (btn: EventTarget | null) => {
        folded = false
        foldedItems.forEach((item) => {
            ;(item as HTMLElement).style.display = 'list-item'
        })

        if (btn) {
            ;(btn as HTMLElement).innerHTML = 'Less news'
        }
    }
</script>

<div class="invisible" bind:this={box}>
    <h2 class="sec-title">Lab News</h2>
    <ul>
        <li>
            <span class="date">[Mar 2025]</span>
            Our paper "TrioSim: A Lightweight Simulator for Large-Scale DNN Workloads
            on Multi-GPU Systems" has been accepted by the 52nd International Symposium
            on Computer Architecture (ISCA 2025)! Congrats Ying!
        </li>
        <li>
            <span class="date">[Mar 2025]</span>
            Two other papers have been accepted by ISCA 2025: "NetCrafter: Tailoring
            Network Traffic for Non-Uniform Bandwidth Multi-GPU Systems" and "The
            Sparsity-Aware LazyGPU Architecture". Thanks to our collaborators at
            UVA and NUS!
        </li>
        <li>
            <span class="date">[Mar 2025]</span>
            Our paper "Sibir: A Dynamic Binary Instrumentation Framework Targeting
            AMD GPUs" has been accepted by ISPASS 2025. Daoxuan and Yuwei have been
            involved in this project. Thanks to our collaborators at Northeastern
            University!
        </li>
        <li>
            <span class="date">[Mar 2025]</span>
            Our paper
            <a href="/wafer_scale_gpu_gpgpu.pdf"
                >"Exploring the Wafer-Scale GPU"</a
            > has been accepted by the GPGPU 2025 workshop and Daoxuan give a presentation
            at the workshop. Congrats Daoxuan!
        </li>
        <li>
            <span class="date">[Jan 2025]</span>
            Daoxuan Xu has achieved Ph.D. candidacy. Congrats Daoxuan!
        </li>
        <li>
            <span class="date">[Jul 2024]</span>
            Our paper
            <a href="https://arxiv.org/abs/2404.13414">
                "Looking into the Black Box: Monitoring Computer Architecture
                Simulations in Real-Time with AkitaRTM"
            </a>
            has been accepted by the 57th IEEE/ACM International Symposium on Microarchitecture
            (MICRO '24')! Congrats Ali!
        </li>
        <li>
            <span class="date">[Apr 2024]</span>
            Our paper
            <a href="https://arxiv.org/abs/2404.13414">
                "Evaluating the Effectiveness of LLMs in Introductory Computer
                Science Education: A Semester-Long Field Study"
            </a>
            has been accepted by the Tenth ACM Conference on Learning @ Scale (L@S
            '24') !
        </li>
        <li>
            <span class="date">[Mar 2024]</span> Our
            <a href="https://sarchlab.org/akita/akita24"
                >First Lightweight Community Workshop on Akita and MGPUSim</a
            > has been successfully organized. Thank you all for participating in
            the event.
        </li>
        <li>
            <span class="date">[Jan 2024]</span>
            Our paper "Impact of Raindrops on Camera-Based Detection in Software-Defined
            Vehicles" has been accepted by the 2nd IEEE International Conference
            on Mobility: Operations, Services, and Technologies (MOST '24') !
        </li>
        <li>
            <span class="date">[Jan 2024]</span> Sabila Al Jannat has achieved Ph.D.
            candidacy. Congrats!
        </li>
        <li>
            <span class="date">[Nov 2023]</span> Our paper "Visual Exploratory Analysis
            for Designing Large-Scale Network-on-Chip Architectures: A Domain Expert-Led
            Design Study" has been accepted by TVCG!
        </li>
        <li>
            <span class="date">[Sep 2023]</span> Our paper "Path Forward Beyond
            Simulators: Fast and Accurate GPU Execution Time Prediction for DNN
            Workloads" has been accepted by MICRO 2023! Congrats Ying!
        </li>
        <li>
            <span class="date">[Sep 2023]</span> Our paper "Photon: A Fine-grained
            Sampled Simulation Methodology for GPU Workloads" has been accepted
            by MICRO 2023!
        </li>
        <li>
            <span class="date">[Sep 2023]</span> Daoxuan Xu has joined our lab as
            a Ph.D. student. Welcome!
        </li>
        <li>
            <span class="date">[Mar 2023]</span> Our NSF CCRI Proposal Enabling
            Computer Architecture Simulation as a Service has been awarded! Thanks
            to NSF and my collaborator Kate Isaacs!
        </li>
        <li>
            <span class="date">[Feb 2023]</span> Our NSF CRII Proposal Building
            Explainable Architecture with Simulation and Visualization Techniques
            has been awarded! Thank you NSF!
        </li>
        <li>
            <span class="date">[Dec 2022]</span> Our book
            <i>Accelerated Computing with HIP</i>
            is published! It is available on
            <a
                href="https://www.amazon.com/Accelerated-Computing-HIP-Yifan-Sun-ebook/dp/B0BR8KSS7K/ref=sr_1_1?crid=2ZTHM9L2V0829&keywords=accelerated+computing+with+hip&qid=1672418109&sprefix=%2Caps%2C55&sr=8-1"
                >Amazon</a
            >
            or
            <a
                href="https://www.barnesandnoble.com/w/accelerated-computing-with-hip-yifan-sun/1142866934?ean=9798218107444"
                >Barnes & Noble</a
            >.
        </li>
        <li>
            <span class="date">[Aug 2022]</span> Out
            <a href="https://chip-dataset.vercel.app/">CHIP dataset</a>
            has been highlighted by
            <a
                href="https://fivethirtyeight.com/features/the-datasets-were-looking-at-this-week-13/"
                >the "Data Is Plural" column of FiveThirtyEight</a
            >.
        </li>
    </ul>
    <div>
        <button class="mt-4" on:click|preventDefault={toggleFold}
            >More news</button
        >
    </div>
</div>

<style lang="postcss">
    ul {
        @apply flex flex-col gap-4 pt-2;
        @apply text-sm;
    }

    li {
        @apply pl-2 border-l-2 border-l-muted;
    }

    .date {
        @apply text-sm text-muted-foreground;
    }
</style>
