<script lang="js">
    import { onMount } from 'svelte';
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
        document.querySelectorAll(".collapse-opener").forEach((opener) => {
            opener.addEventListener("click", () => {
                const arrow = opener.querySelector(".collapse-arrow");
                const abstractContent = document.getElementById(opener.id.replace("toggle-opener", "abstract-content"));
                
                if (abstractContent.style.display === "none") {
                    abstractContent.style.display = "block";
                    arrow.textContent = "▼";
                } else {
                    abstractContent.style.display = "none";
                    arrow.textContent = "▶";
                }
            });
        });
    });
</script>

<svelte:head>
    <title>
        The 2nd Workshop on Computer Architecture Modeling and Simulation (CAMS 2024)
    </title>
    <link rel="icon" href="/akita_logo.png" />
</svelte:head>

<div class="block">
    <div class="block-content">
        <div
            class="flex flex-col items-center gap-5 md:py-10 md:flex-row md:gap-20"
        >
            <!-- <img src="akita_logo.png" alt="The Akita logo" class="w-40" /> -->
            <div>
                <h1 class="text-3xl font-bold mb-3">
                    The 2nd Workshop on Computer Architecture Modeling and Simulation (CAMS 2024)
                </h1>
                <div class="text-lg">
                    <b>Date:</b> TBD, 2024
                    <br />
                    <b>Time:</b> TBD (US Eastern Time)
                    <br />
                    <b>Location:</b>
                    <a
                        href="https://cwm.zoom.us/j/91386326093?pwd=Yk1EY2lCTEtwbGhrWTErYUltS3B2Zz09"
                    >
                        Virtual on Zoom
                    </a>
                    <br />
                    <a href="/akita/akita24/zoom">
                        Here is the full Zoom invitation
                    </a>
                </div>
                <a href="https://forms.gle/WKaeWkEubBLfYQeB7" class="button">
                    RSVP Here
                </a>
                <p class="text-baseline mt-4">
                    The modeling and simulation of computer architecture are fields of increasing interest 
                    and importance, especially with the emergence of new and diverse computing platforms 
                    such as quantum computers, neuromorphic systems, and advanced machine-learning hardware.
                    The goal of our workshop, "Computer Architecture Modeling and Simulation," 
                    is to provide a forum for researchers and practitioners to exchange ideas and 
                    discuss the latest advances in the field. The focus on modeling and simulation 
                    techniques is of vital importance to the ongoing advancements in microarchitecture, 
                    as these methods are essential tools for improving system performance, efficiency, 
                    and reliability. This workshop will provide a forum for sharing cutting-edge research, fostering innovative 
                    ideas, and stimulating interdisciplinary collaboration in these areas.
                </p>

                <p class="text-baseline mt-4">
                    The workshop will cover various aspects of computer architecture modeling and simulation, 
                    including but not limited to:
                </p>
                    
                <ul class="">
                    <li>
                        Simulator Development: Advances in design, theory,
                        implementation, and integration of
                        simulators.
                    </li>
                    <li>
                        Performance Modeling: Strategies for
                        prediction, validation, and the impact of architectural
                        features.
                    </li>
                    <li>
                        Power Modeling and Simulation: Methods 
                        for power-efficient design and power-performance 
                        trade-offs.
                    </li>
                    <li>
                        Tools and Studies Survey: Review and compare 
                        existing simulation tools and applications.
                    </li>
                    <li>
                        Scalable Simulation Techniques: Approaches 
                        for improving simulation scalability and efficiency.
                    </li>
                    <li>
                        Modeling and Simulation for Unconventional 
                        Architectures: Exploration of unique 
                        challenges and approaches for emerging and 
                        unconventional architectures.

                    </li>
                    <li>
                        Hardware-in-the-loop Simulation:
                        Advancements and case studies in
                        hardware-in-the-loop validation.
                    </li>
                    <li>
                        Modeling for Machine Learning (Sim4AI):
                        Architectural considerations and models for
                        hardware accelerators.
                    </li>
                    <li>
                        Validation Techniques: Approaches for 
                        validating the accuracy of simulation models.
                    </li>
                    <li>
                        Human-centered simulation methods:
                        Analysis, Visualization, Monitoring methods.
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
            The workshop invites submissions of original work in 
            the form of full papers (up to 6 pages, reference not 
            included) covering all aspects of computer architecture 
            modeling and simulation. Submissions will be peer-reviewed, 
            and accepted papers will be included in the workshop proceedings.
        </p>

        <!-- <p>
            Authors are invited to submit original research
            papers in the general area of computer
            architecture modeling and simulation. Topics
            include, but are not limited to:
        </p> -->

    </div>
</div>

<div class="block">
    <div class="block-content">
        <h2 class="text-theme font-bold mb-6">Important Dates</h2>
        <ul>
            <li>
                <!-- Papers due:
                <del>TBD, 2024 </del> TBD,
                2024 (Anywhere on Earth) -->
                Papers due: August 16, 2024 (Anywhere on Earth)
            </li>
            <li>Author Notification: September 15, 2024</li>
            <!-- <li>Final paper due: TBD, 2024 </li> -->
        </ul>
    </div>
</div>

<div class="block">
    <div class="block-content">
        <h2 class="text-theme font-bold mb-6">Submission Guidelines</h2>
        <p>
            Full paper submissions must be in PDF format for US
            letter-size or A4 paper. They must not exceed 6
            pages (excluding unlimited references) in standard
            ACM two-column conference format (review mode, with
            page numbers and both 9 or 10pt can be used). More
            concise papers with ideas clearly expressed are
            also welcomed. Authors can select if they want to
            reveal their identity in the submission. Templates
            for ACM format are available for Microsoft Word and
            LaTeX at this link.
            <a
                href="https://www.acm.org/publications/proceedings-template"
            >
                https://www.acm.org/publications/proceedings-template</a
            >
        </p>
        <p>
            We do not put the paper in the ACM or IEEE digital
            libraries. Therefore, the papers submitted to the
            event can be submitted to other venues without
            restrictions.
        </p>
        <p>
            At least one author of accepted papers is expected
            to present in person during the event. We
            understand the travel difficulty of the
            post-pandemia era. In extreme cases, we will allow
            remote or pre-recorded presentations.
        </p>
        <p>
            Submission Site:
            <a
                href="https://easychair.org/conferences/?conf=cams2023"
                >CAMS 2024</a
            >
        </p>
    </div>
</div>


<div class="block">
    <div class="block-content">
        <h2 class="text-theme font-bold mb-6">Workshop Organizers</h2>
        <table style="width: 100%">
            <col style="width: 33%" />
            <col style="width: 33%" />
            <col style="width: 33%" />
            <tr>
                <td>
                    <img
                        src="yifan.jpg"
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
                        target="&ldquo;blank&rdquo;"
                        >Yifan Sun</a
                    >
                </td>
                <td>
                    <a
                        href="https://www.comp.nus.edu.sg/~tcarlson/"
                        target="&ldquo;blank&rdquo;"
                        >Trevor E. Carlson</a
                    >
                </td>
                <td>
                    <a
                        href=""
                        target="&ldquo;blank&rdquo;"
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
        </table>
        <div>
            Please contact the organizers if you have any questions.
        </div>
    </div>
</div>


<div class="block">
    <div class="block-content">
        <h2 class="text-theme font-bold mb-6">Program Committee</h2>
        <ul>
            <li>Ying Li (William & Mary)</li>
            <li>
                Changxi Liu (National University of Singapore)
            </li>
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
