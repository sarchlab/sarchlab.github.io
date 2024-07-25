<div class="block-content px-20 py-20">
    <div class="flex flex-col items-center gap-5 md:items-start" />
    <h2 class="text-4xl mb-3 text-theme font-bold">Sub-Projects</h2>

    <div class="grid grid-cols-1 gap-10 w-full lg:grid-cols-2 lg:w-auto">
        <div class="sub-project">
            <div class="flex gap-2 items-end">
                <img src="/akita_logo.png" alt="akita_logo" class="h-14" />
                <div>
                    <h3>Akita Simulator Engine</h3>
                    <a href="https://github.com/sarchlab/akita">
                        https://github.com/sarchlab/akita
                    </a>
                </div>
            </div>

            <p>
                The Akita Simulator serves as the foundational framework for
                constructing various simulators, offering libraries to
                streamline development. It includes essential models for caches
                and DRAM controllers, as well as a suite of tools designed for
                developer efficiency, including visualization, monitoring, and
                performance analysis.
            </p>
        </div>

        <div class="sub-project">
            <h3>ArchSim</h3>
            <p>
                ArchSim enables computer architecture simulation as a service.
                ArchSim provides a model zoo for computer architecture
                simulator models built with Akita and allows users to
                configure, execute, and analyze simulations in a single
                web-based platform.
            </p>
        </div>

        <div class="sub-project">
            <div class="flex gap-2 items-end">
                <img src="/mgpusim_logo.png" alt="akita_logo" class="h-12" />
                <div>
                    <h3>MGPUSim</h3>
                    <a href="https://github.com/sarchlab/mgpusim">
                        https://github.com/sarchlab/mgpusim
                    </a>
                </div>
            </div>

            <p>
                MGPUSim is a GPU simulator that is specialized for Multi-GPU
                simulation. It models AMD GPUs running OpenCL programs.
            </p>
        </div>

        <div class="sub-project">
            <h3>Zeonica</h3>
            <p>
                Zeonica is an on-going project that models Coarse-Grained
                Reconfigurable Array (CGRA) devices at a high level.
            </p>
        </div>
    </div>
</div>

<style lang="postcss">
    .sub-project {
    }
</style>
