<script>
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    const triggerPrint = () => {
        window.print()
    }
</script>

<svelte:head>
    <title>Yifan Sun - Curriculum Vitae</title>
</svelte:head>

<div class="cv-container">
    <header class="cv-header">
        <div>
            <h1>Yifan Sun</h1>
            <p class="tagline">
                Assistant Professor, Computer Science, William &amp; Mary
                <br />
                McGlothlin-Street Hall 117 Williamsburg, VA 23185
            </p>
        </div>
        <div class="contact">
            <div class="contact-item">
                <img
                    class="contact-icon"
                    src="/phone-solid-full.svg"
                    alt=""
                    aria-hidden="true"
                    width="16"
                    height="16"
                />
                <span>(+1) 716-868-2480</span>
            </div>
            <div class="contact-item">
                <img
                    class="contact-icon"
                    src="/envelope-solid-full.svg"
                    alt=""
                    aria-hidden="true"
                    width="16"
                    height="16"
                />
                <a href="mailto:ysun25@wm.edu">ysun25@wm.edu</a>
            </div>
            <div class="contact-item">
                <img
                    class="contact-icon"
                    src="/globe-solid-full.svg"
                    alt=""
                    aria-hidden="true"
                    width="16"
                    height="16"
                />
                <a
                    href="https://syifan.github.io"
                    target="_blank"
                    rel="noreferrer">syifan.github.io</a
                >
            </div>
        </div>
    </header>

    <main>
        <section class="cv-section" id="academic-appointments">
            <header class="section-header">
                <h2>Academic Appointments</h2>
            </header>
            <div class="entry-list">
                <div class="entry">
                    <div class="entry-body">
                        <div class="entry-header">Assistant Professor</div>
                        <div>Computer Science, William &amp; Mary</div>
                    </div>
                    <div class="entry-meta">
                        <div>Williamsburg, VA</div>
                        <div>Aug. 2020 - Present</div>
                    </div>
                </div>
            </div>
        </section>

        <section class="cv-section" id="education">
            <header class="section-header">
                <h2>Education</h2>
            </header>
            <div class="entry-list">
                <div class="entry">
                    <div class="entry-body">
                        <div class="entry-header">
                            Ph.D. in Computer Engineering
                        </div>
                        <div>Northeastern University</div>
                    </div>
                    <div class="entry-meta">
                        <div>Sep. 2013 - Aug. 2020</div>
                        <div>Boston, MA</div>
                    </div>
                </div>
                <div class="entry">
                    <div class="entry-body">
                        <div class="entry-header">
                            M.S. in Electrical Engineering
                        </div>
                        <div>University at Buffalo</div>
                    </div>
                    <div class="entry-meta">
                        <div>Sep. 2011 - Jun. 2013</div>
                        <div>Buffalo, NY</div>
                    </div>
                </div>
                <div class="entry">
                    <div class="entry-body">
                        <div class="entry-header">
                            B.Eng. in Electrical Engineering
                        </div>
                        <div>
                            Huazhong University of Science and Technology
                        </div>
                    </div>
                    <div class="entry-meta">
                        <div>Sep. 2007 - Jun. 2011</div>
                        <div>Wuhan, China</div>
                    </div>
                </div>
                <div class="entry">
                    <div class="entry-body">
                        <div class="entry-header">
                            Bachelor in Business Administration (Minor)
                        </div>
                        <div>Wuhan University</div>
                    </div>
                    <div class="entry-meta">
                        <div>Sep. 2008 - Jun. 2011</div>
                        <div>Wuhan, China</div>
                    </div>
                </div>
            </div>
        </section>

        <section class="cv-section" id="industry-experience">
            <header class="section-header">
                <h2>Industry Experience</h2>
            </header>
            <div class="entry-list">
                <div class="entry">
                    <div class="entry-body">
                        <div class="entry-header">
                            AMD, <span class="subtle"
                                >Software Engineer (Co-op)</span
                            >
                        </div>
                        <div>
                            Performance modeling and graphics simulator
                            development for AMD Navi GPUs
                        </div>
                    </div>
                    <div class="entry-meta">
                        <div>Jul. 2018 - Dec. 2018</div>
                        <div>Boxborough, MA</div>
                    </div>
                </div>
                <div class="entry">
                    <div class="entry-body">
                        <div class="entry-header">
                            Dell EMC, <span class="subtle"
                                >Software Engineer (Co-op)</span
                            >
                        </div>
                        <div>
                            Cloud-based GPU-as-a-service system design,
                            development, and deployment
                        </div>
                    </div>
                    <div class="entry-meta">
                        <div>Jul. 2016 - Dec. 2016</div>
                        <div>Hopkinton, MA</div>
                    </div>
                </div>
            </div>
        </section>

        <section class="cv-section" id="awards">
            <header class="section-header">
                <h2>Awards</h2>
            </header>
            <div class="entry-list">
                <div class="entry">
                    <div class="entry-body">
                        <div class="entry-header">CAREER Award</div>
                        NSF
                    </div>
                    <div class="entry-meta">2024</div>
                </div>
                <div class="entry">
                    <div class="entry-body">
                        <div class="entry-header">Best Paper Award</div>
                        CHI'23
                    </div>
                    <div class="entry-meta">2023</div>
                </div>
                <div class="entry">
                    <div class="entry-body">
                        <div class="entry-header">
                            Best Paper Honorable Mention
                        </div>
                        CHI'20
                    </div>
                    <div class="entry-meta">2020</div>
                </div>
                <div class="entry">
                    <div class="entry-body">
                        <div class="entry-header">
                            Outstanding Graduate Student in Experiential
                            Learning
                        </div>
                        Northeastern University
                    </div>
                    <div class="entry-meta">2019</div>
                </div>
                <div class="entry">
                    <div class="entry-body">
                        <div class="entry-header">Teaching Award</div>
                        Northeastern University College of Engineering
                    </div>
                    <div class="entry-meta">2019</div>
                </div>
                <div class="entry">
                    <div class="entry-body">
                        <div class="entry-header">Best Paper Award</div>
                        ICPE
                    </div>
                    <div class="entry-meta">2018</div>
                </div>
                <div class="entry">
                    <div class="entry-body">
                        <div class="entry-header">Best Paper Candidate</div>
                        IISWC
                    </div>
                    <div class="entry-meta">2016</div>
                </div>
                <div class="entry">
                    <div class="entry-body">
                        <div class="entry-header">
                            Best Student Paper Award
                        </div>
                        WUWNET
                    </div>
                    <div class="entry-meta">013</div>
                </div>
            </div>
        </section>

        <section class="cv-section" id="grants">
            <header class="section-header">
                <h2>Grants and Supports</h2>
            </header>
            <p class="list-heading">
                I have acquired research funding that totals $1,685,843 at
                William &amp; Mary.
            </p>
            <div class="entry-list">
                <div class="entry">
                    <div class="entry-body">
                        Advancing Tools and Resources for the AMD ROCm Platform
                        <div class="grant-detail">
                            <span><em>AMD, Gift, Sole PI</em></span>
                            <span class="subtle">$100,000</span>
                        </div>
                    </div>
                    <div class="entry-meta">
                        <div>Dec. 2024</div>
                    </div>
                </div>
                <div class="entry">
                    <div class="entry-body">
                        <div class="grant-title">
                            <strong
                                >CAREER: Towards Next-Generation
                                Human-in-the-Loop and Human-over-the-Loop
                                Computer Architecture Performance Analysis
                                Infrastructure</strong
                            >
                        </div>
                        <div class="grant-detail">
                            <span><em>NSF, CAREER, Sole PI</em></span>
                            <span class="subtle">$598,555</span>
                        </div>
                    </div>
                    <div class="entry-meta">
                        <div>Apr. 2025 - Mar. 2030</div>
                    </div>
                </div>
                <div class="entry">
                    <div class="entry-body">
                        <div class="grant-title">
                            <strong
                                >Enabling GPU Performance Simulation for
                                Large-Scale Workloads with Lightweight
                                Simulation Methods</strong
                            >
                        </div>
                        <div class="grant-detail">
                            <span
                                ><em
                                    >NSF, SHF Core, Medium &#8212; PI: <span
                                        class="self-name">Yifan Sun</span
                                    > (lead institution lead PI), Adwait Jog, Sreepathi
                                    Pai</em
                                ></span
                            >
                            <span class="subtle"
                                >$1,133,743; my share $376,249</span
                            >
                        </div>
                    </div>
                    <div class="entry-meta">
                        <div>May 2024 - Apr. 2028</div>
                    </div>
                </div>
                <div class="entry">
                    <div class="entry-body">
                        <div class="grant-title">
                            <strong
                                >Binary Instrumentation for GPU Programs on AMD
                                Platforms</strong
                            >
                        </div>
                        <div class="grant-detail">
                            <span><em>AMD, Gift, Sole PI</em></span>
                            <span class="subtle">$50,000</span>
                        </div>
                    </div>
                    <div class="entry-meta">
                        <div>Dec. 2023</div>
                    </div>
                </div>
                <div class="entry">
                    <div class="entry-body">
                        <div class="grant-title">
                            <strong
                                >HIP Development on AMD ROCm Platform</strong
                            >
                        </div>
                        <div class="grant-detail">
                            <span><em>AMD, Gift, Sole PI</em></span>
                            <span class="subtle">$50,000</span>
                        </div>
                    </div>
                    <div class="entry-meta">
                        <div>Dec. 2023</div>
                    </div>
                </div>
                <div class="entry">
                    <div class="entry-body">
                        <div class="grant-title">
                            <strong
                                >The Methods of Profiling and Tracing of GPU
                                Programs Running on AMD ROCm Platforms</strong
                            >
                        </div>
                        <div class="grant-detail">
                            <span><em>AMD, Gift, Sole PI</em></span>
                            <span class="subtle">$44,000</span>
                        </div>
                    </div>
                    <div class="entry-meta">
                        <div>May 2023</div>
                    </div>
                </div>
                <div class="entry">
                    <div class="entry-body">
                        <div class="grant-title">
                            <strong
                                >Building Explainable Architecture with
                                Simulation and Visualization Techniques</strong
                            >
                        </div>
                        <div class="grant-detail">
                            <span><em>NSF, CRII, Sole PI</em></span>
                            <span class="subtle">$175,000</span>
                        </div>
                    </div>
                    <div class="entry-meta">
                        <div>May 2023 - Apr. 2026</div>
                    </div>
                </div>
                <div class="entry">
                    <div class="entry-body">
                        <div class="grant-title">
                            <strong
                                >Enabling Computer Architecture as a Service</strong
                            >
                        </div>
                        <div class="grant-detail">
                            <span
                                ><em
                                    >NSF, CCRI (later renamed as CIRC),
                                    Planning-C &#8212; PI: <span
                                        class="self-name">Yifan Sun</span
                                    > (lead institution lead PI), Katherine E. Isaacs
                                    (University of Utah)</em
                                ></span
                            >
                            <span class="subtle"
                                >$100,000; my share $72,369</span
                            >
                        </div>
                    </div>
                    <div class="entry-meta">
                        <div>Mar. 2023 - Feb. 2026</div>
                    </div>
                </div>
                <div class="entry">
                    <div class="entry-body">
                        <div class="grant-title">
                            <strong
                                >AMD ROCm and HIP Platform Development</strong
                            >
                        </div>
                        <div class="grant-detail">
                            <span><em>AMD, Gift, Sole PI</em></span>
                            <span class="subtle"
                                >$60,000 + 2x AMD MI100 GPU</span
                            >
                        </div>
                    </div>
                    <div class="entry-meta">
                        <div>Mar. 2022</div>
                    </div>
                </div>
                <div class="entry">
                    <div class="entry-body">
                        <div class="grant-title">
                            <strong
                                >Exploring Interpretable Deep Learning from
                                Information Theoretic Perspective: Modeling and
                                Applications</strong
                            >
                        </div>
                        <div class="grant-detail">
                            <span
                                ><em
                                    >Neocortex, Pittsburgh Supercomputing
                                    Center &#8212; PI: Huajie Shao, <span
                                        class="self-name">Yifan Sun</span
                                    ></em
                                ></span
                            >
                            <span class="subtle"
                                >Access to Cerebras Wafer-Scale Computing
                                Devices</span
                            >
                        </div>
                    </div>
                    <div class="entry-meta">
                        <div>Feb. 2022</div>
                    </div>
                </div>
                <div class="entry">
                    <div class="entry-body">
                        <div class="grant-title">
                            <strong
                                >Developing Infrastructure for Advancing
                                Research and Teaching in Security and
                                Reliability</strong
                            >
                        </div>
                        <div class="grant-detail">
                            <span
                                ><em
                                    >Coastal Virginia Center for Cyber
                                    Innovation (COVA CCI) &#8212; PI: Dmitry
                                    Evtyushkin; Co-PI: Evgenia Smirni, <span
                                        class="self-name">Yifan Sun</span
                                    >, Adwait Nadkarni</em
                                ></span
                            >
                            <span class="subtle"
                                >$79,670 for equipment shared by the department</span
                            >
                        </div>
                    </div>
                    <div class="entry-meta">
                        <div>Dec. 2021</div>
                    </div>
                </div>
                <div class="entry">
                    <div class="entry-body">
                        <div class="grant-title">
                            <strong
                                >AMD ROCm and HIP Platform Development</strong
                            >
                        </div>
                        <div class="grant-detail">
                            <span><em>AMD, Gift, Sole PI</em></span>
                            <span class="subtle">$40,000</span>
                        </div>
                    </div>
                    <div class="entry-meta">
                        <div>Sep. 2021</div>
                    </div>
                </div>
                <div class="entry">
                    <div class="entry-body">
                        <div class="grant-title">
                            <strong
                                >General-Purpose Computing with AMD Graphics
                                Processors</strong
                            >
                        </div>
                        <div class="grant-detail">
                            <span><em>AMD, Gift, Sole PI</em></span>
                            <span class="subtle">$40,000</span>
                        </div>
                    </div>
                    <div class="entry-meta">
                        <div>Apr. 2021</div>
                    </div>
                </div>
            </div>
        </section>

        <section class="cv-section" id="publications">
            <header class="section-header">
                <h2>Publications</h2>
            </header>
            <div class="section-intro">
                <p class="note">
                    <span class="self-name">Underline</span> &#8212; Myself
                </p>
                <p class="note">
                    <span class="wm-advisee">Wavy underline</span> &#8212; My William
                    &amp; Mary student advisee
                </p>
            </div>
            <h3>Peer-Reviewed Conference Papers</h3>
            <div class="entry-list publication-list">
                <div class="entry publication-entry">
                    Wenhan Lyu, Yimeng Wang, <span class="self-name"
                        >Yifan Sun</span
                    >, and Yixuan Zhang. 2025.
                    <span class="publication-title"
                        >Will Your Next Pair Programming Partner Be Human? An
                        Empirical Evaluation of Generative AI as a
                        Collaborative Teammate in a Semester-Long Classroom
                        Setting</span
                    >. In Proceedings of the Twelfth ACM Conference on Learning
                    @ Scale (L@S '25). Association for Computing Machinery, New
                    York, NY, USA, 83&#8211;94.
                    https://doi.org/10.1145/3698205.3729544 [Acceptance Rate
                    18/84 &approx; 21.4%]
                </div>
                <div class="entry publication-entry">
                    <span class="wm-advisee">Ying Li</span>, Yuhui Bao, Gongyu
                    Wang, Xinxin Mei, Pranav Vaid, Anandaroop Ghosh, Adwait
                    Jog, Darius Bunandar, Ajay Joshi, and
                    <span class="self-name">Yifan Sun</span>. 2025.
                    <span class="publication-title"
                        >TrioSim: A Lightweight Simulator for Large-Scale DNN
                        Workloads on Multi-GPU Systems</span
                    >. In Proceedings of the 52nd Annual International
                    Symposium on Computer Architecture (ISCA '25). Association
                    for Computing Machinery, New York, NY, USA,
                    1524&#8211;1538. https://doi.org/10.1145/3695053.3731082
                    [Acceptance Rate 132/570 &approx; 23.2%]
                </div>
                <div class="entry publication-entry">
                    Amel Fatima, Yang Yang, <span class="self-name"
                        >Yifan Sun</span
                    >, Rachata Ausavarungnirun, and Adwait Jog. 2025.
                    <span class="publication-title"
                        >NetCrafter: Tailoring Network Traffic for Non-Uniform
                        Bandwidth Multi-GPU Systems</span
                    >. In Proceedings of the 52nd Annual International
                    Symposium on Computer Architecture (ISCA '25). Association
                    for Computing Machinery, New York, NY, USA,
                    1064&#8211;1078. https://doi.org/10.1145/3695053.3731040
                    [Acceptance Rate 132/570 &approx; 23.2%]
                </div>
                <div class="entry publication-entry">
                    Changxi Liu, Miao Yu, <span class="self-name"
                        >Yifan Sun</span
                    >, and Trevor E. Carlson. 2025.
                    <span class="publication-title"
                        >The Sparsity-Aware LazyGPU Architecture</span
                    >. In Proceedings of the 52nd Annual International
                    Symposium on Computer Architecture (ISCA '25). Association
                    for Computing Machinery, New York, NY, USA,
                    1020&#8211;1034. https://doi.org/10.1145/3695053.3731009
                    [Acceptance Rate 132/570 &approx; 23.2%]
                </div>
                <div class="entry publication-entry">
                    Matin Raayai-Ardakani, Andrew Nguyen, Ivan Rosales, <span
                        class="wm-advisee">Daoxuan Xu</span
                    >, Yuwei Sun, <span class="self-name">Yifan Sun</span>,
                    David Kaeli, and Norman Rubin. 2025.
                    <span class="publication-title"
                        >Luthier: A Dynamic Binary Instrumentation Framework
                        Targeting AMD GPUs</span
                    >. In Proceedings of the 2025 IEEE International Symposium
                    on Performance Analysis of Systems and Software (ISPASS),
                    May 11-13, 2025. 137&#8211;149. Ghent, Belgium.
                    https://doi.org/10.1109/ISPASS64960.2025.00022 [Acceptance
                    Rate 28/99 &approx; 28%]
                </div>
                <div class="entry publication-entry">
                    Ali Mosallaei, Katherine E. Isaacs, and <span
                        class="self-name">Yifan Sun</span
                    >. 2024.
                    <span class="publication-title"
                        >Looking into the Black Box: Monitoring Computer
                        Architecture Simulations in Real-Time with AkitaRTM</span
                    >. In 2024 57th IEEE/ACM International Symposium on
                    Microarchitecture (MICRO '24). IEEE, 780&#8211;794.
                    https://doi.org/10.1109/MICRO61859.2024.00063 [Acceptance
                    Rate 113/ 489 &approx; 22.7%]
                </div>
                <div class="entry publication-entry">
                    Wenhan Lyu, Yimeng Wang, Tingting (Rachel) Chung, <span
                        class="self-name">Yifan Sun</span
                    >, and Yixuan Zhang. 2024.
                    <span class="publication-title"
                        >Evaluating the Effectiveness of LLMs in Introductory
                        Computer Science Education: A Semester-Long Field Study</span
                    >. In Proceedings of the Eleventh ACM Conference on
                    Learning @ Scale (L@S '24). Association for Computing
                    Machinery, New York, NY, USA, 63&#8211;74.
                    https://doi.org/10.1145/3657604.3662036 [Acceptance rate:
                    22/ 90 &approx; 24.4%]
                </div>
                <div class="entry publication-entry">
                    Yichen Luo, Daoxuan Xu, Gang Zhou, <span class="self-name"
                        >Yifan Sun</span
                    >, and Sidi Lu. 2024.
                    <span class="publication-title"
                        >Impact of Raindrops on Camera-Based Detection in
                        Software-Defined Vehicles</span
                    >. In 2024 IEEE International Conference on Mobility,
                    Operations, Services and Technologies (MOST '24). IEEE,
                    193&#8211;205. https://doi.org/10.1109/MOST60774.2024.00028
                </div>
                <div class="entry publication-entry">
                    <span class="wm-advisee">Ying Li</span>,
                    <span class="self-name">Yifan Sun</span>, and Adwait Jog.
                    2023.
                    <span class="publication-title"
                        >Path Forward Beyond Simulators: Fast and Accurate GPU
                        Execution Time Prediction for DNN Workloads</span
                    >. In Proceedings of the 56th Annual IEEE/ACM International
                    Symposium on Microarchitecture (MICRO '23). Association for
                    Computing Machinery, New York, NY, USA, 380&#8211;394.
                    <br /> https://doi.org/10.1145/3613424.3614277 [Acceptance rate:
                    101/424 &approx; 23.8%]
                </div>
                <div class="entry publication-entry">
                    Changxi Liu, <span class="self-name">Yifan Sun</span>, and
                    Trevor E. Carlson. 2023.
                    <span class="publication-title"
                        >Photon: A Fine-grained Sampled Simulation Methodology
                        for GPU Workloads</span
                    >. In Proceedings of the 56th Annual IEEE/ACM International
                    Symposium on Microarchitecture (MICRO '23). Association for
                    Computing Machinery, New York, NY, USA, 1227&#8211;1241.
                    https://doi.org/10.1145/3613424.3623773 [Acceptance rate:
                    101/424 &approx; 23.8%]
                </div>
                <div class="entry publication-entry">
                    &#127942; <strong>[Best Paper Award (Top 1%)] </strong>
                    Yixuan Zhang, Joseph D Gaggiano, Nutchanon Yongsatianchot, Nurul
                    M Suhaimi, Miso Kim,
                    <span class="self-name">Yifan Sun</span>, Jacqueline
                    Griffin, and Andrea G Parker. 2023.
                    <span class="publication-title"
                        >What Do We Mean When We Talk about Trust in Social
                        Media? A Systematic Review</span
                    >. In Proceedings of the 2023 CHI Conference on Human
                    Factors in Computing Systems (CHI '23). Association for
                    Computing Machinery, New York, NY, USA, Article 670,
                    1&#8211;22. <br />https://doi.org/10.1145/3544548.3581019
                    [Acceptance rate: 879/3182 &approx; 27.6%]
                </div>
                <div class="entry publication-entry">
                    Yixuan Zhang, <span class="self-name">Yifan Sun</span>,
                    Joseph D. Gaggiano, Neha Kumar, Clio Andris, and Andrea G.
                    Parker. 2023.
                    <span class="publication-title"
                        >Visualization Design Practices in a Crisis: Behind the
                        Scenes with COVID-19 Dashboard Creators</span
                    >. IEEE Transactions on Visualization and Computer Graphics
                    29, 1 (2023), 1037&#8211;1047.
                    https://doi.org/10.1109/TVCG.2022.3209493. [Acceptance
                    rate: 122/ 460 &approx; 26.5%]
                </div>
                <div class="entry publication-entry">
                    Yuhui Bao, <span class="self-name">Yifan Sun</span>, Zlatan
                    Feric, Michael Tian Shen, Micah Weston, Jos&#233; L.
                    Abell&#225;n, Trinayan Baruah, John Kim, Ajay Joshi, and
                    David Kaeli. 2023.
                    <span class="publication-title"
                        >NaviSim: A Highly Accurate GPU Simulator for AMD RDNA
                        GPUs</span
                    >. In Proceedings of the International Conference on
                    Parallel Architectures and Compilation Techniques (PACT
                    '22). Association for Computing Machinery, New York, NY,
                    USA, 333&#8211;345. https://doi.org/10.1145/3559009.3569666
                    [Acceptance rate: 50/ 118 &approx; 42.4%]
                </div>
                <div class="entry publication-entry">
                    Yixuan Zhang, Nurul Suhaimi, Nutchanon Yongsatianchot,
                    Joseph D Gaggiano, Miso Kim, Shivani A Patel, <span
                        class="self-name">Yifan Sun</span
                    >, Stacy Marsella, Jacqueline Griffin, and Andrea G Parker.
                    2022.
                    <span class="publication-title"
                        >Shifting Trust: Examining How Trust and Distrust
                        Emerge, Transform, and Collapse in COVID-19 Information
                        Seeking</span
                    >. In Proceedings of the 2022 CHI Conference on Human
                    Factors in Computing Systems (CHI '22). Association for
                    Computing Machinery, New York, NY, USA, Article 78,
                    1&#8211;21. https://doi.org/10.1145/3491102.3501889 [Top
                    12.5%; Acceptance rate: 638/ 2597 &approx; 24.6%]
                </div>
                <div class="entry publication-entry">
                    <span class="self-name">Yifan Sun</span>, Yixuan Zhang, Ali
                    Mosallaei, Michael D. Shah, Cody Dunne, and David Kaeli.
                    2021.
                    <span class="publication-title"
                        >Daisen: A Framework for Visualizing Detailed GPU
                        Execution</span
                    >. Computer Graphics Forum 40, 3 (2021), 239&#8211;250.
                    <br />https://doi.org/10.1111/cgf.14303 [Acceptance Rate
                    &approx; 26.0%]
                </div>
                <div class="entry publication-entry">
                    Yixuan Zhang, <span class="self-name">Yifan Sun</span>,
                    Lace Padilla, Sumit Barua, Enrico Bertini, and Andrea G
                    Parker. 2021.
                    <span class="publication-title"
                        >Mapping the Landscape of COVID-19 Crisis
                        Visualizations</span
                    >. In Proceedings of the 2021 CHI Conference on Human
                    Factors in Computing Systems (CHI '21). Association for
                    Computing Machinery, New York, NY, USA, Article 608,
                    1&#8211;23. <br /> https://doi.org/10.1145/3411764.3445381 [Acceptance
                    rate &approx; 26.3%]
                </div>
                <div class="entry publication-entry">
                    Trinayan Baruah, Kaustubh Shivdikar, Shi Dong, <span
                        class="self-name">Yifan Sun</span
                    >, Saiful A. Mojumder, Kihoon Jung, Jos&#233; L.
                    Abell&#225;n, Yash Ukidave, Ajay Joshi, John Kim, and David
                    Kaeli. 2021.
                    <span class="publication-title"
                        >GNNMark: A Benchmark Suite to Characterize Graph
                        Neural Network Training on GPUs</span
                    >. In 2021 IEEE International Symposium on Performance
                    Analysis of Systems and Software (ISPASS '21). IEEE,
                    13&#8211;23. https://doi.org/10.1109/ISPASS51385.2021.00013
                    [Acceptance rate &approx; 36.9%]
                </div>
                <div class="entry publication-entry">
                    Trinayan Baruah, <span class="self-name">Yifan Sun</span>,
                    Saiful A. Mojumder, Jos&#233; L. Abell&#225;n, Yash
                    Ukidave, Ajay Joshi, Norman Rubin, John Kim, and David
                    Kaeli. 2020.
                    <span class="publication-title"
                        >Valkyrie: Leveraging Inter-TLB Locality to Enhance GPU
                        Performance</span
                    >. In Proceedings of the ACM International Conference on
                    Parallel Architectures and Compilation Techniques (PACT
                    '20). Association for Computing Machinery, New York, NY,
                    USA, 455&#8211;466. https://doi.org/10.1145/3410463.3414639
                    [Acceptance rate &approx; 25.9%]
                </div>
                <div class="entry publication-entry">
                    &#127942; <strong
                        >[Best Paper Honorable Mention (<br />textless 5%)]</strong
                    >
                    Omid Mohaddesi, <span class="self-name">Yifan Sun</span>,
                    Rana Azghandi, Rozhin Doroudi, Sam Snodgrass, Ozlem Ergun,
                    Jacqueline Griffin, David Kaeli, Stacy Marsella, and Casper
                    Harteveld. 2020.
                    <span class="publication-title"
                        >Introducing Gamettes: A Playful Approach for Capturing
                        Decision-Making for Informing Behavioral Models</span
                    >. In Proceedings of the 2020 CHI Conference on Human
                    Factors in Computing Systems (CHI '20). Association for
                    Computing Machinery, New York, NY, USA, 1&#8211;13.
                    https://doi.org/10.1145/3313831.3376571 [Acceptance rate
                    &approx; 24.3%]
                </div>
                <div class="entry publication-entry">
                    Trinayan Baruah, <span class="self-name">Yifan Sun</span>,
                    Ali Tolga Din&#231;er, Saiful A. Mojumder, Jos&#233; L.
                    Abell&#225;n, Yash Ukidave, Ajay Joshi, Norman Rubin, John
                    Kim, and David Kaeli. 2020.
                    <span class="publication-title"
                        >Griffin: Hardware-Software Support for Efficient Page
                        Migration in Multi-GPU Systems</span
                    >. In 2020 IEEE International Symposium on High Performance
                    Computer Architecture (HPCA '20). IEEE, 596&#8211;609.
                    https://doi.org/10.1109/HPCA47549.2020.00055 [Acceptance
                    rate &approx; 19.4%]
                </div>
                <div class="entry publication-entry">
                    <span class="self-name">Yifan Sun</span>, Trinayan Baruah,
                    Saiful A. Mojumder, Shi Dong, Xiang Gong, Shane Treadway,
                    Yuhui Bao, Spencer Hance, Carter McCardwell, Vincent Zhao,
                    Harrison Barclay, Amir Kavyan Ziabari, Zhongliang Chen,
                    Rafael Ubal, Jos&#233; L. Abell&#225;n, John Kim, Ajay
                    Joshi, and David Kaeli. 2019.
                    <span class="publication-title"
                        >MGPUSim: enabling multi-GPU performance modeling and
                        optimization</span
                    >. In Proceedings of the 46th International Symposium on
                    Computer Architecture (ISCA '19). Association for Computing
                    Machinery, New York, NY, USA, 197&#8211;209.
                    https://doi.org/10.1145/3307650.3322230 [Acceptance rate
                    &approx; 17.0%]
                </div>
                <div class="entry publication-entry">
                    Mohammad Khavari Tavana, <span class="self-name"
                        >Yifan Sun</span
                    >, Nicolas Bohm Agostini, and David Kaeli. 2019.
                    <span class="publication-title"
                        >Exploiting Adaptive Data Compression to Improve
                        Performance and Energy-Efficiency of Compute Workloads
                        in Multi-GPU Systems</span
                    >. In 2019 IEEE International Parallel and Distributed
                    Processing Symposium (IPDPS '19). IEEE, 664&#8211;674.
                    <br /> https://doi.org/10.1109/IPDPS.2019.00075 [Acceptance
                    rate &approx; 27.7%]
                </div>
                <div class="entry publication-entry">
                    Saiful A. Mojumder, Marcia S. Louis, <span
                        class="self-name">Yifan Sun</span
                    >, Amir Kavyan Ziabari, Jos&#233; L. Abell&#225;n, John
                    Kim, David Kaeli, and Ajay Joshi. 2018.
                    <span class="publication-title"
                        >Profiling DNN Workloads on a Volta-based DGX-1 System</span
                    >. In 2018 IEEE International Symposium on Workload
                    Characterization (IISWC '18). IEEE, 122&#8211;133.
                    https://doi.org/10.1109/IISWC.2018.8573521 [Acceptance rate
                    &approx; 36.2%]
                </div>
                <div class="entry publication-entry">
                    Rozhin Doroudi, Rana Azghandi, Zlatan Feric, Omid
                    Mohaddesi, <span class="self-name">Yifan Sun</span>,
                    Jacqueline Griffin, Ozlem Ergun, David Kaeli, Pedro
                    Sequeira, Stacy Marsella, and Casper Harteveld. 2018.
                    <span class="publication-title"
                        >An Integrated Simulation Framework for Examining
                        Resiliency in Pharmaceutical Supply Chains Considering
                        Human Behaviors</span
                    >. In 2018 Winter Simulation Conference (WSC '18). IEEE,
                    88&#8211;99. https://doi.org/10.1109/WSC.2018.8632387
                    [Acceptance rate &approx; 70.4%]
                </div>
                <div class="entry publication-entry">
                    <span class="self-name">Yifan Sun</span>, Saoni Mukherjee,
                    Trinayan Baruah, Shi Dong, Julian Gutierrez, Prannoy Mohan,
                    and David Kaeli. 2018.
                    <span class="publication-title"
                        >Evaluating Performance Tradeoffs on the Radeon Open
                        Compute Platform</span
                    >. In 2018 IEEE International Symposium on Performance
                    Analysis of Systems and Software (ISPASS '18). IEEE,
                    209&#8211;218. <br /> https://doi.org/10.1109/ISPASS.2018.00034
                    [Acceptance rate &approx; 31.3%]
                </div>
                <div class="entry publication-entry">
                    &#127942; <strong>[Best Paper Award]</strong> Shi Dong,
                    Xiang Gong, <span class="self-name">Yifan Sun</span>,
                    Trinayan Baruah, and David Kaeli. 2018.
                    <span class="publication-title"
                        >Characterizing the Microarchitectural Implications of
                        a Convolutional Neural Network (CNN) Execution on GPUs</span
                    >. In Proceedings of the 2018 ACM/SPEC International
                    Conference on Performance Engineering (ICPE '18).
                    Association for Computing Machinery, New York, NY, USA,
                    96&#8211;106. https://doi.org/10.1145/3184407.3184423
                    [Acceptance rate $=$ 24.0%]
                </div>
                <div class="entry publication-entry">
                    Trinayan Baruah, <span class="self-name">Yifan Sun</span>,
                    Shi Dong, David Kaeli, and Norm Rubin. 2018.
                    <span class="publication-title"
                        >Airavat: Improving Energy Efficiency of Heterogeneous
                        Applications</span
                    >. In 2018 Design, Automation &amp; Test in Europe
                    Conference &amp; Exhibition (DATE '18). IEEE,
                    731&#8211;736. DOI:
                    https://doi.org/10.23919/DATE.2018.8342104 [Acceptance rate
                    &approx; 24.2%]
                </div>
                <div class="entry publication-entry">
                    &#127942; <strong>[Best Paper Candidate]</strong>
                    <span class="self-name">Yifan Sun</span>, Xiang Gong, Amir
                    Kavyan Ziabari, Leiming Yu, Xiangyu Li, Saoni Mukherjee,
                    Carter McCardwell, Alejandro Villegas, and David Kaeli.
                    2016.
                    <span class="publication-title"
                        >Hetero-Mark, a Benchmark Suite for CPU-GPU
                        Collaborative Computing</span
                    >. In 2016 IEEE International Symposium on Workload
                    Characterization (IISWC '16). IEEE, 1&#8211;10.
                    https://doi.org/10.1109/IISWC.2016.7581262 [Acceptance rate
                    &approx; 30.4%]
                </div>
                <div class="entry publication-entry">
                    <span class="self-name">Yifan Sun</span>, Chisheng Liang,
                    Steven Sutherland, Casper Harteveld, and David Kaeli. 2016.
                    <span class="publication-title"
                        >Modeling Player Decisions in a Supply Chain Game</span
                    >. In 2016 IEEE Conference on Computational Intelligence
                    and Games (CIG '16). IEEE, 1&#8211;8.
                    https://doi.org/10.1109/CIG.2016.7860444 [Acceptance rate
                    unknown]
                </div>
                <div class="entry publication-entry">
                    Saoni Mukherjee, <span class="self-name">Yifan Sun</span>,
                    Paul Blinzer, Amir Kavyan Ziabari, and David Kaeli. 2016.
                    <span class="publication-title"
                        >A Comprehensive Performance Analysis of HSA and OpenCL
                        2.0</span
                    >. In 2016 IEEE International Symposium on Performance
                    Analysis of Systems and Software (ISPASS '16). IEEE,
                    183&#8211;193. https://doi.org/10.1109/ISPASS.2016.7482093
                    [Acceptance rate &approx; 35.1%]
                </div>
                <div class="entry publication-entry">
                    Jithin Jagannath, Anu Saji, Hovannes Kulhandjian, <span
                        class="self-name">Yifan Sun</span
                    >, Emrecan Demirors, and Tommaso Melodia. 2013.
                    <span class="publication-title"
                        >A hybrid MAC protocol with channel-dependent optimized
                        scheduling for clustered underwater acoustic sensor
                        networks</span
                    >. In Proceedings of the 8th International Conference on
                    Underwater Networks &amp; Systems (WUWNet '13). Association
                    for Computing Machinery, New York, NY, USA, Article 3,
                    1&#8211;8. https://doi.org/10.1145/2532378.2532382
                    [Acceptance rate $=$ 20.0%]
                </div>
                <div class="entry publication-entry">
                    &#127942; <span class="self-name">Yifan Sun</span> and
                    Tommaso Melodia. 2013.
                    <span class="publication-title"
                        >The Internet Underwater: an IP-compatible protocol
                        stack for commercial undersea modems</span
                    >. In Proceedings of the 8th International Conference on
                    Underwater Networks &amp;; Systems (WUWNet '13).
                    Association for Computing Machinery, New York, NY, USA,
                    Article 37, 1&#8211;8.
                    <br />https://doi.org/10.1145/2532378.2532407 [Acceptance
                    rate $=$ 20.0%]
                </div>
            </div>
            <h3>Journals</h3>
            <div class="entry-list publication-list">
                <div class="entry publication-entry">
                    Wenhan Lyu, Shuang Zhang, Tingting Chung, <span
                        class="self-name">Yifan Sun</span
                    >, and Yixuan Zhang. 2025.
                    <span class="publication-title"
                        >Understanding the practices, perceptions, and
                        (dis)trust of generative AI among instructors: A
                        mixed-methods study in the U.S. higher education</span
                    >. Computers and Education: Artificial Intelligence 8
                    (2025), 100383. https://doi.org/10.1016/j.caeai.2025.100383
                </div>
                <div class="entry publication-entry">
                    Shaoyu Wang, Hang Yan, Katherine E. Isaacs, and <span
                        class="self-name">Yifan Sun</span
                    >. 2024.
                    <span class="publication-title"
                        >Visual Exploratory Analysis for Designing Large-Scale
                        Network-on-Chip Architectures: A Domain Expert-Led
                        Design Study</span
                    >. IEEE Transactions on Visualization and Computer Graphics
                    30, 4 (2024), 1970&#8211;1983.
                    https://doi.org/10.1109/TVCG.2023.3337173
                </div>
                <div class="entry publication-entry">
                    Shi Dong, <span class="self-name">Yifan Sun</span>, Nicolas
                    Bohm Agostini, Elmira Karimi, Daniel Lowell, Jing Zhou,
                    Jos&#233; Cano, Jos&#233; L. Abell&#225;n, and David Kaeli.
                    2021.
                    <span class="publication-title"
                        >Spartan: A Sparsity-Adaptive Framework to Accelerate
                        Deep Neural Network Training on GPUs</span
                    >. IEEE Transactions on Parallel and Distributed Systems
                    32, 10 (2021), 2448&#8211;2463. <br /> https://doi.org/10.1109/TPDS.2021.3067825
                </div>
                <div class="entry publication-entry">
                    Rozhin Doroudi, Pedro Sequeira, Stacy Marsella, Ozlem
                    Ergun, Rana Azghandi, David Kaeli, <span class="self-name"
                        >Yifan Sun</span
                    >, and Jacqueline Griffin. 2020.
                    <span class="publication-title"
                        >Effects of trust-based decision making in disrupted
                        supply chains</span
                    >. PLOS ONE 15, 2 (February 2020), e0224761.
                    https://doi.org/10.1371/journal.pone.0224761
                </div>
                <div class="entry publication-entry">
                    Chen Li, <span class="self-name">Yifan Sun</span>, Lingling
                    Jin, Lingjie Xu, Zheng Cao, Pengfei Fan, David Kaeli, Sheng
                    Ma, Yang Guo, and Jun Yang. 2019.
                    <span class="publication-title"
                        >Priority-Based PCIe Scheduling for Multi-Tenant
                        Multi-GPU Systems</span
                    >. IEEE Computer Architecture Letters 18, 2 (2019),
                    157&#8211;160. https://doi.org/10.1109/LCA.2019.2955119
                </div>
                <div class="entry publication-entry">
                    Amir Kavyan Ziabari, <span class="self-name"
                        >Yifan Sun</span
                    >, Yenai Ma, Dana Schaa, Jos&#233; L. Abell&#225;n, Rafael
                    Ubal, John Kim, Ajay Joshi, and David Kaeli. 2016.
                    <span class="publication-title"
                        >UMH: A Hardware-Based Unified Memory Hierarchy for
                        Systems with Multiple Discrete GPUs</span
                    >. ACM Trans. Archit. Code Optim. 13, 4, Article 35
                    (December 2016), 25 pages. https://doi.org/10.1145/2996190
                </div>
                <div class="entry publication-entry">
                    Abdulla K. Al-Ali, <span class="self-name">Yifan Sun</span
                    >, Marco Di Felice, Jarkko Paavola, and Kaushik R.
                    Chowdhury. 2015.
                    <span class="publication-title"
                        >Accessing Spectrum Databases Using Interference
                        Alignment in Vehicular Cognitive Radio Networks</span
                    >. IEEE Transactions on Vehicular Technology 64, 1 (2015),
                    263&#8211;272. https://doi.org/10.1109/TVT.2014.2318837
                </div>
                <div class="entry publication-entry">
                    <span class="self-name">Yifan Sun</span> and Kaushik R.
                    Chowdhury. 2014.
                    <span class="publication-title"
                        >Enabling Emergency Communication Through a Cognitive
                        Radio Vehicular Network.</span
                    > IEEE Communications Magazine 52, 10 (2014), 68&#8211;75. https://doi.org/10.1109/MCOM.2014.6917404
                </div>
            </div>
            <h3>Books</h3>
            <div class="entry-list publication-list">
                <div class="entry publication-entry">
                    <span class="self-name">Yifan Sun</span>,
                    <span class="wm-advisee">Sabila Al Jannat</span>, Trinayan
                    Buruah, and David Kaeli. 2025.
                    <span class="publication-title"
                        ><a
                            href="https://www.amazon.com/Accelerated-Computing-HIP-Yifan-Sun/dp/B0F4F3F211/"
                            target="_blank"
                            rel="noreferrer"
                            >Accelerated Computing with HIP: Second Edition.</a
                        ></span
                    > ISBN: 979-8218107444.
                </div>
                <div class="entry publication-entry">
                    <span class="self-name">Yifan Sun</span>, Trinayan Buruah,
                    and David Kaeli. 2022.
                    <span class="publication-title"
                        ><a
                            href="https://www.amazon.com/Accelerated-Computing-HIP-Yifan-Sun/dp/B0BQQ18HGP/"
                            target="_blank"
                            rel="noreferrer">Accelerated Computing with HIP</a
                        ></span
                    >. ISBN: 979-8218107444.
                </div>
            </div>
            <h3>Translation of My Books</h3>
            <div class="entry-list publication-list">
                <div class="entry publication-entry">
                    <span class="self-name"
                        >&#1048;&#1092;&#1072;&#1085;&#1100;
                        &#1057;&#1091;&#1085;</span
                    >, &#1058;&#1088;&#1080;&#1085;&#1072;&#1081;&#1072;&#1085;
                    &#1041;&#1072;&#1088;&#1091;&#1072;,
                    &#1044;&#1101;&#1074;&#1080;&#1076;
                    &#1050;&#1072;&#1101;&#1083;&#1080;.2024.<span
                        class="publication-title"
                        >&#1042;&#1067;&#1057;&#1054;&#1050;&#1054;&#1055;&#1056;&#1054;&#1048;&#1047;&#1042;&#1054;&#1044;&#1048;&#1058;&#1045;&#1051;&#1068;&#1053;&#1067;&#1045;
                        &#1042;&#1067;&#1063;&#1048;&#1057;&#1051;&#1045;&#1053;&#1048;&#1071;
                        &#1057;
                        &#1055;&#1054;&#1052;&#1054;&#1065;&#1068;&#1070; HIP</span
                    > (The Russian translation of the book Accelerated Computing
                    with HIP, as part of the Supercomputing Education Series), Moscow
                    University Press.
                </div>
            </div>
            <h3>Book Chapters</h3>
            <div class="entry-list publication-list">
                <div class="entry publication-entry">
                    Shih-Hao Hung, Thomas B. Jablin, <span class="self-name"
                        >Yifan Sun</span
                    >, Rafael Ubal, and David Kaeli. 2015.
                    <span class="publication-title">HSA Simulators</span>. A
                    book chapter in Heterogeneous System Architecture:
                    Practical Applications for Industry, 1st edition, Elsevier.
                </div>
            </div>
            <h3>Patents</h3>
            <div class="entry-list publication-list">
                <div class="entry publication-entry">
                    Junping Zhao, <span class="self-name">Yifan Sun</span>.
                    Layne Peng, Jie Bao, Kun Wang. (Jan. 2021).
                    <span class="publication-title"
                        >Intelligent data coordination for accelerated
                        computing in cloud environment</span
                    >. Patent No. US 10,891,156, Filed Apr 26, 2017, Issued Jan
                    12, 2021.
                </div>
                <div class="entry publication-entry">
                    <span class="self-name">Yifan Sun</span>, Layne Peng,
                    Robert A. Lincourt JR., John Cardente, and Junping Zhao.
                    (Jun. 2019).
                    <span class="publication-title"
                        >Managing access to a resource pool of graphics
                        processing units under fine grain control</span
                    >. Patent No. US 10,262,390, Filed Apr 14, 2017, Issued Jun
                    27, 2019.
                </div>
                <div class="entry publication-entry">
                    Junping Zhao, Layne Peng, Jie Bao, Kun Wang, and <span
                        class="self-name">Yifan Sun</span
                    >. (Apr. 2019).
                    <span class="publication-title"
                        >Checkpointing for GPU-as-a-Service in Cloud Computing
                        Environment</span
                    >, Patent No. US 10,275,851, Filed Apr 25, 2017, Issued Apr
                    30, 2019.
                </div>
                <div class="entry publication-entry">
                    <span class="self-name">Yifan Sun</span>, Layne Peng,
                    Robert A. Lincourt JR., John Cardente, John S Harwood.
                    (Oct. 2018).
                    <span class="publication-title"
                        >Queue-based GPU Virtualization and Management System</span
                    >. Patent No. US 10,109,030, Filed Dec 27, 2016, Issued Oct
                    23, 2018.
                </div>
            </div>
            <h3>Workshop or Poster Publications</h3>
            <div class="entry-list publication-list">
                <div class="entry publication-entry">
                    <span class="wm-advisee">Daoxuan Xu</span>, Le Xu, Jie Ren,
                    <span class="self-name">Yifan Sun</span>. 2025.
                    <span class="publication-title"
                        >Exploring the Wafer-Scale GPUs</span
                    >. The 17th Workshop on General Purpose Processing using
                    GPU (GPGPU 2025).
                </div>
                <div class="entry publication-entry">
                    Nicol&#225;s Meseguer, <span class="self-name"
                        >Yifan Sun</span
                    >, Michael Pellauer, Jos&#233; L. Abell&#225;n and Manuel
                    E. Acacio. 2025.
                    <span class="publication-title"
                        >ACTA: Automatic Configuration of the Tensor Memory
                        Accelerator for High-End GPUs</span
                    >. The 17th Workshop on General Purpose Processing using
                    GPU (GPGPU 2025).
                </div>
                <div class="entry publication-entry">
                    <span class="wm-advisee">Chris Thames</span>,
                    <span class="self-name">Yifan Sun</span>. 2024.
                    <span class="publication-title"
                        >A Survey of Artificial Intelligence Approaches to
                        Safety and Mission-Critical Systems</span
                    >. The 24th Integrated Communications, Navigation and
                    Surveillance Conference (ICNS 2024).
                </div>
                <div class="entry publication-entry">
                    <span class="wm-advisee">Ying Li</span>, Yuhui Bao, Pranav
                    Vaid, Gongyu Wang, Adwait Jog, Darius Bunandar, Ajay Joshi,
                    <span class="self-name">Yifan Sun</span>. 2023.
                    <span class="publication-title"
                        >TraceSim: a Lightweight Simulator for Large-Scale DNN
                        Workloads on Multi-GPU Systems</span
                    >. The First Workshop on Computer Architecture Modeling and
                    Simulation (CAMS 2023).
                </div>
                <div class="entry publication-entry">
                    Ali Mosallaei, Katherine Isaacs, <span class="self-name"
                        >Yifan Sun</span
                    >. 2023.
                    <span class="publication-title"
                        >Looking into the Black Box: Monitoring Computer
                        Architecture Simulations in Real-Time with AkitaRTM</span
                    >. The First Workshop on Computer Architecture Modeling and
                    Simulation (CAMS 2023).
                </div>
                <div class="entry publication-entry">
                    <span class="wm-advisee">Ying Li</span>,
                    <span class="self-name">Yifan Sun</span>, Adwait Jog. 2023.
                    <span class="publication-title"
                        >A Regression-based Model for End-to-End Latency
                        Prediction for DNN Execution on GPUs</span
                    >. 2023 IEEE International Symposium on Performance
                    Analysis of Systems and Software (ISPASS 2023).
                </div>
                <div class="entry publication-entry">
                    <span class="wm-advisee">Chris Thames</span>, Hang Yan,
                    <span class="self-name">Yifan Sun</span>. 2022.
                    <span class="publication-title"
                        >Understanding Wafer-Scale GPU Performance using an
                        Architectural Simulator</span
                    >. The 14th Workshop on General Purpose Processing using
                    GPU (GPGPU 2022).
                </div>
                <div class="entry publication-entry">
                    Yixuan Zhang, <span class="self-name">Yifan Sun</span>,
                    Sumit Barua, Enrico Bertini, and Andrea Grimes Parker.
                    2020.
                    <span class="publication-title"
                        >Mapping the Landscape of COVID-19 Crisis
                        Visualizations</span
                    >. Visualization for Communication (VisComm).
                </div>
            </div>
            <h3>Preprints</h3>
            <div class="entry-list publication-list">
                <div class="entry publication-entry">
                    Saiful A. Mojumder, <span class="self-name">Yifan Sun</span
                    >, Leila Delshadtehrani, Yenai Ma, Trinayan Baruah,
                    Jos&#233; L. Abell&#225;n, John Kim, David Kaeli, Ajay
                    Joshi. 2020.
                    <span class="publication-title"
                        >MGPU-TSM: A Multi-GPU System with Truly Shared Memory</span
                    >. arXiv preprint arXiv:2008.02300.
                </div>
                <div class="entry publication-entry">
                    Saiful A. Mojumder, <span class="self-name">Yifan Sun</span
                    >, Leila Delshadtehrani, Yenai Ma, Trinayan Baruah,
                    Jos&#233; L. Abell&#225;n, John Kim, David Kaeli, Ajay
                    Joshi. 2020.
                    <span class="publication-title"
                        >HALCONE : A Hardware-Level Timestamp-Based Cache
                        Coherence Scheme for Multi-GPU Systems</span
                    >. arXiv preprint arXiv:2007.04292.
                </div>
                <div class="entry publication-entry">
                    <span class="self-name">Yifan Sun</span>, Nicolas Bohm
                    Agostini, Shi Dong, and David Kaeli. 2019.
                    <span class="publication-title"
                        >Summarizing CPU and GPU Design Trends with Product
                        Data</span
                    >. arXiv preprint arXiv:1911.11313.
                </div>
                <div class="entry publication-entry">
                    <span class="self-name">Yifan Sun</span>, Trinayan Baruah,
                    Saiful A Mojumder, Shi Dong, Rafael Ubal, Xiang Gong, Shane
                    Treadway, Yuhui Bao, Vincent Zhao, Jos&#233; Luis
                    Abell&#225;n, John Kim, Ajay Joshi, and David Kaeli. 2019.
                    <span class="publication-title"
                        >MGSim+MGMark: A Framework for Multi-GPU System
                        Research</span
                    >. arXiv preprint arXiv:1811.02884.
                </div>
            </div>
        </section>

        <section class="cv-section" id="software">
            <header class="section-header">
                <h2>Software &amp; Datasets</h2>
            </header>
            <div class="entry-list publication-list">
                <div class="entry resource-entry">
                    <div class="entry-body">
                        <span class="publication-title">The CHIP Dataset</span>
                        <div class="subtitle">
                            <a
                                href="https://chip-dataset.vercel.app"
                                target="_blank"
                                rel="noreferrer"
                                >https://chip-dataset.vercel.app</a
                            >
                        </div>
                    </div>
                    <div class="entry-body">
                        A dataset with 2185 CPUs and 2668 GPUs helping
                        researchers understand semiconductor development
                        trends.
                    </div>
                </div>
                <div class="entry resource-entry">
                    <div class="entry-body">
                        <span class="publication-title"
                            >Daisen (now part of Akita)</span
                        >
                        <div class="subtitle">
                            <a
                                href="https://gitlab.com/akita/vis"
                                target="_blank"
                                rel="noreferrer"
                                >https://gitlab.com/akita/vis</a
                            >
                        </div>
                    </div>
                    <div class="entry-body">
                        A general-purpose visualization tool that reveals the
                        detailed behavior of hardware components.
                    </div>
                </div>
                <div class="entry resource-entry">
                    <div class="entry-body">
                        <span class="publication-title">MGPUSim</span>
                        <div class="subtitle">
                            <a
                                href="https://github.com/sarchlab/mgpusim"
                                target="_blank"
                                rel="noreferrer"
                                >https://github.com/sarchlab/mgpusim</a
                            >
                        </div>
                    </div>
                    <div class="entry-body">
                        A multi-GPU system simulator based on AMD GCN3 GPUs.
                    </div>
                </div>
                <div class="entry resource-entry">
                    <div class="entry-body">
                        <span class="publication-title">Akita</span>
                        <div class="subtitle">
                            <a
                                href="https://github.com/sarchlab/akita"
                                target="_blank"
                                rel="noreferrer"
                                >https://github.com/sarchlab/akita</a
                            >
                        </div>
                    </div>
                    <div class="entry-body">
                        A high-flexibility, high-performance, parallel computer
                        architecture simulation framework.
                    </div>
                </div>
                <div class="entry resource-entry">
                    <div class="entry-body">
                        <span class="publication-title">Hetero-Mark</span>
                        <div class="subtitle">
                            <a
                                href="https://github.com/NUCAR-DEV/Hetero-Mark"
                                target="_blank"
                                rel="noreferrer"
                                >https://github.com/NUCAR-DEV/Hetero-Mark</a
                            >
                        </div>
                    </div>
                    <div class="entry-body">
                        A benchmark suite for CPU-GPU collaborative computing.
                    </div>
                </div>
                <div class="entry resource-entry">
                    <div class="entry-body">
                        <span class="publication-title"
                            >Drug Supply Chain Simulator</span
                        >
                        <div class="subtitle">
                            <a
                                href="https://gitlab.com/syifan/crisp"
                                target="_blank"
                                rel="noreferrer"
                                >https://gitlab.com/syifan/crisp</a
                            >
                        </div>
                    </div>
                    <div class="entry-body">
                        A human-in-the-loop logistics simulator for the U.S.
                        drug supply chain.
                    </div>
                </div>
                <div class="entry resource-entry">
                    <div class="entry-body">
                        <span class="publication-title">VistaLights</span>
                        <div class="subtitle">
                            <a
                                href="https://github.com/syifan/VistaLights"
                                target="_blank"
                                rel="noreferrer"
                                >https://github.com/syifan/VistaLights</a
                            >
                        </div>
                    </div>
                    <div class="entry-body">
                        Strategic game for maritime traffic management and
                        disaster relief.
                    </div>
                </div>
            </div>
        </section>

        <section class="cv-section" id="talks">
            <header class="section-header">
                <h2>Talks and Tutorials</h2>
            </header>
            <div class="entry-list publication-list">
                <div class="entry resource-entry">
                    <div class="entry-body">
                        <span class="publication-title"
                            >User-Friendly Tools in Akita 3.0</span
                        >
                    </div>
                    <div class="entry-body">
                        The 2nd Workshop on Computer Architecture Modeling and
                        Simulation (CAMS '24). November 2024.
                    </div>
                </div>
                <div class="entry resource-entry">
                    <div class="entry-body">
                        <span class="publication-title"
                            >On the Human Side of Computer Architecture,
                            Towards Explainable Architecture</span
                        >
                    </div>
                    <div class="entry-body">
                        North Carolina State University. October 2024.
                    </div>
                </div>
                <div class="entry resource-entry">
                    <div class="entry-body">
                        <span class="publication-title"
                            >Towards Building Explainable Computer Architecture</span
                        >
                    </div>
                    <div class="entry-body">
                        Lehigh University. February 2023.
                    </div>
                </div>
                <div class="entry resource-entry">
                    <div class="entry-body">
                        <span class="publication-title"
                            >MGPUSim: A One-Stop Solution for GPU Architecture
                            Simulation</span
                        >
                    </div>
                    <div class="entry-body">
                        The 2020 International Conference on High Performance
                        Computing &amp; Simulation (HPCS '20). January 2021.
                    </div>
                </div>
                <div class="entry resource-entry">
                    <div class="entry-body">
                        <span class="publication-title"
                            >MGPUSim: A High-Flexibility, High-Performance,
                            Multi-GPU Simulator</span
                        >
                    </div>
                    <div class="entry-body">Alibaba. July 2020.</div>
                </div>
                <div class="entry resource-entry">
                    <div class="entry-body">
                        <span class="publication-title"
                            >Exploring Multi-GPU Simulation and Visual
                            Profiling with MGPUSim</span
                        >
                    </div>
                    <div class="entry-body">
                        With Jos&#233; L. Abell&#225;n, Trinayan Baruah, and
                        David Kaeli. Tutorial at ISCA 2020. May 2020.
                    </div>
                </div>
                <div class="entry resource-entry">
                    <div class="entry-body">
                        <span class="publication-title"
                            >Collaborative Heterogeneous Computing</span
                        >
                    </div>
                    <div class="entry-body">
                        William &amp; Mary. March 2020. University of
                        California, Santa Cruz. March 2020. University of
                        Pittsburgh. March 2020. University of Central Florida.
                        March 2020.
                    </div>
                </div>
                <div class="entry resource-entry">
                    <div class="entry-body">
                        <span class="publication-title"
                            >Tutorial on the Akita Simulator Framework and
                            MGPUSim</span
                        >
                    </div>
                    <div class="entry-body">
                        With Trinayan Baruah, Shi Dong, and David Kaeli.
                        Tutorial at HPCA 2020. February 2020.
                    </div>
                </div>
                <div class="entry resource-entry">
                    <div class="entry-body">
                        <span class="publication-title"
                            >Research in the NUCAR Laboratory at Northeastern
                            University</span
                        >
                    </div>
                    <div class="entry-body">
                        FutureWei. With David Kaeli. July 2019.
                    </div>
                </div>
                <div class="entry resource-entry">
                    <div class="entry-body">
                        <span class="publication-title"
                            >MGSim: a Flexible High-Performance Simulator for
                            Multi-GPU Systems</span
                        >
                    </div>
                    <div class="entry-body">
                        International Workshop on OpenCL (IWOCL). May 2019.
                    </div>
                </div>
                <div class="entry resource-entry">
                    <div class="entry-body">
                        <span class="publication-title"
                            >AKITA: A Go-Based Computer Architecture Simulator
                            Framework</span
                        >
                    </div>
                    <div class="entry-body">Google. May 2019.</div>
                </div>
                <div class="entry resource-entry">
                    <div class="entry-body">
                        <span class="publication-title"
                            >Enabling Multi-GPU High Performance Computing with
                            Memory System Design</span
                        >
                    </div>
                    <div class="entry-body">
                        Lightning talk at Boston University Red Hat
                        Collaboratory. February 2019.
                    </div>
                </div>
                <div class="entry resource-entry">
                    <div class="entry-body">
                        <span class="publication-title"
                            >Benchmarking the New Unified Memory of CUDA 8</span
                        >
                    </div>
                    <div class="entry-body">
                        With Frank Zhao. GTC 2017, San Jose. August 2017.
                    </div>
                </div>
                <div class="entry resource-entry">
                    <div class="entry-body">
                        <span class="publication-title">Multi2Sim 5.0</span>
                    </div>
                    <div class="entry-body">
                        Tutorial at IISWC 2016. September 2016.
                    </div>
                </div>
            </div>
        </section>

        <section class="cv-section" id="teaching">
            <header class="section-header">
                <h2>Teaching</h2>
            </header>
            <div class="subsection">
                <h3>Teaching @ William &amp; Mary</h3>
                <div class="entry-list teaching-list">
                    <div class="entry teaching-entry">
                        <div class="entry-body">
                            <div class="role">
                                CSCI654 &#183; Advanced Computer Architecture
                            </div>
                            <ul>
                                <li>Graduate level, new course</li>
                            </ul>
                        </div>
                        <div class="entry-meta">Spring 2025</div>
                    </div>
                    <div class="entry teaching-entry">
                        <div class="entry-body">
                            <div class="role">
                                CSCI432 &#183; Web Programming
                            </div>
                            <ul>
                                <li>
                                    Senior undergrad-level course, new course
                                </li>
                            </ul>
                        </div>
                        <div class="entry-meta">Fall 2024, 2025</div>
                    </div>
                    <div class="entry teaching-entry">
                        <div class="entry-body">
                            <div class="role">
                                CSCI780 &#183; Computer Architecture Modeling
                                and Simulation
                            </div>
                            <ul>
                                <li>Ph.D.-level course, new course</li>
                            </ul>
                        </div>
                        <div class="entry-meta">Spring 2023</div>
                    </div>
                    <div class="entry teaching-entry">
                        <div class="entry-body">
                            <div class="role">
                                CSCI780 &#183; Data Visualization
                            </div>
                            <ul>
                                <li>Ph.D.-level course, new course</li>
                            </ul>
                        </div>
                        <div class="entry-meta">Spring 2022, 2024</div>
                    </div>
                    <div class="entry teaching-entry">
                        <div class="entry-body">
                            <div class="role">
                                CSCI780 &#183; Topics in Computer Architecture
                            </div>
                            <ul>
                                <li>Ph.D.-level course, new course</li>
                            </ul>
                        </div>
                        <div class="entry-meta">Spring 2021</div>
                    </div>
                    <div class="entry teaching-entry">
                        <div class="entry-body">
                            <div class="role">
                                CSCI141 &#183; Computational Problem Solving
                            </div>
                            <ul>
                                <li>
                                    Undergraduate's first Python programming
                                    course (1st - 2nd year)
                                </li>
                            </ul>
                        </div>
                        <div class="entry-meta">Fall 2020-2023</div>
                    </div>
                </div>
            </div>
            <div class="subsection">
                <h3>Teaching @ Northeastern University</h3>
                <div class="entry-list teaching-list">
                    <div class="entry teaching-entry">
                        <div class="entry-body">
                            <div class="role">
                                EECE2322 &#183; Fundamental Digital Design and
                                Computer Organization
                            </div>
                            <ul>
                                <li>
                                    Co-instructor. With Dr. Pereira da Silva
                                    Aloizio
                                </li>
                                <li>
                                    Intermediate-level undergraduate course
                                    (3rd year)
                                </li>
                            </ul>
                        </div>
                        <div class="entry-meta">Fall 2019</div>
                    </div>
                    <div class="entry teaching-entry">
                        <div class="entry-body">
                            <div class="role">
                                EECE2560 &#183; Fundamentals of Engineering
                                Algorithms
                            </div>
                            <ul>
                                <li>Instructor</li>
                                <li>
                                    Intermediate-level undergraduate course
                                    (3rd year)
                                </li>
                                <li>
                                    Redesigned the course (&quot;I have learned
                                    a lot in this course&quot;: 4.7 out of 5)
                                </li>
                                <li>Instructor effectiveness 4.4 out of 5</li>
                            </ul>
                        </div>
                        <div class="entry-meta">Spring 2018</div>
                    </div>
                    <div class="entry teaching-entry">
                        <div class="entry-body">
                            <div class="role">
                                EECE2160 &#183; Embedded Design Enabling
                                Robotics
                            </div>
                            <ul>
                                <li>Instructor</li>
                                <li>
                                    Intermediate-level undergraduate course
                                    (2nd year)
                                </li>
                                <li>Instructor effectiveness 4.6 out of 5</li>
                            </ul>
                        </div>
                        <div class="entry-meta">Fall 2017</div>
                    </div>
                </div>
            </div>
        </section>

        <section class="cv-section" id="mentees">
            <header class="section-header">
                <h2>Student Mentees</h2>
            </header>
            <h3>Ph.D. Students</h3>
            <div class="entry-list">
                <div class="entry mentee-entry">
                    <div class="entry-body">
                        <span class="publication-title">Yijia Shi</span>
                    </div>
                    <div class="entry-meta">
                        <div>William &amp; Mary</div>
                        <div>2024 - Present</div>
                    </div>
                </div>
                <div class="entry mentee-entry">
                    <div class="entry-body">
                        <span class="publication-title">Enze Xu</span>
                    </div>
                    <div class="entry-meta">
                        <div>William &amp; Mary</div>
                        <div>2024 - Present</div>
                    </div>
                </div>
                <div class="entry mentee-entry">
                    <div class="entry-body">
                        <span class="publication-title">Daoxuan Xu</span>
                        <div class="subtitle">Co-advised with Jie Ren</div>
                    </div>
                    <div class="entry-meta">
                        <div>William &amp; Mary</div>
                        <div>2023 - Present</div>
                    </div>
                </div>
                <div class="entry mentee-entry">
                    <div class="entry-body">
                        <span class="publication-title">Sabila Al Jannat</span>
                    </div>
                    <div class="entry-meta">
                        <div>William &amp; Mary</div>
                        <div>2022 - Present</div>
                    </div>
                </div>
                <div class="entry mentee-entry">
                    <div class="entry-body">
                        <span class="publication-title">Ying Li</span>
                        <div class="subtitle">Co-advised with Adwait Jog</div>
                    </div>
                    <div class="entry-meta">
                        <div>William &amp; Mary</div>
                        <div>2021 - Present</div>
                    </div>
                </div>
                <div class="entry mentee-entry">
                    <div class="entry-body">
                        <span class="publication-title">Chris Thames</span>
                        <div class="subtitle">
                            Part-time, with full-time job at NASA
                        </div>
                    </div>
                    <div class="entry-meta">
                        <div>William &amp; Mary</div>
                        <div>2020 - Present</div>
                    </div>
                </div>
            </div>
            <h3>Master Researchers</h3>
            <div class="entry-list">
                <div class="entry mentee-entry">
                    <div class="entry-body">
                        <span class="publication-title">Daoxuan Xu</span>
                    </div>
                    <div class="entry-meta">
                        <div>University of Florida</div>
                        <div>2022 - 2023</div>
                    </div>
                </div>
                <div class="entry mentee-entry">
                    <div class="entry-body">
                        <span class="publication-title">Yuhui Bao</span>
                    </div>
                    <div class="entry-meta">
                        <div>Northeastern University</div>
                        <div>2018 - 2020</div>
                    </div>
                </div>
            </div>
            <h3>Undergraduate Researchers</h3>
            <div class="entry-list">
                <div class="entry mentee-entry">
                    <div class="entry-body">
                        <span class="publication-title"
                            >Zhuoyan Zheng, Mengyang He, Pablo Ibarz, Aibo Li,
                            Yexi Zheng, Xuzhong Wang, Huizhi Zhao, Jeremy
                            Coonley</span
                        >
                    </div>
                    <div class="entry-meta">
                        <div>William &amp; Mary</div>
                    </div>
                </div>
                <div class="entry mentee-entry">
                    <div class="entry-body">
                        <span class="publication-title">Ali Mosallaei</span>
                    </div>
                    <div class="entry-meta">
                        <div>University of Michigan, Ann Arbor</div>
                    </div>
                </div>
                <div class="entry mentee-entry">
                    <div class="entry-body">
                        <span class="publication-title"
                            >Shaoyu Wang, Hang Yan, Chen Gong</span
                        >
                    </div>
                    <div class="entry-meta">
                        <div>
                            Huazhong University of Science &amp; Technology
                            (China)
                        </div>
                    </div>
                </div>
                <div class="entry mentee-entry">
                    <div class="entry-body">
                        <span class="publication-title"
                            >Ali Tolga Din&amp;ccedil;er</span
                        >
                    </div>
                    <div class="entry-meta">
                        <div>Istanbul Technical University (Turkey)</div>
                    </div>
                </div>
                <div class="entry mentee-entry">
                    <div class="entry-body">
                        <span class="publication-title">Xin Li</span>
                        <div class="subtitle">REU Student</div>
                    </div>
                    <div class="entry-meta">
                        <div>William &amp; Mary</div>
                    </div>
                </div>
            </div>
        </section>

        <section class="cv-section" id="media-coverage">
            <header class="section-header">
                <h2>Selected Media Coverage</h2>
            </header>
            <div class="entry-list">
                <div class="entry media-entry">
                    <div class="entry-body">
                        <strong>William &amp; Mary News</strong>
                        <div class="subtitle">
                            <a
                                href="https://news.wm.edu/2025/05/12/william-mary-professor-wins-nsf-career-award-to-study-computer-chip-performance/"
                                target="_blank"
                                rel="noreferrer"
                                >William &amp; Mary professor wins NSF CAREER
                                award to study computer chip performance; Sun
                                brings human-centered approach to computer
                                architecture</a
                            >
                        </div>
                    </div>
                    <div class="entry-meta">
                        <div>2025</div>
                    </div>
                </div>
                <div class="entry media-entry">
                    <div class="entry-body">
                        <strong>William &amp; Mary News</strong>
                        <div class="subtitle">
                            <a
                                href="https://news.wm.edu/2023/07/26/books-published-by-william-mary-faculty-in-2023/"
                                target="_blank"
                                rel="noreferrer"
                                >Books published by William &amp; Mary faculty
                                in 2023</a
                            >
                        </div>
                    </div>
                    <div class="entry-meta">
                        <div>2023</div>
                    </div>
                </div>
                <div class="entry media-entry">
                    <div class="entry-body">
                        <strong>FiveThirtyEight</strong>
                        <div class="subtitle">
                            <a
                                href="https://fivethirtyeight.com/features/the-datasets-were-looking-at-this-week-13/"
                                target="_blank"
                                rel="noreferrer"
                                >The Datasets We&#8217;re Looking At This Week</a
                            >
                            (The
                            <a
                                href="https://chip-dataset.vercel.app"
                                target="_blank"
                                rel="noreferrer">CHIP dataset</a
                            > is highlighted by the &#8220;Data Is Plural&#8221;
                            column.)
                        </div>
                    </div>
                    <div class="entry-meta">
                        <div>2022</div>
                    </div>
                </div>
                <div class="entry media-entry">
                    <div class="entry-body">
                        <strong>William &amp; Mary News</strong>
                        <div class="subtitle">
                            <a
                                href="https://www.wm.edu/news/stories/2022/misinformation-examination-how-trust-and-distrust-shift-during-covid-19.php"
                                target="_blank"
                                rel="noreferrer"
                                >Misinformation examination: How trust and
                                distrust shift during COVID-19</a
                            >
                        </div>
                    </div>
                    <div class="entry-meta">
                        <div>2022</div>
                    </div>
                </div>
                <div class="entry media-entry">
                    <div class="entry-body">
                        <strong>WYDaily</strong>
                        <div class="subtitle">
                            <a
                                href="https://wydaily.com/news/2021/12/15/wm-professor-helps-medical-experts-study-covid-19-with-gpus/"
                                target="_blank"
                                rel="noreferrer"
                                >W&amp;M Professor Helps Medical Experts Study
                                COVID-19 With GPUs</a
                            >
                        </div>
                    </div>
                    <div class="entry-meta">
                        <div>2021</div>
                    </div>
                </div>
                <div class="entry media-entry">
                    <div class="entry-body">
                        <strong>William &amp; Mary News</strong>
                        <div class="subtitle">
                            <a
                                href="https://www.wm.edu/news/stories/2021/sun-is-teaching-covid-19-researchers-how-to-use-high-performance-amd-computers.php"
                                target="_blank"
                                rel="noreferrer"
                                >Sun is Teaching COVID-19 Researchers How to
                                Use High-Performance AMD Computers</a
                            >
                        </div>
                    </div>
                    <div class="entry-meta">
                        <div>2021</div>
                    </div>
                </div>
                <div class="entry media-entry">
                    <div class="entry-body">
                        <strong>HiPEAC info 58</strong>
                        <div class="subtitle">
                            <a
                                href="https://www.hipeac.net/magazine/7152/"
                                target="_blank"
                                rel="noreferrer"
                                >MGPUSim announced at ISCA 2019</a
                            >
                        </div>
                    </div>
                    <div class="entry-meta">
                        <div>2019</div>
                    </div>
                </div>
                <div class="entry media-entry">
                    <div class="entry-body">
                        <strong
                            >News@Northeastern College of Engineering</strong
                        >
                        <div class="subtitle">
                            <a
                                href="https://coe.northeastern.edu/news/yifan-sun-and-nucar-research-lab-featured-in-hipeac-news/"
                                target="_blank"
                                rel="noreferrer"
                                >Yifan Sun and NUCAR Research Lab featured in
                                HiPEAC News</a
                            >
                        </div>
                    </div>
                    <div class="entry-meta">
                        <div>2019</div>
                    </div>
                </div>
                <div class="entry media-entry">
                    <div class="entry-body">
                        <strong>News@Northeastern</strong>
                        <div class="subtitle">
                            <a
                                href="https://news.northeastern.edu/2018/12/14/a-student-went-off-to-do-a-co-op-at-a-major-tech-firm-he-came-back-with-a-patent/?fbclid=IwAR1hRI8CoPk34xJ2jp0xAcG71p0cMSV-PEIu_C7yuJxWwHXSjmFxecMn1UY"
                                target="_blank"
                                rel="noreferrer"
                                >A Student Went off to Do a Co-op at a Major
                                Tech Firm. He Came Back With a Patent.</a
                            >
                        </div>
                    </div>
                    <div class="entry-meta">
                        <div>2018</div>
                    </div>
                </div>
                <div class="entry media-entry">
                    <div class="entry-body">
                        <strong>WIRED</strong>
                        <div class="subtitle">
                            <a
                                href="https://www.wired.com/2013/10/undersea/"
                                target="_blank"
                                rel="noreferrer"
                                >Finally, the Underwater We've All Been Waiting
                                For</a
                            >
                        </div>
                    </div>
                    <div class="entry-meta">
                        <div>2013</div>
                    </div>
                </div>
                <div class="entry media-entry">
                    <div class="entry-body">
                        <strong>NBC News</strong>
                        <div class="subtitle">
                            <a
                                href="https://www.nbcnews.com/technolog/deep-sea-internet-detect-tsunamis-spy-smugglers-discover-oil-8C11399875"
                                target="_blank"
                                rel="noreferrer"
                                >Deep-sea Internet to Detect Tsunamis, Spy on
                                Smugglers, and Discover Oil</a
                            >
                        </div>
                    </div>
                    <div class="entry-meta">
                        <div>2013</div>
                    </div>
                </div>
            </div>
        </section>

        <section class="cv-section" id="service">
            <header class="section-header">
                <h2>Service</h2>
            </header>
            <h3>Ph.D. Dissertation Committee</h3>
            <div class="entry-list">
                <div class="entry service-entry">
                    <div class="entry-body">
                        <strong>Lishan Yang</strong>
                        <div class="subtitle">
                            Joined GMU as Assistant Professor
                        </div>
                    </div>
                    <div class="entry-meta">
                        <div>William &amp; Mary</div>
                        <div>Defended Spring 2022</div>
                    </div>
                </div>
                <div class="entry service-entry">
                    <div class="entry-body">
                        <strong>Yuhui Bao</strong>
                        <div class="subtitle">First Job @ AMD Inc.</div>
                    </div>
                    <div class="entry-meta">
                        <div>Northeastern University</div>
                    </div>
                </div>
                <div class="entry service-entry">
                    <div class="entry-body">
                        <strong>Matin Raayai</strong>
                    </div>
                    <div class="entry-meta">
                        <div>Northeastern University</div>
                    </div>
                </div>
            </div>
            <h3>Master Thesis Committee</h3>
            <div class="entry-list">
                <div class="entry service-entry">
                    <div class="entry-body">
                        <strong>Jiangtao Kong</strong>
                        <div class="subtitle">
                            Continued Ph.D. study at William &amp; Mary
                        </div>
                    </div>
                    <div class="entry-meta">
                        <div>William &amp; Mary</div>
                        <div>Defended Spring 2023</div>
                    </div>
                </div>
            </div>
            <h3>Professional Organization Participation</h3>
            <div class="entry-list">
                <div class="entry service-entry">
                    <div class="entry-body">
                        <strong>Member</strong>
                        <div class="subtitle">
                            Technical Community on Microprogramming and
                            Microarchitecture (TCuARCH)
                        </div>
                    </div>
                    <div class="entry-meta">
                        <div>2025 - Present</div>
                    </div>
                </div>
            </div>
            <h3>Conference Organization</h3>
            <div class="entry-list">
                <div class="entry service-entry">
                    <div class="entry-body">
                        <strong>Local Organization Chair</strong>
                        <div class="subtitle">
                            The 17th NASA Formal Methods Symposium (NFM '25)
                        </div>
                    </div>
                    <div class="entry-meta">
                        <div>William &amp; Mary</div>
                        <div>2025</div>
                    </div>
                </div>
                <div class="entry service-entry">
                    <div class="entry-body">
                        <strong>Artifact Evaluation Chair</strong>
                        <div class="subtitle">
                            2025 IEEE International Symposium on Workload
                            Characterization (IISWC '25)
                        </div>
                    </div>
                    <div class="entry-meta">
                        <div>2025</div>
                    </div>
                </div>
                <div class="entry service-entry">
                    <div class="entry-body">
                        <strong>Workshop/Tutorial Chair</strong>
                        <div class="subtitle">
                            IEEE International Symposium on High-Performance
                            Computer Architecture (HPCA '23)
                        </div>
                    </div>
                    <div class="entry-meta">
                        <div>2023</div>
                    </div>
                </div>
            </div>
            <h3>Workshop Chairing</h3>
            <div class="entry-list">
                <div class="entry service-entry">
                    <div class="entry-body">
                        <strong>Chair</strong>
                        <div class="subtitle">
                            17th Workshop on General Purpose Processing Using
                            GPU (GPGPU '25)
                        </div>
                    </div>
                    <div class="entry-meta">
                        <div>2025</div>
                    </div>
                </div>
                <div class="entry service-entry">
                    <div class="entry-body">
                        <strong>Chair</strong>
                        <div class="subtitle">
                            2nd Workshop on Computer Architecture Modeling and
                            Simulation (CAMS '24)
                        </div>
                    </div>
                    <div class="entry-meta">
                        <div>2024</div>
                    </div>
                </div>
                <div class="entry service-entry">
                    <div class="entry-body">
                        <strong>Chair</strong>
                        <div class="subtitle">
                            16th Workshop on General Purpose Processing Using
                            GPU (GPGPU '24)
                        </div>
                    </div>
                    <div class="entry-meta">
                        <div>2024</div>
                    </div>
                </div>
                <div class="entry service-entry">
                    <div class="entry-body">
                        <strong>Chair</strong>
                        <div class="subtitle">
                            1st Workshop on Computer Architecture Modeling and
                            Simulation (CAMS '23)
                        </div>
                    </div>
                    <div class="entry-meta">
                        <div>2023</div>
                    </div>
                </div>
                <div class="entry service-entry">
                    <div class="entry-body">
                        <strong>Chair</strong>
                        <div class="subtitle">
                            15th Workshop on General Purpose Processing Using
                            GPU (GPGPU '23)
                        </div>
                    </div>
                    <div class="entry-meta">
                        <div>2023</div>
                    </div>
                </div>
                <div class="entry service-entry">
                    <div class="entry-body">
                        <strong>Chair</strong>
                        <div class="subtitle">
                            14th Workshop on General Purpose Processing Using
                            GPU (GPGPU '22)
                        </div>
                    </div>
                    <div class="entry-meta">
                        <div>2022</div>
                    </div>
                </div>
                <div class="entry service-entry">
                    <div class="entry-body">
                        <strong>Web Chair</strong>
                        <div class="subtitle">
                            6th Workshop on General Purpose Processing Using
                            GPU (GPGPU '16)
                        </div>
                    </div>
                    <div class="entry-meta">
                        <div>2016</div>
                    </div>
                </div>
            </div>
            <h3>Funding Agency Panelist</h3>
            <div class="entry-list">
                <div class="entry service-entry">
                    <div class="entry-body">
                        <strong>DOE Panelist</strong>
                        <div class="subtitle">
                            Office of Advanced Scientific Computing Research
                            (ASCR), Early Career Research Program (ECRP)
                        </div>
                    </div>
                    <div class="entry-meta">
                        <div>2025</div>
                    </div>
                </div>
                <div class="entry service-entry">
                    <div class="entry-body">
                        <strong>NSF Panelist</strong>
                        <div class="subtitle">
                            NSF Cyberinfrastructure for Sustained Scientific
                            Innovation (CSSI), Element
                        </div>
                    </div>
                    <div class="entry-meta">
                        <div>2022</div>
                    </div>
                </div>
            </div>
            <h3>Program Committee</h3>
            <div class="entry-list">
                <div class="entry service-entry">
                    <div class="entry-body">
                        HPCA '25
                        <div class="subtitle">
                            31st IEEE International Symposium on
                            High-Performance Computer Architecture
                        </div>
                    </div>
                    <div class="entry-meta">
                        <div>2025</div>
                    </div>
                </div>
                <div class="entry service-entry">
                    <div class="entry-body">
                        CF '24
                        <div class="subtitle">
                            21st ACM International Conference on Computing
                            Frontiers
                        </div>
                    </div>
                    <div class="entry-meta">
                        <div>2024</div>
                    </div>
                </div>
                <div class="entry service-entry">
                    <div class="entry-body">
                        HPCA '24
                        <div class="subtitle">
                            30th IEEE International Symposium on
                            High-Performance Computer Architecture
                        </div>
                    </div>
                    <div class="entry-meta">
                        <div>2024</div>
                    </div>
                </div>
                <div class="entry service-entry">
                    <div class="entry-body">
                        AccML '24
                        <div class="subtitle">
                            6th Workshop on Accelerated Machine Learning
                        </div>
                    </div>
                    <div class="entry-meta">
                        <div>2024</div>
                    </div>
                </div>
                <div class="entry service-entry">
                    <div class="entry-body">
                        ICCD '24
                        <div class="subtitle">
                            42nd IEEE International Conference on Computer
                            Design
                        </div>
                    </div>
                    <div class="entry-meta">
                        <div>2024</div>
                    </div>
                </div>
                <div class="entry service-entry">
                    <div class="entry-body">
                        ICCD '23
                        <div class="subtitle">
                            41st IEEE International Conference on Computer
                            Design
                        </div>
                    </div>
                    <div class="entry-meta">
                        <div>2023</div>
                    </div>
                </div>
                <div class="entry service-entry">
                    <div class="entry-body">
                        CF '23
                        <div class="subtitle">
                            20th ACM International Conference on Computing
                            Frontiers
                        </div>
                    </div>
                    <div class="entry-meta">
                        <div>2023</div>
                    </div>
                </div>
                <div class="entry service-entry">
                    <div class="entry-body">
                        AccML '23
                        <div class="subtitle">
                            5th Workshop on Accelerated Machine Learning
                        </div>
                    </div>
                    <div class="entry-meta">
                        <div>2023</div>
                    </div>
                </div>
                <div class="entry service-entry">
                    <div class="entry-body">
                        HPCA '23
                        <div class="subtitle">
                            IEEE International Symposium on High-Performance
                            Computer Architecture
                        </div>
                    </div>
                    <div class="entry-meta">
                        <div>2023</div>
                    </div>
                </div>
                <div class="entry service-entry">
                    <div class="entry-body">
                        SBAC-PAD '22
                        <div class="subtitle">
                            International Symposium on Computer Architecture
                            and High Performance Computing
                        </div>
                    </div>
                    <div class="entry-meta">
                        <div>2022</div>
                    </div>
                </div>
                <div class="entry service-entry">
                    <div class="entry-body">
                        ICCD '22
                        <div class="subtitle">
                            40th IEEE International Conference on Computer
                            Design
                        </div>
                    </div>
                    <div class="entry-meta">
                        <div>2022</div>
                    </div>
                </div>
                <div class="entry service-entry">
                    <div class="entry-body">
                        AccML '22
                        <div class="subtitle">
                            4th Workshop on Accelerated Machine Learning
                        </div>
                    </div>
                    <div class="entry-meta">
                        <div>2022</div>
                    </div>
                </div>
                <div class="entry service-entry">
                    <div class="entry-body">
                        SBAC-PAD '21
                        <div class="subtitle">
                            IEEE International Symposium on Computer
                            Architecture and High Performance Computing
                        </div>
                    </div>
                    <div class="entry-meta">
                        <div>2021</div>
                    </div>
                </div>
                <div class="entry service-entry">
                    <div class="entry-body">
                        ICCD '21
                        <div class="subtitle">
                            40th IEEE International Conference on Computer
                            Design
                        </div>
                    </div>
                    <div class="entry-meta">
                        <div>2021</div>
                    </div>
                </div>
                <div class="entry service-entry">
                    <div class="entry-body">
                        ICCD '20
                        <div class="subtitle">
                            39th IEEE International Conference on Computer
                            Design
                        </div>
                    </div>
                    <div class="entry-meta">
                        <div>2020</div>
                    </div>
                </div>
                <div class="entry service-entry">
                    <div class="entry-body">
                        GPGPU '20
                        <div class="subtitle">
                            13th Workshop on General Purpose Processing Using
                            GPU
                        </div>
                    </div>
                    <div class="entry-meta">
                        <div>2020</div>
                    </div>
                </div>
            </div>
            <h3>Journal Reviewer</h3>
            <div class="entry-list">
                <div class="entry service-entry">
                    <div class="entry-body">
                        TACO
                        <div class="subtitle">
                            ACM Transactions on Architecture and Code
                            Optimization
                        </div>
                    </div>
                    <div class="entry-meta">
                        <div>2025</div>
                    </div>
                </div>
                <div class="entry service-entry">
                    <div class="entry-body">
                        TCC
                        <div class="subtitle">
                            IEEE Transactions on Cloud Computing
                        </div>
                    </div>
                    <div class="entry-meta">
                        <div>2024</div>
                    </div>
                </div>
                <div class="entry service-entry">
                    <div class="entry-body">
                        JPDC
                        <div class="subtitle">
                            Journal of Parallel and Distributed Computing
                        </div>
                    </div>
                    <div class="entry-meta">
                        <div>2023</div>
                    </div>
                </div>
                <div class="entry service-entry">
                    <div class="entry-body">
                        TACO
                        <div class="subtitle">
                            ACM Transactions on Architecture and Code
                            Optimization
                        </div>
                    </div>
                    <div class="entry-meta">
                        <div>2023</div>
                    </div>
                </div>
                <div class="entry service-entry">
                    <div class="entry-body">
                        TOMPECS
                        <div class="subtitle">
                            ACM Transactions on Modeling and Performance
                            Evaluation of Computing Systems
                        </div>
                    </div>
                    <div class="entry-meta">
                        <div>2022</div>
                    </div>
                </div>
                <div class="entry service-entry">
                    <div class="entry-body">
                        TACO
                        <div class="subtitle">
                            ACM Transactions on Architecture and Code
                            Optimization
                        </div>
                    </div>
                    <div class="entry-meta">
                        <div>2022</div>
                    </div>
                </div>
                <div class="entry service-entry">
                    <div class="entry-body">
                        FGCS
                        <div class="subtitle">
                            Future Generation Computer Systems
                        </div>
                    </div>
                    <div class="entry-meta">
                        <div>2022</div>
                    </div>
                </div>
                <div class="entry service-entry">
                    <div class="entry-body">
                        TPDS
                        <div class="subtitle">
                            IEEE Transactions on Parallel and Distributed
                            Systems
                        </div>
                    </div>
                    <div class="entry-meta">
                        <div>2022</div>
                    </div>
                </div>
                <div class="entry service-entry">
                    <div class="entry-body">IEEE Micro</div>
                    <div class="entry-meta">
                        <div>2022</div>
                    </div>
                </div>
                <div class="entry service-entry">
                    <div class="entry-body">
                        TPDS
                        <div class="subtitle">
                            IEEE Transactions on Parallel and Distributed
                            Systems
                        </div>
                    </div>
                    <div class="entry-meta">
                        <div>2021</div>
                    </div>
                </div>
                <div class="entry service-entry">
                    <div class="entry-body">
                        TACO
                        <div class="subtitle">
                            ACM Transactions on Architecture and Code
                            Optimization
                        </div>
                    </div>
                    <div class="entry-meta">
                        <div>2021</div>
                    </div>
                </div>
                <div class="entry service-entry">
                    <div class="entry-body">
                        CAL
                        <div class="subtitle">
                            IEEE Computer Architecture Letters
                        </div>
                    </div>
                    <div class="entry-meta">
                        <div>2021</div>
                    </div>
                </div>
                <div class="entry service-entry">
                    <div class="entry-body">
                        JPDC
                        <div class="subtitle">
                            Journal of Parallel and Distributed Computing
                        </div>
                    </div>
                    <div class="entry-meta">
                        <div>2020</div>
                    </div>
                </div>
                <div class="entry service-entry">
                    <div class="entry-body">
                        TPDS
                        <div class="subtitle">
                            IEEE Transactions on Parallel and Distributed
                            Systems
                        </div>
                    </div>
                    <div class="entry-meta">
                        <div>2020</div>
                    </div>
                </div>
                <div class="entry service-entry">
                    <div class="entry-body">
                        TOC
                        <div class="subtitle">
                            IEEE Transactions on Computers
                        </div>
                    </div>
                    <div class="entry-meta">
                        <div>2020</div>
                    </div>
                </div>
                <div class="entry service-entry">
                    <div class="entry-body">
                        TACO
                        <div class="subtitle">
                            ACM Transactions on Architecture and Code
                            Optimization
                        </div>
                    </div>
                    <div class="entry-meta">
                        <div>2020</div>
                    </div>
                </div>
            </div>
            <h3>External Review Committee / Ad-hoc Reviewer</h3>
            <div class="entry-list">
                <div class="entry service-entry">
                    <div class="entry-body">
                        ISPASS '25
                        <div class="subtitle">
                            IEEE International Symposium on Performance
                            Analysis of Systems and Software
                        </div>
                    </div>
                    <div class="entry-meta">
                        <div>2025</div>
                    </div>
                </div>
                <div class="entry service-entry">
                    <div class="entry-body">
                        ISCA '24
                        <div class="subtitle">
                            International Symposium on Computer Architecture
                            (External Review Committee)
                        </div>
                    </div>
                    <div class="entry-meta">
                        <div>2024</div>
                    </div>
                </div>
                <div class="entry service-entry">
                    <div class="entry-body">
                        PacificVis '24
                        <div class="subtitle">
                            IEEE Pacific Visualization Symposium (Ad-hoc
                            Reviewer)
                        </div>
                    </div>
                    <div class="entry-meta">
                        <div>2024</div>
                    </div>
                </div>
            </div>
            <h3>William &amp; Mary Undergraduate Advising</h3>
            <div class="entry-list">
                <div class="entry service-entry">
                    <div class="entry-body">
                        Pre-Major Advisor
                        <div class="subtitle">7 students</div>
                    </div>
                    <div class="entry-meta">
                        <div>2025 - 2026</div>
                    </div>
                </div>
                <div class="entry service-entry">
                    <div class="entry-body">
                        Pre-Major Advisor
                        <div class="subtitle">7 students</div>
                    </div>
                    <div class="entry-meta">
                        <div>2024 - 2025</div>
                    </div>
                </div>
                <div class="entry service-entry">
                    <div class="entry-body">
                        CS Major Advisor
                        <div class="subtitle">4 students</div>
                    </div>
                    <div class="entry-meta">
                        <div>2023 - 2024</div>
                    </div>
                </div>
                <div class="entry service-entry">
                    <div class="entry-body">
                        Prem-Major Advisor
                        <div class="subtitle">8 students</div>
                    </div>
                    <div class="entry-meta">
                        <div>2023 - 2024</div>
                    </div>
                </div>
                <div class="entry service-entry">
                    <div class="entry-body">
                        CS Major Advisor
                        <div class="subtitle">1 student</div>
                    </div>
                    <div class="entry-meta">
                        <div>2022 - 2023</div>
                    </div>
                </div>
                <div class="entry service-entry">
                    <div class="entry-body">
                        Pre-Major Advisor
                        <div class="subtitle">10 students</div>
                    </div>
                    <div class="entry-meta">
                        <div>2022 - 2023</div>
                    </div>
                </div>
                <div class="entry service-entry">
                    <div class="entry-body">
                        CS Major Advisor
                        <div class="subtitle">1 student</div>
                    </div>
                    <div class="entry-meta">
                        <div>2022 - 2023</div>
                    </div>
                </div>
                <div class="entry service-entry">
                    <div class="entry-body">
                        Pre-Major Advisor
                        <div class="subtitle">6 students</div>
                    </div>
                    <div class="entry-meta">
                        <div>2021 - 2022</div>
                    </div>
                </div>
            </div>
            <h3>William &amp; Mary University-Wide Committee</h3>
            <div class="entry-list">
                <div class="entry service-entry">
                    <div class="entry-body">
                        Member
                        <div class="subtitle">
                            Generative AI University Teaching &amp; Learning
                            Project (UTLP)
                        </div>
                    </div>
                    <div class="entry-meta">
                        <div>2023 - 2024</div>
                    </div>
                </div>
                <div class="entry service-entry">
                    <div class="entry-body">
                        Member
                        <div class="subtitle">
                            S. Laurie Sanderson Awards for Excellence in
                            Undergraduate Mentoring Committee
                        </div>
                    </div>
                    <div class="entry-meta">
                        <div>2022 - 2023</div>
                    </div>
                </div>
                <div class="entry service-entry">
                    <div class="entry-body">
                        Member
                        <div class="subtitle">
                            Research Computing Advisory Committee
                        </div>
                    </div>
                    <div class="entry-meta">
                        <div>2022 - 2023</div>
                    </div>
                </div>
                <div class="entry service-entry">
                    <div class="entry-body">
                        Member
                        <div class="subtitle">
                            S. Laurie Sanderson Awards for Excellence in
                            Undergraduate Mentoring Committee
                        </div>
                    </div>
                    <div class="entry-meta">
                        <div>2021 - 2022</div>
                    </div>
                </div>
            </div>
            <h3>William &amp; Mary Department-Level Committee</h3>
            <div class="entry-list">
                <div class="entry service-entry">
                    <div class="entry-body">
                        Member
                        <div class="subtitle">
                            Computer Science Undergraduate Curriculum
                        </div>
                    </div>
                    <div class="entry-meta">
                        <div>2025 - 2026</div>
                    </div>
                </div>
                <div class="entry service-entry">
                    <div class="entry-body">
                        Member
                        <div class="subtitle">
                            Computer Science Web Presence
                        </div>
                    </div>
                    <div class="entry-meta">
                        <div>2025 - 2026</div>
                    </div>
                </div>
                <div class="entry service-entry">
                    <div class="entry-body">
                        Chair
                        <div class="subtitle">
                            Computer Science Graduate Recruiting
                        </div>
                    </div>
                    <div class="entry-meta">
                        <div>2024 - 2025</div>
                    </div>
                </div>
                <div class="entry service-entry">
                    <div class="entry-body">
                        Member
                        <div class="subtitle">
                            Computer Science Web Presence
                        </div>
                    </div>
                    <div class="entry-meta">
                        <div>2024 - 2025</div>
                    </div>
                </div>
                <div class="entry service-entry">
                    <div class="entry-body">
                        Member
                        <div class="subtitle">Computer Science Colloquium</div>
                    </div>
                    <div class="entry-meta">
                        <div>2024 - 2025</div>
                    </div>
                </div>
                <div class="entry service-entry">
                    <div class="entry-body">
                        Member
                        <div class="subtitle">
                            Computer Science Graduate Recruiting
                        </div>
                    </div>
                    <div class="entry-meta">
                        <div>2023 - 2024</div>
                    </div>
                </div>
                <div class="entry service-entry">
                    <div class="entry-body">
                        Member
                        <div class="subtitle">
                            Computer Science Web Presence
                        </div>
                    </div>
                    <div class="entry-meta">
                        <div>2023 - 2024</div>
                    </div>
                </div>
                <div class="entry service-entry">
                    <div class="entry-body">
                        Member
                        <div class="subtitle">Computer Science Colloquium</div>
                    </div>
                    <div class="entry-meta">
                        <div>2023 - 2024</div>
                    </div>
                </div>
                <div class="entry service-entry">
                    <div class="entry-body">
                        Chair
                        <div class="subtitle">
                            Computer Science Web Presence
                        </div>
                    </div>
                    <div class="entry-meta">
                        <div>2022 - 2023</div>
                    </div>
                </div>
                <div class="entry service-entry">
                    <div class="entry-body">
                        Member
                        <div class="subtitle">
                            Data Science Faculty Recruitment
                        </div>
                    </div>
                    <div class="entry-meta">
                        <div>2022 - 2023</div>
                    </div>
                </div>
                <div class="entry service-entry">
                    <div class="entry-body">
                        Member
                        <div class="subtitle">Computer Science Colloquium</div>
                    </div>
                    <div class="entry-meta">
                        <div>2022 - 2023</div>
                    </div>
                </div>
                <div class="entry service-entry">
                    <div class="entry-body">
                        Chair
                        <div class="subtitle">
                            Computer Science Graduate Admission
                        </div>
                    </div>
                    <div class="entry-meta">
                        <div>2022 - 2023</div>
                    </div>
                </div>
                <div class="entry service-entry">
                    <div class="entry-body">
                        Member
                        <div class="subtitle">
                            Computer Science Graduate Recruiting
                        </div>
                    </div>
                    <div class="entry-meta">
                        <div>2022 - 2023</div>
                    </div>
                </div>
                <div class="entry service-entry">
                    <div class="entry-body">
                        Member
                        <div class="subtitle">Computer Science System</div>
                    </div>
                    <div class="entry-meta">
                        <div>2022 - 2023</div>
                    </div>
                </div>
                <div class="entry service-entry">
                    <div class="entry-body">
                        Member
                        <div class="subtitle">
                            Computer Science Web Presence
                        </div>
                    </div>
                    <div class="entry-meta">
                        <div>2021 - 2022</div>
                    </div>
                </div>
                <div class="entry service-entry">
                    <div class="entry-body">
                        Member
                        <div class="subtitle">Computer Science Curriculum</div>
                    </div>
                    <div class="entry-meta">
                        <div>2021 - 2022</div>
                    </div>
                </div>
            </div>
        </section>
    </main>

    <div class="floating-actions" aria-label="page controls">
        <button type="button" class="action-button" on:click={scrollToTop}>
            Back to Top
        </button>
        <button type="button" class="action-button" on:click={triggerPrint}>
            Download PDF
        </button>
    </div>
</div>

<style>
    :global(body) {
        margin: 0;
        background: #e9eef3;
        font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
        color: #111;
        font-size: 0.85rem;
        line-height: 1.5;
    }

    .cv-container {
        max-width: 850px;
        min-height: 11in;
        margin: 1.5rem auto;
        background: #fff;
        padding: 80px 80px 80px 80px;
        box-shadow: 0 14px 36px rgba(0, 0, 0, 0.12);
        box-sizing: border-box;
    }

    .cv-header {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        border-bottom: 3px solid #1d2f4b;
        padding-bottom: 1.2rem;
        margin-bottom: 1.6rem;
        gap: 1.5rem;
    }

    .cv-header h1 {
        font-size: 2.4rem;
        letter-spacing: 0.03em;
        margin: 0;
        color: #1d2f4b;
    }

    .tagline {
        margin: 0.4rem 0 0;
        font-size: 0.9rem;
        color: #334;
    }

    .contact {
        text-align: right;
        font-size: 0.85rem;
        line-height: 1.4;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        gap: 0.25rem;
    }

    .contact-item {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: 0.35rem;
    }

    .contact-icon {
        width: 16px;
        height: 16px;
        opacity: 0.85;
    }

    .contact a {
        color: inherit;
        text-decoration: none;
        border-bottom: 1px solid rgba(29, 47, 75, 0.35);
    }

    main {
        display: flex;
        flex-direction: column;
        gap: 1.45rem;
    }

    .floating-actions {
        position: fixed;
        right: 1.5rem;
        bottom: 1.5rem;
        display: flex;
        flex-direction: column;
        gap: 0.6rem;
        z-index: 999;
    }

    .action-button {
        background: #1d2f4b;
        color: #fff;
        border: none;
        border-radius: 999px;
        padding: 0.55rem 1.1rem;
        font-size: 0.85rem;
        letter-spacing: 0.04em;
        cursor: pointer;
        box-shadow: 0 6px 16px rgba(0, 0, 0, 0.18);
        transition:
            transform 0.2s ease,
            box-shadow 0.2s ease,
            background 0.2s ease;
    }

    .action-button:hover,
    .action-button:focus {
        transform: translateY(-1px);
        box-shadow: 0 10px 24px rgba(0, 0, 0, 0.2);
        background: #243f68;
        outline: none;
    }

    .action-button:focus-visible {
        outline: 2px solid rgba(29, 47, 75, 0.4);
        outline-offset: 3px;
    }

    .cv-section {
        position: relative;
    }

    .section-header {
        margin-bottom: 1rem;
    }

    .section-intro {
        margin-bottom: 0.9rem;
    }

    .subsection {
        margin-top: 1.4rem;
    }

    .subsection:first-of-type {
        margin-top: 0;
    }

    .entry-list {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
    }

    section {
        position: relative;
    }

    /* section::before {
        content: '';
        position: absolute;
        left: -0.5in;
        top: 0.2rem;
        width: 0.18in;
        height: 0.18in;
        background: #1d2f4b;
    } */

    h2 {
        font-size: 2.12rem;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        margin: 1.4rem 0 0.8rem 0;
        color: #1d2f4b;
        border-bottom: 1px solid rgba(29, 47, 75, 0.35);
        font-weight: 100;
    }

    h3 {
        font-size: 1.2rem;
        /* letter-spacing: 0.12em; */
        /* text-transform: uppercase; */
        margin: 1rem 0 0.6rem;
        color: #243654;
        font-weight: 500;
        text-decoration: underline;
    }

    .entry {
        display: grid;
        grid-template-columns: minmax(0, 1fr) auto;
        gap: 0.75rem;
        padding: 0.15rem 0;
    }

    .entry-body {
        display: flex;
        flex-direction: column;
        gap: 0.15rem;
    }

    .entry-header {
        font-weight: 600;
        color: #111;
    }

    .role {
        font-weight: 600;
        color: #111;
    }

    .affiliation {
        font-size: 0.9rem;
        color: #333;
    }

    .entry-meta {
        text-align: right;
        font-size: 0.82rem;
        color: #333;
    }

    ul,
    ol {
        margin: 0.3rem 0 0.6rem 1.2rem;
        padding: 0;
    }

    li {
        margin-bottom: 0.25rem;
    }

    .entry-body {
        margin-top: 0.2rem;
    }

    .publication-title {
        /* color: #1d2f4b; */
        font-weight: 700;
    }

    .self-name {
        text-decoration: underline;
        text-decoration-thickness: 2px;
        text-decoration-color: #1d2f4b;
        /* font-weight: 600; */
    }

    .wm-advisee {
        text-decoration-line: underline;
        text-decoration-style: wavy;
        text-decoration-color: #1d2f4b;
    }

    @media screen and (max-width: 900px) {
        .cv-container {
            margin: 0;
            min-height: auto;
            padding: 1.5rem;
            box-shadow: none;
        }

        .cv-header {
            flex-direction: column;
            text-align: left;
            align-items: flex-start;
        }

        .contact {
            text-align: left;
        }

        section::before {
            left: -0.4rem;
        }

        .entry {
            grid-template-columns: 1fr;
        }

        .entry-meta {
            text-align: left;
        }
    }

    @media print {
        @page {
            size: letter;
            margin: 0.7in;
        }

        :global(body) {
            background: #fff;
            font-size: 0.88rem;
            margin: 0;
        }

        .cv-container {
            box-shadow: none;
            margin: 0;
            width: 100%;
            max-width: none;
            padding: 0;
            page-break-inside: avoid;
        }

        .floating-actions {
            display: none !important;
        }

        section::before {
            left: -0.5in;
        }

        a {
            color: inherit;
            text-decoration: none;
        }

        .cv-header {
            border-bottom-width: 2px;
        }
    }
</style>
