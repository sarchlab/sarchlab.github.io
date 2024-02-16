<svelte:head>
    <title>
        The First Lightweight Community Workshop on Akita and MGPUSim (Akita24)
    </title>
</svelte:head>

<div class="block">
    <div class="block-content px-20 py-20">
        <div
            class="flex flex-col items-center gap-5 px-10 md:flex-row md:gap-20"
        >
            <img src="/akita_logo.png" alt="The Akita logo" class="w-40" />
            <div>
                <h1 class="text-3xl font-bold text-theme mb-3">
                    The first Lightweight Community Workshop on Akita and
                    MGPUSim
                </h1>
                <p class="text-lg">
                    <b class="text-theme">Date:</b> March 13, 2024
                    <br />
                    <b class="text-theme">Time:</b> 10:00am - 12:00am (US
                    Eastern Time)
                    <br />
                    <b class="text-theme">Location:</b> Zoom (Link TBA)
                </p>
                <p class="text-baseline">
                    Join our upcoming Akita Workshop, a dynamic forum for users
                    to present their projects, discuss challenges, and
                    articulate requirements. It also serves as a direct
                    communication channel between developers and users,
                    enhancing the Akita community experience.
                </p>
            </div>
        </div>
    </div>
</div>

<div class="block">
    <div class="block-content px-20 py-20">
        <h2 class="text-theme font-bold mb-6">Schedule</h2>
        <p class="mb-2">All time in US Eastern time.</p>
        <table id="schedule" class="w-full">
            <tr>
                <td>10:00 am -10:30 am</td>
                <td>
                    Report on Akita/MGPUSim Development and Roadmap <br />
                    Yifan Sun (William & Mary)
                </td>
            </tr>

            <tr>
                <td>10:30 am -11:15 am</td>
                <td> Lightning Talks [Detailed schedule TBD]</td>
            </tr>

            <tr>
                <td>11:15 am - 12:00 pm</td>
                <td>Round-Table Discussion</td>
            </tr>

            <tr>
                <td>12:00 pm and on</td>
                <td>Free Chat</td>
            </tr>
        </table>
    </div>
</div>

<div class="block">
    <div class="block-content px-20 py-20">
        <h2 class="text-theme font-bold mb-6">Organizer</h2>
        <ul>
            <li>
                <a href="https://sarchlab.org/syifan"> Yifan Sun </a> (William &
                Mary)
            </li>
            <li>
                <a href="https://kisaacs.github.io/">Katherine E Isaacs</a> (University
                of Utah)
            </li>
        </ul>
    </div>
</div>

<style lang="postcss">
    #schedule {
        @apply w-full;
        @apply border-t-2 border-b-2 border-theme;
    }

    #schedule > tr {
        @apply border-b border-theme;
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
</style>
