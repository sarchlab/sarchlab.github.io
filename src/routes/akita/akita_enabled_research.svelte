<script lang="ts">
    let paperList: HTMLElement
    let paperListFewerBtn: HTMLElement
    let paperListMoreBtn: HTMLElement

    function loadMorePapers() {
        paperList.classList.remove('h-60')
        paperListMoreBtn.classList.add('hidden')
        paperListFewerBtn.classList.remove('hidden')
    }

    function loadFewerPapers() {
        paperList.classList.add('h-60')
        paperListMoreBtn.classList.remove('hidden')
        paperListFewerBtn.classList.add('hidden')
    }
</script>

<div class="flex flex-col gap-5 md:items-start">
    <h2 class="text-4xl mb-3 text-theme font-bold">Enabled Research</h2>
    <p>
        So far, there are 18 published papers that uses Akita-based simulators
        to validate design ideas or use Akita to build new simulators. Out of
        these 18 papers, 9 papers do not directly involve Dr. Sun. If we missed
        any other papers, please let us know.
    </p>
    <p>Below is a full list of papers:</p>
    <div
        id="paper-list"
        class="h-60 overflow-hidden text-sm"
        bind:this={paperList}
    >
        <ul class="px-5 list-outside list-disc">
            <li>
                Yuan Feng, Seonjin Na, Hyesoon Kim, Hyeran Jeon. "Barre Chord:
                Efficient Virtual Memory Translation for Multi-Chip-Module GPUs
                " (2024)
            </li>
            <li>
                Bingyao Li, Yueqi Wang, Tianyu Wang, Lieven Eeckhout, Jun Yang,
                Aamer Jaleel, Xulong Tang. "Barre Chord: Efficient Virtual
                Memory Translation for Multi-Chip-Module GPUs" (2024)
            </li>
            <li>
                Changxi Liu, Yifan Sun, and Trevor E. Carlson. "Photon: A
                Fine-grained Sampled Simulation Methodology for GPU Workloads."
                (2023).
            </li>
            <li>
                Ying Li, Yifan Sun, and Adwait Jog. "Path Forward Beyond
                Simulators: Fast and Accurate GPU Execution Time Prediction for
                DNN Workloads." (2023).
            </li>
            <li>
                Kaustubh Shivdikar, Yuhui Bao, Rashmi Agrawal, Michael Shen,
                Gilbert Jonatan, Evelio Mora, Alexander Ingare et al. "GME:
                GPU-based Microarchitectural Extensions to Accelerate
                Homomorphic Encryption." arXiv preprint arXiv:2309.11001
                (2023).
            </li>
            <li>
                Li, Bingyao, Yanan Guo, Yueqi Wang, Aamer Jaleel, Jun Yang, and
                Xulong Tang. "IDYLL: Enhancing Page Translation in Multi-GPUs
                via Light Weight PTE Invalidations." (2023).
            </li>
            <li>
                Bingyao Li, Jieming Yin, Anup Holey, Youtao Zhang, Jun Yang,
                and Xulong Tang. "Trans-FW: Short Circuiting Page Table Walk in
                Multi-GPU Systems via Remote Forwarding." In 2023 IEEE
                International Symposium on High-Performance Computer
                Architecture (HPCA), pp. 456-470. IEEE, 2023.
            </li>
            <li>
                Belayneh, Leul, Haojie Ye, Kuan-Yu Chen, David Blaauw, Trevor
                Mudge, Ronald Dreslinski, and Nishil Talati. "Locality-Aware
                Optimizations for Improving Remote Memory Latency in Multi-GPU
                Systems." In Proceedings of the International Conference on
                Parallel Architectures and Compilation Techniques, pp. 304-316.
                2022.
            </li>
            <li>
                Yuihui Bao, Yifan Sun, Zlatan Feric, Michael Tian Shen, Micah
                Weston, José L. Abellán, Trinayan Baruah, John Kim, Ajay Joshi,
                and David Kaeli. "NaviSim: A Highly Accurate GPU Simulator for
                AMD RDNA GPUs." In Proceedings of the International Conference
                on Parallel Architectures and Compilation Techniques, pp.
                333-345. 2022.
            </li>
            <li>
                Michael Shen, Derek Rodriguez, and David Kaeli. "Evaluating the
                Impact of Branch Predictor Design on Spectre Attacks." (2022).
            </li>
            <li>
                Shi Dong, Yifan Sun, Nicolas Bohm Agostini, Elmira Karimi,
                Daniel Lowell, Jing Zhou, José Cano, José L. Abellán, and David
                Kaeli. "Spartan: A sparsity-adaptive framework to accelerate
                deep neural network training on GPUs." IEEE Transactions on
                Parallel and Distributed Systems 32, no. 10 (2021): 2448-2463.
            </li>
            <li>
                Bingyao Li, Jieming Yin, Youtao Zhang, and Xulong Tang.
                "Improving address translation in multi-gpus via sharing and
                spilling aware tlb design." In MICRO-54: 54th Annual IEEE/ACM
                International Symposium on Microarchitecture, pp. 1154-1168.
                2021.
            </li>
            <li>
                Griffin Knipe, and Derek Rodriguez. "RISC-V Microarchitecture
                Simulation State Enumeration." In Fifth Workshop on Computer
                Architecture Research with RISC-V (CARRV 2021). 2021.
            </li>
            <li>
                Pengyu Wang, Jing Wang, Chao Li, Jianzong Wang, Haojin Zhu, and
                Minyi Guo. "Grus: Toward unified-memory-efficient
                high-performance graph processing on gpu." ACM Transactions on
                Architecture and Code Optimization (TACO) 18, no. 2 (2021):
                1-25.
            </li>
            <li>
                Trinayan Baruah, Yifan Sun, Ali Tolga Dinçer, Saiful A.
                Mojumder, José L. Abellán, Yash Ukidave, Ajay Joshi, Norman
                Rubin, John Kim, and David Kaeli. "Griffin: Hardware-software
                support for efficient page migration in multi-gpu systems." In
                2020 IEEE International Symposium on High Performance Computer
                Architecture (HPCA), pp. 596-609. IEEE, 2020.
            </li>

            <li>
                Trinayan, Baruah, Yifan Sun, Saiful A. Mojumder, José L.
                Abellán, Yash Ukidave, Ajay Joshi, Norman Rubin, John Kim, and
                David Kaeli. "Valkyrie: Leveraging inter-tlb locality to
                enhance gpu performance." In Proceedings of the ACM
                International Conference on Parallel Architectures and
                Compilation Techniques, pp. 455-466. 2020.
            </li>
            <li>
                Saiful A. Mojumder, Yifan Sun, Leila Delshadtehrani, Yenai Ma,
                Trinayan Baruah, José L. Abellán, John Kim, David Kaeli, and
                Ajay Joshi. "Mgpu-tsm: A multi-gpu system with truly shared
                memory." arXiv preprint arXiv:2008.02300 (2020).
            </li>

            <li>
                Saiful A. Mojumder, Yifan Sun, Leila Delshadtehrani, Yenai Ma,
                Trinayan Baruah, José L. Abellán, John Kim, David Kaeli, and
                Ajay Joshi. "Halcone: A hardware-level timestamp-based cache
                coherence scheme for multi-gpu systems." arXiv preprint
                arXiv:2007.04292 (2020).
            </li>

            <li>
                Jinhui Wei, Jianzhuang Lu, Qi Yu, Chen Li, and Yunping Zhao.
                "Dynamic gmmu bypass for address translation in multi-gpu
                systems." In IFIP International Conference on Network and
                Parallel Computing, pp. 147-158. Cham: Springer International
                Publishing, 2020.
            </li>

            <li>
                Chen Li, Yifan Sun, Lingling Jin, Lingjie Xu, Zheng Cao,
                Pengfei Fan, David Kaeli, Sheng Ma, Yang Guo, and Jun Yang.
                "Priority-based PCIe scheduling for multi-tenant multi-GPU
                systems." IEEE Computer Architecture Letters 18, no. 2 (2019):
                157-160.
            </li>
        </ul>
    </div>
    <button
        id="paper-list-more-btn"
        bind:this={paperListMoreBtn}
        on:click={loadMorePapers}>[More]</button
    >
    <button
        id="paper-list-fewer-btn"
        class="hidden"
        bind:this={paperListFewerBtn}
        on:click={loadFewerPapers}
    >
        [Fewer]
    </button>
</div>
