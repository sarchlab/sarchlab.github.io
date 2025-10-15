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
        CAMS25 - The 3rd Workshop on Computer Architecture Modeling and
        Simulation
    </title>
</svelte:head>

<div class="block">
    <div class="block-content">
        <div class="flex-row items-center gap-5 md:py-10 md:gap-20">
            <img
                src="cams25_logo.png"
                alt="CAMS25 logo"
                class="w-6/12 mb-10"
            />
            <div>
                <h1 class="text-3xl font-bold mb-3">
                    <span class="text-6xl font-thin text-muted-foreground">
                        The 3rd Workshop on
                    </span>
                    <br />
                    <span class="text-4xl">
                        Computer Architecture Modeling and Simulation
                    </span><br />
                    (CAMS 2025)
                </h1>
                <div class="text-lg">
                    <p class="mt-2 mb-8">
                        To be held in conjunction with <a
                            href="https://microarch.org/micro58/"
                        >
                            MICRO 2025
                        </a>
                    </p>
                    <b>Workshop Date:</b> October 18, 2025
                    <br />

                    <b>Full Paper Due:</b>
                    <s>August 11, 2025</s> August 25, 2025 (Anywhere on Earth)
                    <br />
                    <b>Location:</b> Seoul, Korea
                    <br />
                    <b>Venue:</b> Lotte Hotel
                    <br />
                    <b>Room:</b> Room 1
                </div>

                <p class="text-baseline mt-4">
                    The goal of the workshop is to provide a forum for
                    researchers and practitioners to exchange ideas and discuss
                    the latest advances in the field of computer architecture
                    modeling and simulation. The focus on modeling and
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
                        <b>Human-centered simulation methods:</b> Analysis, visualization,
                        monitoring methods.
                    </li>
                </ul>
            </div>
        </div>
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

        <div class="ml-2 mt-4 gap-4 flex flex-col">
            <div>
                <b>Paper Due:</b>
                <s>August 11, 2025</s> August 25, 2025 (Anywhere on Earth)
            </div>
            <div>
                <b>Author Notification:</b>
                <s>September 8, 2025</s> September 15, 2025
            </div>

            <div>
                <b>Submission Guidelines</b>
                <p>
                    Full paper submissions must be in PDF format for US
                    letter-size or A4 paper. They must not exceed 6 pages
                    (excluding unlimited references) in standard ACM two-column
                    conference format (review mode, with page numbers, 9pt font
                    minimum). More concise papers with ideas clearly expressed
                    are also welcomed. Authors may choose whether to reveal
                    their identity in the submission.
                </p>
                <p>
                    We use the ACM Primary article template. Templates for ACM
                    format are available for Microsoft Word and LaTeX at this
                    link.
                    <a
                        href="https://www.acm.org/publications/proceedings-template"
                    >
                        https://www.acm.org/publications/proceedings-template</a
                    >. For Latex users, please use the sigplan example in the
                    template folder. For Overleaf users, the template is also
                    available at
                    <a
                        href="https://www.overleaf.com/latex/templates?q=acm+sigconf"
                    >
                        https://www.overleaf.com/latex/templates?q=acm+sigconf
                    </a>.
                </p>
                <p>
                    We do not include the papers in the ACM or IEEE digital
                    libraries. Therefore, papers submitted to this event may be
                    submitted to other venues without restrictions.
                </p>
                <p>
                    At least one author of accepted papers is expected to
                    present in person during the event. We understand the
                    travel difficulty in the post-pandemic era. In exceptional
                    cases, we will allow remote or pre-recorded presentations.
                </p>
            </div>

            <div>
                <b>Submission Site:</b>
                <a href="https://easychair.org/conferences/?conf=cams25full"
                    >https://easychair.org/conferences/?conf=cams25full</a
                >
            </div>
        </div>
    </div>
</div>

<div class="block">
    <div class="block-content">
        <h2 class="text-theme font-bold mb-6">Call for Tool Release Talks</h2>
        <p>
            Starting from CAMS 2024, we organize a specialized session that
            allows tool creators to announce their new releases to amplify
            their exposure. The talks will announce new simulators, or new
            releases of existing simulators, highlighting their new features
            and improvements.
        </p>
        <p>
            Last year, all the talks were invited. This year, we are soliciting
            talks from a broader community. Please submit a 1-page (including
            references) abstract that includes which simulator, which new
            version, and what new features you want to present. No peer review
            process will be applied to abstracts. The workshop chairs will make
            the selection, mainly based on the relevancy and potential
            interests of the audience.
        </p>
        <p>
            We encourage in-person talks, but remote talks are also acceptable.
        </p>

        <div class="ml-2 mt-4 gap-4 flex flex-col">
            <div>
                <b>Abstract Due:</b> September 15, 2025 (Anywhere on Earth)
            </div>
            <div>
                <b>Notification:</b> September 22, 2025
            </div>

            <div>
                <b>Submission Guidelines</b>
                <p>
                    Abstract submissions should follow the same format as paper
                    submissions (see above), except for the 1-page limit.
                </p>
            </div>

            <div>
                <b>Submission Site:</b>
                <a
                    href="https://easychair.org/conferences/?conf=cams25toolrelease"
                    >https://easychair.org/conferences/?conf=cams25toolrelease</a
                >
            </div>
        </div>
    </div>
</div>

<div class="block">
    <div class="block-content">
        <h2 class="text-theme font-bold mb-6">Workshop Program</h2>
        <p>All times are in Korea Standard Time (KST, UTC+9).</p>
        <table id="schedule">
            <thead>
                <tr>
                    <td>Time</td>
                    <td>Event</td>
                </tr>
            </thead>
            <tbody>
            <tr>
                <td>8:00 AM – 8:10 AM</td>
                <td style="font-weight:bold;">Opening Remarks</td>
            </tr>
            <tr>
                <td colspan="2" class="session-header" style="text-align:center; font-weight:bold;">Session 1: Simulation for AI</td>
            </tr>
            <tr class="sub-schedule">
                <td>8:10 AM – 9:00 AM</td>
                <td>
                    <b>[Keynote]</b> Accelerating Accelerator Research: The ONNXim and PyTorchSim Story
                    <p>Speaker: Gwangsun Kim</p>
                </td>
            </tr>
            <tr class="sub-schedule">
                <td>9:00 AM – 9:20 AM</td>
                <td>
                    <b>[Paper]</b> NetTLMSim: A Virtual Prototype Simulator for Large-Scale Accelerator Networks
                    <p>Junsu Heo, Shinyoung Kim, Hyeseong Shin, Jaesuk Lee (Konkuk University), Sungkyung Park (Pusan National University) and Chester Sungchung Park (Konkuk University)</p>
                    <button id="toggle-opener-1" class="collapse-opener">
                        <span class="collapse-arrow">▶</span> [Paper PDF]
                    </button>
                    <div id="abstract-content-1" class="collapse-content">
                        <p class="talk-paper-pdf">
                            <a href="/cams25/NetTLMSim-%20A%20Virtual%20Prototype%20Simulator%20for%20Large-Scale%20Accelerator%20Networks.pdf" target="_blank">
                                NetTLMSim: A Virtual Prototype Simulator for Large-Scale Accelerator Networks.pdf
                            </a>
                        </p>
                    </div>
                </td>
            </tr>
            <tr class="sub-schedule">
                <td>9:20 AM – 9:40 AM</td>
                <td>
                    <b>[Paper]</b> A comprehensive analysis and modeling of spill operations in vector processing units
                    <p>Hossein Mokhtarnia, Osman Unsal and Adrian Cristal Kestelman (Barcelona Supercomputing Center)</p>
                </td>
            </tr>
            <tr class="sub-schedule">
                <td>9:40 AM – 10:00 AM</td>
                <td>Discussion</td>
            </tr>
            <tr>
                <td>10:00 AM – 10:30 AM</td>
                <td style="font-weight:bold;">Coffee Break</td>
            </tr>

            <tr>
                <td colspan="2" class="session-header" style="text-align:center; font-weight:bold;">Session 2: AI for Simulation</td>
            </tr>
            <tr class="sub-schedule">
                <td>10:30 AM – 10:50 AM</td>
                <td>
                    <b>[Paper]</b> gem5 Co-Pilot: AI Assistant Agent for Architectural Design Space Acceleration [Remote]
                    <p>Zuoming Fu (Cornell University), Alexander Manley (University of Kansas) and Mohammad Alian (Cornell University)</p>
                    <button id="toggle-opener-3" class="collapse-opener">
                        <span class="collapse-arrow">▶</span> [Paper PDF]
                    </button>
                    <div id="abstract-content-3" class="collapse-content">
                        <p class="talk-paper-pdf">
                            <a href="/cams25/gem5%20Co-Pilot%20AI%20Assistant%20Agent%20for%20Architectural%20Design%20Space%20Exploration.pdf" target="_blank">
                                gem5 Co-Pilot AI Assistant Agent for Architectural Design Space Exploration.pdf
                            </a>
                        </p>
                    </div>
                </td>
            </tr>
            <tr class="sub-schedule">
                <td>10:50 AM – 11:10 AM</td>
                <td>
                    <b>[Paper]</b> DaisenBot: Human-AI Collaboration in GPU Performance Analysis with Multi-Modal AI Assistant [Remote]
                    <p>Enze Xu, Jeremy Coonley, Daoxuan Xu and Yifan Sun (William & Mary)</p>
                    <button id="toggle-opener-4" class="collapse-opener">
                        <span class="collapse-arrow">▶</span> [Paper PDF]
                    </button>
                    <div id="abstract-content-4" class="collapse-content">
                        <p class="talk-paper-pdf">
                            <a href="/cams25/DaisenBot-%20Human-AI%20Collaboration%20in%20GPU%20Performance%20Analysis%20with%20Multi-Modal%20AI%20Assistant.pdf" target="_blank">
                                DaisenBot: Human-AI Collaboration in GPU Performance Analysis with Multi-Modal AI Assistant.pdf
                            </a>
                        </p>
                    </div>
                </td>
            </tr>
            <tr class="sub-schedule">
                <td>11:10 AM – 11:30 AM</td>
                <td>
                    <b>[Talk]</b> ML-accelerated microarchitecture simulation: Insights, Challenges, and Opportunities [Remote]
                    <p>Speaker: Santosh Pandey</p>
                </td>
                <!-- <td>Santosh [Talk title TBD, remote]</td> -->
            </tr>
            <tr class="sub-schedule">
                <td>11:30 AM – 11:50 AM</td>
                <td>Discussion</td>
            </tr>

            <tr>
                <td>12:00 PM – 1:00 PM</td>
                <td style="font-weight:bold;">Lunch Break</td>
            </tr>
            
            <tr>
                <td colspan="2" class="session-header" style="text-align:center; font-weight:bold;">Session 3: Network on Chip and System-level Simulation</td>
            </tr>
            <tr class="sub-schedule">
                <td>1:00 PM – 2:00 PM</td>
                <td>
                    <b>[Keynote]</b> TBD
                    <p>Speaker: TBD</p>
                </td>
            </tr>
            <tr class="sub-schedule">
                <td>2:00 PM – 2:20 PM</td>
                <td>
                    <b>[Paper]</b> An End-to-End Evaluation Framework for NoC IP: Performance Analysis to Verification Support
                    <p>Chanwoo Song and Hyun-Gyu Kim (Openedges Technology)</p>
                </td>
            </tr>
            <tr class="sub-schedule">
                <td>2:20 PM – 2:40 PM</td>
                <td>
                    <b>[Paper]</b> Latency-Aware QoS Optimization of XY-YX Routing in NoCs via Analytical Latency Estimation
                    <p>Jongwon Oh, Seongmo An, Jinyoung Shin and Seung Eun Lee (Seoul National University of Science and Technology)</p>
                </td>
            </tr>
            <tr class="sub-schedule">
                <td>2:40 PM – 3:00 PM</td>
                <td>
                    <b>[Paper]</b> Enabling Realistic Virtualized Cloud Workload Evaluation in RISC-V
                    <p>Nikos Karystinos, George-Marios Fragkoulis and Dimitris Gizopoulos (University of Athens)</p>
                    <button id="toggle-opener-7" class="collapse-opener">
                        <span class="collapse-arrow">▶</span> [Paper PDF]
                    </button>
                    <div id="abstract-content-7" class="collapse-content">
                        <p class="talk-paper-pdf">
                            <a href="/cams25/Enabling%20Realistic%20Virtualized%20Cloud%20Workload%20Evaluation%20in%20RISC-V.pdf" target="_blank">
                                Enabling Realistic Virtualized Cloud Workload Evaluation in RISC-V.pdf
                            </a>
                        </p>
                    </div>
                </td>
            </tr>
            <!-- <tr class="sub-schedule">
                <td>2:00 PM – 2:20 PM</td>
                <td>Discussion</td>
            </tr> -->
            <!-- <tr>
                <td colspan="2" class="session-header" style="text-align:center; font-weight:bold;">Session 4: Round Table Discussion</td>
            </tr>
            <tr class="sub-schedule">
                <td>2:00 PM – 2:40 PM</td>
                <td>
                    Break group discussion
                    <p>Topic 1: TBD</p>
                    <p>Topic 2: TBD</p>
                    <p>Topic 3: TBD</p>
                </td>
            </tr> -->

            <tr>
                <td>3:00 PM – 3:30 PM</td>
                <td style="font-weight:bold;">Coffee Break</td>
            </tr>

            <tr>
                <td colspan="2" class="session-header" style="text-align:center; font-weight:bold;">Session 4: Simulation Design Methods</td>
            </tr>
            
            <tr class="sub-schedule">
                <td>3:30 PM – 3:50 PM</td>
                <td>
                    <b>[Paper]</b> Phalanx: A Processor Simulator Based on the Entity Component System Architecture
                    <p>Toshiki Maekawa (Nagoya Institute of Technology), Akihiko Odaki (The University of Tokyo), Toru Koizumi, Tomoaki Tsumura (Nagoya Institute of Technology) and Ryota Shioya (The University of Tokyo)</p>
                </td>
            </tr>
            <tr class="sub-schedule">
                <td>3:50 PM – 4:10 PM</td>
                <td>
                    <b>[Paper]</b> Mess Simulator: New Capabilities in the Latest Release
                    <p>Pouya Esmaili-Dokht, Ashkan Asgharzadeh, Petar Radojkovic and Eduard Ayguadé (Barcelona Supercomputing Center)</p>
                </td>
            </tr>
            <tr class="sub-schedule">
                <td>4:10 PM – 4:30 PM</td>
                <!-- <td>Rishov Sarkar [Talk title TBD]</td> -->
                <td>
                    <b>[Talk]</b> Sniper 9.0 Faster Automated Sampling and Virtuoso Integration
                    <p>Speaker: TBD</p>
                </td>
            </tr>
            <tr class="sub-schedule">
                <td>4:30 PM – 4:50 PM</td>
                <td>Discussion</td>
            </tr>
            <tr>
                <td>4:50 PM – 5:00 PM</td>
                <td style="font-weight:bold;">Closing Remarks</td>
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
            <img src="/GwangsunKim2025.avif" width="201" height="230" style="border-radius:10px; margin:5px;" alt="Gwangsun Kim" />
        </div>
        <p>
            <b>Speaker:</b> Gwangsun Kim
            <br />
        </p>
        <p>
            <b>Title: </b> Accelerating Accelerator Research: The ONNXim and PyTorchSim Story
            <br />
        </p>
        <p>
            <b>Abstract:</b>
            Recently, AI has been advancing at an unprecedented pace, driving transformative changes across the world. However, state-of-the-art AI algorithms have become increasingly demanding in both compute and memory resources, posing significant challenges in system design, particularly in the development of AI accelerators or Neural Processing Units (NPUs). Thus, as technology scaling slows down, it has become even more critical to develop innovative NPU hardware architectures and software technologies that can fully exploit hardware capabilities. To this end, accurate, fast, and versatile full-stack NPU simulators are essential for effective design-space exploration of both hardware and software. Yet achieving these goals simultaneously is difficult, as the aforementioned requirements often conflict with one another.
            <br />
            In this talk, I will share my experience working with my students to build two open-source NPU simulators, ONNXim and PyTorchSim, developed to address these challenges. ONNXim is a fast, cycle-accurate NPU simulator that takes DNNs in ONNX format to evaluate the inference performance of NPUs. Building on ONNXim, PyTorchSim extends simulation capability to DNNs written in PyTorch, enabling fast and cycle-accurate NPU simulation for both inference and training, with integrated compiler support. I will discuss the motivation behind ONNXim, how it evolved into PyTorchSim, and the key insights and lessons learned throughout their development. I will also briefly talk about future directions for PyTorchSim.
            <br />
        </p>
        <p>
            <b>Bio:</b> Gwangsun Kim is an Associate Professor in the Department of Computer Science and  Engineering at POSTECH, South Korea. He is also currently a Visiting  Academic at Arm, based in Cambridge, UK. Before joining POSTECH, he  worked as a Senior Research/Performance Engineer at Arm from 2016 to 2018. He received his Ph.D. and M.S. degrees in Computer Science from KAIST in 2016 and 2012, respectively,  and his B.S. degree in Computer Science and Engineering and Electrical  Engineering from POSTECH in 2010. His work received the Best Paper Award at PACT 2013 and was nominated for the Best Paper Award at PACT 2016. His  research interests include various areas of computer systems, such as  CPU/GPU/NPU architectures, near-data processing, systems for AI, memory systems, networking, and simulation methodology. 
        </p>
        <!-- <p>TBD</p> -->
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
                            src="enze.jpg"
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
                        <a
                            href="https://xuenze.com"
                            target="&ldquo;blank&rdquo;">Enze Xu</a
                        >
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
            <li>Mario Badr (University of Toronto)</li>
            <li>Yuhui Bao (AMD)</li>
            <li>Shibo Chen (Tenstorrent)</li>
            <li>Shi Dong (Cerebras Systems)</li>
            <li>Hanxian Huang (Meta)</li>
            <li>Bingyao Li (University of California, Riverside)</li>
            <li>Changxi Liu (National University of Singapore)</li>
            <li>Hongyuan Liu (Stevens Institute of Technology)</li>
            <li>Kaustubh Shivdikar (AMD)</li>
            <li>Jindi Wu (DePaul University)</li>
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

    .talk-paper-pdf {
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

    .session-header {
        background-color: #fff9e0; /* Tailwind's sky-100, or pick your preferred light blue */
    }
</style>
