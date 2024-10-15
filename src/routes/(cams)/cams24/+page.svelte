<script lang="js">
    import { onMount } from 'svelte'
    function unfold(event) {
        const target = event.currentTarget
        const iframe = target.nextElementSibling
        if (iframe.style.display === 'none') {
            iframe.style.display = 'block'
            target.firstChild.src = '/caret-down-solid.svg'
        } else {
            iframe.style.display = 'none'
            target.firstChild.src = '/caret-right-solid.svg'
        }
    }

    onMount(() => {
        document.querySelectorAll('.collapse-opener').forEach((opener) => {
            opener.addEventListener('click', () => {
                const arrow = opener.querySelector('.collapse-arrow')
                const abstractContent = document.getElementById(
                    opener.id.replace('toggle-opener', 'abstract-content')
                )

                if (abstractContent === null || arrow === null) {
                    console.error('Cannot find the abstract content or arrow')
                    return
                }

                if (abstractContent.style.display === 'none') {
                    abstractContent.style.display = 'block'
                    arrow.textContent = '▼'
                } else {
                    abstractContent.style.display = 'none'
                    arrow.textContent = '▶'
                }
            })
        })
    })
</script>

<svelte:head>
    <title>
        CAMS24 - The 2nd Workshop on Computer Architecture Modeling and
        Simulation
    </title>
</svelte:head>

<div class="block">
    <div class="block-content">
        <div class="flex-row items-center gap-5 md:py-10 md:gap-20">
            <img
                src="cams24_logo.png"
                alt="The Akita logo"
                class="w-6/12 mb-10"
            />
            <div>
                <h1 class="text-3xl font-bold mb-3">
                    <span class="text-6xl font-thin text-muted-foreground">
                        The 2nd Workshop on
                    </span>
                    <br />
                    <span class="text-4xl">
                        Computer Architecture Modeling and Simulation
                    </span><br />
                    (CAMS 2024)
                </h1>
                <div class="text-lg">
                    <b>Date:</b> Saturday, November 2, 2024
                    <br />
                    <b>Time:</b> 8:00 AM CST - 12:00 PM CST
                    <br />
                    <b>Location:</b>
                    <a
                        href="https://www.google.com/maps/place/AT%26T+Hotel+and+Conference+Center/@30.2816295,-97.7404408,15z/data=!4m2!3m1!1s0x0:0x7ef52b1ad3321879?sa=X&ved=1t:2428&ictx=111"
                        >AT&T Hotel and Conference Center</a
                    >, Austin, Texas
                    <br />
                    <b>Room:</b> 101
                </div>

                <p class="text-baseline mt-4">
                    The goal of the workshop is to provide a forum for
                    researchers and practitioners to exchange ideas and discuss
                    the latest advances in the field of computer architecture
                    modeling ans simulation. The focus on modeling and
                    simulation techniques is of vital importance to the ongoing
                    advancements in microarchitecture, as these methods are
                    essential tools for improving system performance,
                    efficiency, and reliability.
                </p>

                <p class="text-baseline mt-4">
                    The workshop will cover various aspects of computer
                    architecture modeling and simulation, including but not
                    limited to:
                </p>

                <ul class="ml-6 list-disc">
                    <li>
                        <b>Simulator Development:</b> Advances in design, theory,
                        implementation, and integration of simulators.
                    </li>
                    <li>
                        <b>Performance Modeling:</b> Strategies for prediction,
                        validation, and the impact of architectural features.
                    </li>
                    <li>
                        <b>Power Modeling and Simulation:</b> Methods for power-efficient
                        design and power-performance trade-offs.
                    </li>
                    <li>
                        <b>Tools and Studies Survey:</b> Review and compare existing
                        simulation tools and applications.
                    </li>
                    <li>
                        <b>Scalable Simulation Techniques:</b> Approaches for improving
                        simulation scalability and efficiency.
                    </li>
                    <li>
                        <b
                            >Modeling and Simulation for Unconventional
                            Architectures:</b
                        > Exploration of unique challenges and approaches for emerging
                        and unconventional architectures.
                    </li>
                    <li>
                        <b>Hardware-in-the-loop Simulation:</b> Performance modeling
                        and simulator validation with hardware.
                    </li>
                    <li>
                        <b>Modeling for Machine Learning (Sim4AI):</b> Architectural
                        considerations and models for hardware accelerators.
                    </li>
                    <li>
                        <b>Validation Techniques:</b> Approaches for validating
                        the accuracy of simulation models.
                    </li>
                    <li>
                        <b>Human-centered simulation methods:</b> Analysis, Visualization,
                        Monitoring methods.
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>

<div class="block">
    <div class="block-content">
        <h2 class="text-theme font-bold mb-6">Workshop Program</h2>
        <p>All times are in Central Standard Time (UTC-6).</p>
        <table id="schedule">
            <thead>
                <tr>
                    <td>Time</td>
                    <td>Event</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>8:00 - 8:10</td>
                    <td>Opening Remarks</td>
                </tr>
                <tr>
                    <td>8:10 - 9:00</td>
                    <td>Keynote</td>
                </tr>
                <tr>
                    <td>9:00 - 10:00</td>
                    <td>Paper Talks</td>
                </tr>
                <tr class="sub-schedule">
                    <td>9:00 - 9:15</td>
                    <td>
                        [Paper] Demystifying Platform Requirements for Diverse LLM
                        Inference Use Cases
                        <p>Abhimanyu Bambhaniya, Ritik Raj, Geonhwa Jeong (Georgia Institute of Technology),
                             Souvik Kundu (Intel Labs), Sudarshan Srinivasan, Midhilesh Elavazhagan, 
                             Madhu Kumar (Intel) and Tushar Krishna (Georgia Institute of Technology) </p>
                        <button id="toggle-opener-1" class="collapse-opener">
                            <span class="collapse-arrow">▶</span> Abstract
                        </button>
                        <div id="abstract-content-1" class="collapse-content">
                            <p class="talk-abstract">
                                Large language models (LLMs) have shown remarkable performance across a wide range 
                                of applications, often outperforming human experts. However, deploying these 
                                parameter-heavy models efficiently for diverse inference use cases requires 
                                carefully designed hardware platforms with ample computing, memory, 
                                and network resources. With LLM deployment scenarios and models 
                                evolving at breakneck speed, the hardware requirements to meet Service 
                                Level Objectives(SLOs) remains an open research question. 
                                <br /><br />
                                In this work, we present an analytical tool, GenZ, to study the relationship 
                                between LLM inference performance and various platform design parameters. We 
                                validate our tool against real hardware data running various different LLM models, 
                                achieving a geomean error of 2.73%. We present case studies that provide insights 
                                into configuring platforms for different LLM workloads and use cases. We quantify 
                                the platform requirements to support SOTA LLMs under diverse serving settings. 
                                Furthermore, we project the hardware capabilities needed to enable future LLMs 
                                potentially exceeding hundreds of trillions of parameters. The trends and insights 
                                derived from GenZ can guide AI engineers deploying LLMs as well as computer architects 
                                designing next-generation hardware accelerators and platforms. Ultimately, this work 
                                sheds light on the platform design considerations for unlocking the full potential of 
                                LLMs across a spectrum of applications.
                            </p>
                        </div>
                    </td>
                </tr>
                <tr class="sub-schedule">
                    <td>9:15 - 9:30</td>
                    <td>
                        [Paper] BottleneckAI: Harnessing Machine Learning and Knowledge
                        Transfer for Detecting Architectural Bottlenecks
                        <p>Jihyun Ryoo, Gulsum Gudukbay Akbulut, Huaipan Jiang, 
                            Xulong Tang, Suat Akbulut, Jack Sampson, Vijaykrishnan 
                            Narayanan and Mahmut Taylan Kandemir (The Pennsylvania State University) </p>        
                        <button id="toggle-opener-2" class="collapse-opener">
                           <span class="collapse-arrow">▶</span> Abstract
                       </button>
                       <div id="abstract-content-2" class="collapse-content">
                           <p class="talk-abstract">
                            The architectural analysis tools that output bottleneck 
                            information do not allow knowledge transfer to other 
                            applications or architectures. So, we propose a novel 
                            tool that can predict a known application's bottlenecks 
                            for previously unseen architectures or an unknown application's 
                            bottlenecks for known architectures. We (i) identify the bottleneck 
                            characteristics of 44 applications and use this as the dataset 
                            for our ML/DL model; (ii) identify the correlations between metrics 
                            and bottlenecks to create our tool's initial feature list; (iii) 
                            propose an architectural bottleneck analysis model - BottleneckAI - 
                            that employs random forest regression (RFR) and multi-layer perceptron
                             (MLP) regression; (iv) present results that indicate BottleneckAI 
                             tool can achieve 0.70 (RFR) and 0.72 (MLP) R^2 inference accuracy 
                             in predicting bottlenecks; (v) present five versions of BottleneckAI, 
                             four of which are trained with single architecture data, and one of 
                             which is trained with multiple architecture data, to predict bottlenecks 
                             for new architectures.</p>
                       </div>
                    </td>
                </tr>
                <tr class="sub-schedule">
                    <td>9:30 - 9:45</td>
                    <td>
                        [Paper] How Accurate is Accurate Enough for Simulators? A
                        Review of Simulation Validation
                        <p>Shiyuan Li (Oregon State University) and Yifan Sun (The College of William and Mary) </p>        
                        <button id="toggle-opener-3" class="collapse-opener">
                           <span class="collapse-arrow">▶</span> Abstract
                       </button>
                       <div id="abstract-content-3" class="collapse-content">
                           <p class="talk-abstract">
                            Simulators are vital tools for evaluating the performance of 
                            innovative architectural designs. To ensure an accurate simulation 
                            results, researchers must validate these simulators. However, even 
                            validated simulators can exhibit unreliability when facing new 
                            workloads or modified architectural designs. This paper seeks to 
                            enhance simulator trustworthiness by refining the validation process. 
                            Through a comprehensive review of existing literature, the nuances of 
                            simulator accuracy and reliability are examined from a broader 
                            perspective on simulation error that goes beyond simple accuracy 
                            validation. Our proposals for improving simulator trustworthiness 
                            include selecting a representative benchmark set and expanding the 
                            configuration set during validation. Additionally, we aim to predict 
                            errors associated with new workloads by leveraging the error profiles 
                            obtained from the validation process. To further enhance overall simulator 
                            trustworthiness, we suggest incorporating error tolerance in the simulator 
                            calibration process. Ultimately, we propose additional validation with 
                            new benchmarks and minimal calibration, as this approach closely mimics 
                            real-world usage environments.</p>
                       </div>
                    </td>
                </tr>
                <tr class="sub-schedule">
                    <td>9:45 - 10:00</td>
                    <td>[Paper] Parallelizing a Modern GPU Simulator
                    <p>Rodrigo Huerta and Antonio Gonzalez (Universitat Politècnica de Catalunya)</p>        
                        <button id="toggle-opener-4" class="collapse-opener">
                           <span class="collapse-arrow">▶</span> Abstract
                        </button>
                       <div id="abstract-content-4" class="collapse-content">
                           <p class="talk-abstract">
                            Simulators are a primary tool in computer architecture 
                            research but are extremely computationally intensive. 
                            Simulating modern architectures with increased core counts 
                            and recent workloads can be challenging, even on modern hardware. 
                            This paper demonstrates that simulating some GPGPU workloads in a 
                            single-threaded state-of-the-art simulator such as Accel-sim can 
                            take more than five days. In this paper we present a simple approach to 
                            parallelize this simulator with minimal code changes by using OpenMP. 
                            Moreover, our parallelization technique is deterministic, so the simulator 
                            provides the same results for single-threaded and multi-threaded simulations. 
                            Compared to previous works, we achieve a higher speed-up, and, more importantly, 
                            the parallel simulation does not incur any inaccuracies. When we run the 
                            simulator with 16 threads, we achieve an average speed-up of 5.8x and reach 
                            14x in some workloads. This allows researchers to simulate applications that 
                            take five days in less than 12 hours. By speeding up simulations, researchers can 
                            model larger systems, simulate bigger workloads, add more detail to the model, 
                            increase the efficiency of the hardware platform where the simulator is run, 
                            and obtain results sooner.</p>
                       </div>
                    </td>                                                                                                                                                               
                </tr>
                <tr>
                    <td>10:00 - 10:30</td>
                    <td>Coffee break</td>
                </tr>
                <tr>
                    <td>10:30 - 12:00</td>
                    <td>Simulator Release Talks</td>
                </tr>
                <tr class="sub-schedule">
                    <td>10:30 - 10:50</td>
                    <td>What's new in gem5 24.0 (Jason Lowe-Power)
                        <button id="toggle-opener-6" class="collapse-opener">
                            <span class="collapse-arrow">▶</span> Abstract
                        </button>
                        <div id="abstract-content-6" class="collapse-content">
                            <p class="talk-abstract">
                                In this talk, we will explore the significant 
                                advancements and new features introduced in gem5 
                                v24.0 over the past five years. We will discuss the development 
                                of a robust and inclusive community. Key updates include the introduction 
                                of a standard library for simplified simulation setup, the implementation 
                                of the CHI coherence protocol for enhanced cache hierarchy configurability, 
                                and support for full system machine learning stacks using unmodified ML 
                                frameworks like PyTorch and TensorFlow.
                            </p>
                        </div>
                    </td>
                </tr>
                <tr class="sub-schedule">
                    <td>10:50 - 11:10</td>
                    <td>Release of Sniper v8.1 and Guide on Common Simulation Practices
                        (Alen Sabu, Trevor E. Carlson)
                        <button id="toggle-opener-7" class="collapse-opener">
                            <span class="collapse-arrow">▶</span> Abstract
                        </button>
                        <div id="abstract-content-7" class="collapse-content">
                            <p class="talk-abstract">
                                In this talk, we will introduce the latest release of 
                                Sniper, version 8.1. This Sniper release includes support 
                                for Pac-Sim, a sampled simulation technique suitable for 
                                dynamically scheduled multi-threaded workloads. Pac-Sim 
                                eliminates the need for upfront profiling, allowing users 
                                to simulate large multi-threaded workloads more efficiently. 
                                Further, we release a document that assists computer architects 
                                and practitioners with selecting the right tools for their 
                                performance evaluation studies. We hope the document to be 
                                the starting point for any simulation-based research in 
                                computer architecture.
                            </p>
                        </div>
                    </td>
                </tr>
                <tr class="sub-schedule">
                    <td>11:10 - 11:30</td>
                    <td>
                        User-Friendly Tools in Akita (Yifan Sun)
                        <button id="toggle-opener-5" class="collapse-opener">
                            <span class="collapse-arrow">▶</span> Abstract
                        </button>
                        <div id="abstract-content-5" class="collapse-content">
                            <p class="talk-abstract">
                                In this talk, we will present the real-time
                                monitoring tool for Akita---AkitaRTM---and the
                                default trace visualization tool for
                                Akita---Daisen.
                            </p>
                        </div>
                    </td>
                </tr>
                <tr class="sub-schedule">
                    <td>11:30 - 11:50</td>
                    <td>SST 14.1 Highlights (Patrick Lavin)
                        <button id="toggle-opener-8" class="collapse-opener">
                            <span class="collapse-arrow">▶</span> Abstract
                        </button>
                        <div id="abstract-content-8" class="collapse-content">
                            <p class="talk-abstract">
                                In this talk, we will cover the improvements made 
                                to the Structural Simulation Toolkit over the past several 
                                years. We will look at improvements made to the parallel core, 
                                most notably checkpoint/restart, as well as additions to the 
                                included simulation components such as Merlin, a network simulator, 
                                and Mercury, a large-scale application model. We will also share work 
                                done to help new users, including a new documentation website and an 
                                interactive utility for learning about simulation components.
                            </p>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>11:50 - 12:00</td>
                    <td>Closing Remarks</td>
                </tr>
            </tbody>
        </table>
    </div>
</div>

<div class="block">
    <div class="block-content">
        <h2 class="text-theme font-bold mb-6">Keynotes</h2>

        <!-- <div class="content"> -->
        <div style="float: left; margin-right: 10px" id="keynote1">
            <img src="/msinclair-2019.jpg" width="160" height="180" />
        </div>
        <b>Speaker:</b> Matt Sinclair, University of Wisconsin-Madison<br />
        <b>Title: TBD </b>
        <br /><br />
        <p align="justify">
            <b>Abstract:</b> TBD
        </p>
        <p align="justify">
            <b>Bio:</b> Matt Sinclair is an Assistant Professor in the Computer
            Sciences Department, an affiliate faculty member of the Electrical &
            Computer Engineering Department, and an affiliate of the Teaching Academy
            at the University of Wisconsin-Madison. He is primarily a computer architect,
            although his work also includes other areas such as operating systems
            and parallel programming. Moreover, he is also passionate about designing
            the tools used to study future heterogeneous systems, including serving
            as a member of the gem5 Project Management Committee. As an instructor
            at UW-Madison, he is currently part of the Excel Initiative, and was
            previously a Madison Teaching & Learning Fellow. He also is the current
            steward for the ISCA Hall of Fame. His research has been recognized
            several times, including with an NSF CAREER award, a 2018 ACM Doctoral
            Dissertation Award nomination, a Qualcomm Innovation Fellowship, the
            2018 David J. Kuck Outstanding PhD Thesis Award, an ACM SIGARCH - IEEE
            Computer Society TCCA 2018 Outstanding Dissertation Award Honorable
            Mention, two Mavis Future Faculty Fellowships, a Feng Chen Memorial
            Award, and W.J. Poppelbaum Award, and Saburo Muroga Fellowship. Previously,
            he completed his PhD in Computer Architecture in the Computer Science
            Department at the University of Illinois at Urbana-Champaign under the
            supervision of Sarita Adve. During his PhD he interned at NVIDIA Research
            and after his PhD he was a postdoc at AMD Research; at both AMD and
            NVIDIA his work focused on optimizing future GPU memory systems.
        </p>
        <br />

        <br />
    </div>
</div>

<div class="block">
    <div class="block-content">
        <h2 class="text-theme font-bold mb-6">Call for Papers</h2>
        <p>
            The workshop invites submissions of original work in the form of
            full papers (up to 6 pages, reference not included) covering all
            aspects of computer architecture modeling and simulation.
            Submissions will be peer-reviewed, and accepted papers will be
            included in the workshop proceedings.
        </p>
    </div>
</div>

<div class="block">
    <div class="block-content">
        <h2 class="text-theme font-bold mb-6">Important Dates</h2>
        <ul class="ml-2">
            <li>
                <b>Papers Due:</b> <br />
                <p class="ml-4"><strike>August 16, 2024</strike></p>
                <p class="ml-4">August 30, 2024 (Anywhere on Earth)</p>
            </li>
            <li>
                <b>Author Notification:</b>
                <p class="ml-4"><strike>September 15, 2024</strike></p>
                <p class="ml-4">September 23, 2024</p>
            </li>
        </ul>
    </div>
</div>

<div class="block">
    <div class="block-content">
        <h2 class="text-theme font-bold mb-6">Submission Guidelines</h2>
        <p>
            Full paper submissions must be in PDF format for US letter-size or
            A4 paper. They must not exceed 6 pages (excluding unlimited
            references) in standard ACM two-column conference format (review
            mode, with page numbers and both 9 or 10pt can be used). More
            concise papers with ideas clearly expressed are also welcomed.
            Authors can select if they want to reveal their identity in the
            submission. Templates for ACM format are available for Microsoft
            Word and LaTeX at this link.
            <a href="https://www.acm.org/publications/proceedings-template">
                https://www.acm.org/publications/proceedings-template</a
            >
        </p>
        <p>
            We do not put the paper in the ACM or IEEE digital libraries.
            Therefore, the papers submitted to the event can be submitted to
            other venues without restrictions.
        </p>
        <p>
            At least one author of accepted papers is expected to present in
            person during the event. We understand the travel difficulty of the
            post-pandemia era. In extreme cases, we will allow remote or
            pre-recorded presentations.
        </p>
        <p>
            <b>Submission Site:</b>
            <a href="https://easychair.org/conferences/?conf=cams2024"
                >https://easychair.org/conferences/?conf=cams2024</a
            >
        </p>
    </div>
</div>

<div class="block">
    <div class="block-content">
        <h2 class="text-theme font-bold mb-6">Workshop Organizers</h2>
        <table style="width: 100%">
            <colgroup>
                <col style="width: 33%" />
                <col style="width: 33%" />
                <col style="width: 33%" />
            </colgroup>
            <tbody>
                <tr>
                    <td>
                        <img
                            src="yifan_profile.png"
                            style="border-radius: 10px"
                            alt=""
                            data-position="center center"
                            width="200"
                        />
                    </td>
                    <td>
                        <img
                            src="tcarlson.jpeg"
                            style="border-radius: 10px"
                            alt=""
                            data-position="center center"
                            width="200"
                        />
                    </td>
                    <td>
                        <img
                            src="sabila_profile.jpeg"
                            style="border-radius: 10px"
                            alt=""
                            data-position="center center"
                            width="200"
                        />
                    </td>
                </tr>
                <tr>
                    <td>
                        <a
                            href="https://syifan.github.io/"
                            target="&ldquo;blank&rdquo;">Yifan Sun</a
                        >
                    </td>
                    <td>
                        <a
                            href="https://www.comp.nus.edu.sg/~tcarlson/"
                            target="&ldquo;blank&rdquo;">Trevor E. Carlson</a
                        >
                    </td>
                    <td>
                        <a href="" target="&ldquo;blank&rdquo;">
                            Sabila Al Jannat
                        </a>
                    </td>
                </tr>
                <tr>
                    <td>Chair</td>
                    <td>Chair</td>
                    <td>Web Chair</td>
                </tr>
                <tr>
                    <td>William &amp; Mary</td>
                    <td>National University of Singapore</td>
                    <td>William &amp; Mary</td>
                </tr>
            </tbody>
        </table>
        <div>Please contact the organizers if you have any questions.</div>
    </div>
</div>

<div class="block">
    <div class="block-content">
        <h2 class="text-theme font-bold mb-6">Program Committee</h2>
        <p>
            In this workshop, we are experimenting with a PhD and
            practitioner-led PC. We believe that PhD students and practitioners
            are the end users of simulation and performance modeling tools and
            hence, should know the tools the best. We will report our
            experience during the workshop event.
        </p>
        <ul class="ml-6 list-disc">
            <li>Yuhui Bao (Northeastern University)</li>
            <li>Ying Li (William & Mary)</li>
            <li>Changxi Liu (National University of Singapore)</li>
            <li>Patrick Lavin (Sandia National Lab)</li>
            <li>Mohammadreza Rezvani (UC Riverside)</li>
            <li>Mahyar Samani (UC Davis)</li>
            <li>William Won (Georgia Institute of Technology)</li>
        </ul>
    </div>
</div>

<style lang="postcss">
    #schedule {
        @apply w-full;
        @apply border-t-2 border-b-2 border-primary;
    }

    #schedule thead {
        @apply bg-primary text-white;
        @apply font-bold;
    }

    #schedule tr {
        @apply border-b border-primary;
    }

    #schedule tr > td:first-child {
        @apply w-3/12;
        /* @apply text-right; */
        @apply font-bold;
    }

    #schedule tr > td {
        @apply py-2 px-4;
        @apply align-top;
    }

    #schedule tr.sub-schedule > td {
        @apply pl-8;
        @apply font-normal;
    }

    #schedule tr.sub-schedule > td > span.affliation {
        @apply text-gray-500;
        @apply font-normal text-xs;
    }

    .button {
        @apply inline-block;
        @apply px-4 py-2;
        @apply bg-primary;
        @apply text-white font-bold;
        @apply rounded-md;
        @apply transition-all;
        /* @apply hover:bg-secondary; */
        @apply no-underline text-lg;
        @apply mt-4;
    }

    .abstract {
        margin-bottom: 1em;
    }

    .talk-abstract {
        @apply text-sm;
        @apply text-gray-500;
    }

    .collapse-opener {
        cursor: pointer;
        display: flex;
        align-items: center;
        @apply text-sm text-gray-500;
    }

    .collapse-arrow {
        margin-right: 0.5em;
    }

    .collapse-content {
        display: none;
    }

    .collapse-content.show {
        display: block;
    }
</style>
