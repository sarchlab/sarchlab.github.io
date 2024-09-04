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
                    <b>Date:</b> November 2nd, 2024
                    <br />
                    <b>Time:</b> Saturday Morning
                    <br />
                    <b>Location:</b>
                    <a
                        href="https://www.google.com/maps/place/AT%26T+Hotel+and+Conference+Center/@30.2816295,-97.7404408,15z/data=!4m2!3m1!1s0x0:0x7ef52b1ad3321879?sa=X&ved=1t:2428&ictx=111"
                        >AT&T Hotel and Conference Center</a
                    >, Austin, Texas
                    <br />
                    <b>Room:</b> TBD
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
                        <a href="" target="&ldquo;blank&rdquo;"
                            >Sabila Al Jannat</a
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
        In this workshop, we are experimenting with a PhD and practitioner-led PC. 
        We believe that PhD students and practitioners are the end users of simulation 
        and performance modeling tools and hence, should know the tools the best. We will 
        report our experience during the workshop event.
        <ul>
            <li>Yuhui Bao (Northeastern University)</li>
            <li>Ying Li (William & Mary)</li>
            <li>Changxi Liu (National University of Singapore)</li>
            <li>Patrick Lavin (Sandia National Lab) </li>
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

    #schedule > tr {
        @apply border-b border-primary;
    }

    #schedule > tr > td:first-child {
        @apply w-3/12;
        /* @apply text-right; */
        @apply font-bold;
    }

    #schedule > tr > td {
        @apply py-2 px-4;
        @apply align-top;
    }

    #schedule > tr.sub-schedule > td {
        @apply pl-10;
        @apply font-normal;
    }

    #schedule > tr.sub-schedule > td > span.affliation {
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

    .collapse-opener {
        cursor: pointer;
        display: flex;
        align-items: center;
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
