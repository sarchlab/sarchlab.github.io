export interface ResearchTopic {
    slug: string
    title: string
    summary: string
    image: string
    figureAlt: string
    questions: string[]
    software: { name: string; href: string }[]
    publicationTitles: string[]
    architecturePublicationTitles?: string[]
}

// Publication titles select records from the shared publication_list.json.
export const researchTopics: ResearchTopic[] = [
    {
        slug: 'human-centered-performance-analysis',
        title: 'Human-Centered Performance Analysis',
        summary:
            'Modern chips are too complex for designers to reason about from aggregate statistics. We build visualization tools and AI assistants, such as Daisen and DaisenBot, that show architects where time goes, why a bottleneck occurs, and what to change. We also study how experts actually perform performance analysis.',
        image: '/research/human-centered-performance-analysis.svg',
        figureAlt:
            'Inspect GPU timelines with Daisen and live simulations with AkitaRTM; use milestone abstractions and DaisenBot to investigate bottlenecks; then compare designs. Architects inspect the evidence and guide further analysis.',
        questions: [
            'How can a visualization connect execution details to the cause of a performance bottleneck?',
            'Which views help architects move from an aggregate statistic to the events behind it?',
            'How can an AI assistant help with performance analysis while keeping its conclusions verifiable?',
            'How do experts use visual tools to compare and revise architecture designs?',
        ],
        software: [
            {
                name: 'Daisen',
                href: 'https://github.com/sarchlab/akita/tree/v3/daisen',
            },
            {
                name: 'Akita',
                href: '/akita',
            },
            {
                name: 'Lab software',
                href: '/software',
            },
        ],
        publicationTitles: [
            'Daisen: A Framework for Visualizing Detailed GPU Execution',
            'Visual Exploratory Analysis for Designing Large-Scale Network-on-Chip Architectures: A Domain Expert-Led Design Study',
            'Looking into the Black Box: Monitoring Computer Architecture Simulations in Real-Time with AkitaRTM',
            'DaisenBot: Human-AI Collaboration in GPU Performance Analysis with Multi-Modal AI Assistant',
            'Visualize the Invisible: Exposing Causal Layers in GPU Performance Analysis through Milestone Abstractions',
            'TritonParse: Multi-IR Provenance and Reproducible Debugging for Triton Kernel Compilation',
        ],
    },
    {
        slug: 'ai-agents-for-systems-research',
        title: 'AI Agents for Computer Systems Research',
        summary:
            'AI agents can now write code, run experiments, and read results, but they still make mistakes that humans must catch. We design multi-agent systems, such as TheBotCompany, that develop and maintain research software, and we study how humans and agents can explore architecture designs together while humans stay able to verify the results.',
        image: '/research/ai-agents-for-systems-research.svg',
        figureAlt:
            'TheBotCompany agent teams plan, implement, and verify research software. Code, experiments, and results go to human review; questions and corrections feed back into the work. Humans can be asked to make decisions.',
        questions: [
            'How should agent teams divide the work of developing and maintaining research software?',
            'When should an agent ask a human to check a result or make a decision?',
            'What evidence do humans need to verify an agent-run experiment?',
            'How can humans and agents explore architecture designs together without losing track of why a design was chosen?',
        ],
        software: [
            {
                name: 'TheBotCompany',
                href: 'https://github.com/syifan/thebotcompany',
            },
            {
                name: 'Lab software',
                href: '/software',
            },
        ],
        publicationTitles: [
            'TheBotCompany: Self-Organizing Multi-Agent Systems for Continuous Software Development',
            'DaisenBot: Human-AI Collaboration in GPU Performance Analysis with Multi-Modal AI Assistant',
        ],
    },
    {
        slug: 'performance-modeling-ai-workloads',
        title: 'Performance Modeling for Large-Scale AI Workloads',
        summary:
            'Cycle-level simulation cannot keep up with LLM training and inference that span thousands of GPUs. We develop lightweight, validated performance models, such as TrioSim, on top of our open-source Akita and MGPUSim frameworks, and we evaluate which modeling methods are accurate enough for which design questions.',
        image: '/research/performance-modeling-ai-workloads.svg',
        figureAlt:
            'Start with an AI workload and system choices, then select detailed simulation, sampled simulation, regression prediction, or lightweight modeling. Validate the model for the design question before comparing performance. Related tools include Akita, MGPUSim, and TrioSim.',
        questions: [
            'How much execution detail does a model need to answer a particular design question?',
            'How can we validate a lightweight model for large-scale AI workloads?',
            'How do parallelism and interconnect choices affect multi-GPU workload performance?',
            'When are sampled simulation or regression-based predictions sufficient for an architecture study?',
        ],
        software: [
            {
                name: 'Akita',
                href: '/akita',
            },
            {
                name: 'MGPUSim',
                href: 'https://github.com/sarchlab/mgpusim',
            },
            {
                name: 'TrioSim',
                href: 'https://github.com/sarchlab/triosim',
            },
            {
                name: 'Lab software',
                href: '/software',
            },
        ],
        publicationTitles: [
            'NaviSim: A Highly Accurate GPU Simulator for AMD RDNA GPUs',
            'A Regression-based Model for End-to-End Latency Prediction for DNN Execution on GPUs',
            'Path Forward Beyond Simulators: Fast and Accurate GPU Execution Time Prediction for DNN Workloads',
            'Photon: A Fine-grained Sampled Simulation Methodology for GPU Workloads',
            'TraceSim: a Lightweight Simulator for Large-Scale DNN Workloads on Multi-GPU Systems',
            'TrioSim: A Lightweight Simulator for Large-Scale DNN Workloads on Multi-GPU Systems',
            'Did You Win the GPU Cloud Lottery? Benchmarking from TFLOPS to Tokens/$',
            'Akita: A High Usability Simulation Framework for Computer Architecture',
            'ArchSim: Computer Architecture Simulation as a Service',
        ],
    },
    {
        slug: 'wafer-scale-multi-gpu',
        title: 'Wafer-Scale and Multi-GPU Systems for AI',
        summary:
            'AI workloads are pushing GPUs beyond a single die, toward wafer-scale and multi-GPU systems where data movement dominates. We design address translation, memory, and interconnect techniques, including electro-photonic networks, that keep these systems efficient (e.g., HDPAT).',
        image: '/research/wafer-scale-multi-gpu.svg',
        figureAlt:
            'Data movement connects compute tiles in wafer-scale GPUs and devices in multi-GPU systems. Research directions include address translation with HDPAT, page prefetching with RIPPLE, network traffic with NetCrafter, and electrical and optical interconnects.',
        questions: [
            'How should address translation work across a wafer-scale GPU?',
            'How can page prefetching and memory techniques reduce the cost of data movement?',
            'How should network traffic use interconnects with non-uniform bandwidth?',
            'How do electrical and optical interconnect choices affect wafer-scale and multi-GPU systems?',
        ],
        software: [
            {
                name: 'Akita',
                href: '/akita',
            },
            {
                name: 'MGPUSim',
                href: 'https://github.com/sarchlab/mgpusim',
            },
            {
                name: 'TrioSim',
                href: 'https://github.com/sarchlab/triosim',
            },
            {
                name: 'Lab software',
                href: '/software',
            },
        ],
        publicationTitles: [
            'Understanding Wafer-Scale GPU Performance using an Architectural Simulator',
            'Exploring the Wafer-Scale GPUs',
            'NetCrafter: Tailoring Network Traffic for Non-Uniform Bandwidth Multi-GPU Systems',
            'HDPAT: Hierarchical Distributed Page Address Translation for Wafer-Scale GPUs',
            'RIPPLE: Ring-based Page Prefetching and Layered Translation for Wafer-Scale GPUs',
        ],
        architecturePublicationTitles: [
            'The Sparsity-Aware LazyGPU Architecture',
            'ACTA: Automatic Configuration of the Tensor Memory Accelerator for High-End GPUs.',
            'QuCo: Efficient and Flexible Hardware-Driven Automatic Configuration of Tile Transfers in GPUs',
        ],
    },
]
