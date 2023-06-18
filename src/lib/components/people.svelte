<script lang="ts">
</script>

<div>
    <h2 class="sec-title">Faculty</h2>
    <div class="person-container">
        <div class="person-card">
            <img src="yifan_profile.png" alt="Profile of Yifan Sun" />
            <div class="person-info">
                <div class="person-name">Yifan Sun</div>
                <div><b>Position:</b> Assistant Professor</div>
                <div><b>Office:</b> McGlothlin-Street Hall 117</div>
                <div><b>Email:</b> yifan@cs.wm.edu</div>
            </div>
        </div>
    </div>
    <h2 class="sec-title">Ph.D. Student</h2>
    <div class="person-container">
        <div class="person-card">
            <img src="ying_profile.png" alt="Profile of Ying Li" />
            <div class="person-info">
                <div class="person-name">Ying Li</div>
                <div><b>Position:</b> Ph.D. Candidate</div>
                <div><b>Email:</b> yli81@wm.edu</div>
            </div>
        </div>

        <div class="person-card">
            <img src="sabila_profile.jpeg" alt="Profile of Sabila Al Jannat" />
            <div class="person-info">
                <div class="person-name">Sabila Al Jannat</div>
                <div><b>Position:</b> Ph.D. Student</div>
                <div><b>Email:</b> sajannat@wm.edu</div>
            </div>
        </div>
    </div>
    <h2 class="sec-title">Undergraduate Researcher</h2>
    <div class="person-container">
        <div class="person-card">
            <img src="zhuoyan_profile.jpeg" alt="Profile of Zhuoyan Zheng" />
            <div class="person-info">
                <div class="person-name">Zhuoyan Zheng</div>
                <div><b>Position:</b> Undergraduate Student</div>
                <!-- <div><b>Email:</b> sajannat@wm.edu</div> -->
            </div>
        </div>
    </div>
</div>

<style lang="postcss">
    .person-container {
        @apply grid;
        @apply xl:grid-cols-2 xl:gap-4;
    }

    .person-card {
        @apply flex flex-1;
        @apply border rounded-xl p-3 my-4;
        @apply text-left;
    }

    .person-info {
        @apply flex flex-col text-left;
    }

    .person-card img {
        @apply flex-initial rounded-full h-24 w-24 ml-2 mr-8 inline-block;
    }

    .person-name {
        @apply text-2xl font-semibold;
    }
</style>
