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

                    <b>Full Paper Due:</b> August 11, 2025 (Anywhere on Earth)
                    <br />
                    <b>Location:</b> Seoul, Korea
                    <br />
                    <b>Venue:</b> TBD
                    <br />
                    <b>Room:</b> TBD
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
                <b>Paper Due:</b> August 11, 2025 (Anywhere on Earth)
            </div>
            <div>
                <b>Author Notification:</b> September 8, 2025
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
                <a href="https://easychair.org/conferences/?conf=cams25full">https://easychair.org/conferences/?conf=cams25full</a>
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
                <a href="https://easychair.org/conferences/?conf=cams25toolrelease">https://easychair.org/conferences/?conf=cams25toolrelease</a>
            </div>
        </div>
    </div>
</div>

<div class="block">
    <div class="block-content">
        <h2 class="text-theme font-bold mb-6">Workshop Program</h2>
        <p>TBD</p>
    </div>
</div>

<div class="block">
    <div class="block-content">
        <h2 class="text-theme font-bold mb-6">Keynotes</h2>
        <p>TBD</p>
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
        <p>TBD</p>
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
