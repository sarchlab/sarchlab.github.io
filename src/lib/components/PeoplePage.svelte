<script lang="ts">
    import Member from './member.svelte'
</script>

<div>
    <h2 class="sec-title">Faculty</h2>
    <div class="person-container">
        <Member name="Yifan Sun" profile_img="yifan_profile.png">
            <div><b>Position:</b> Assistant Professor</div>
            <div><b>Office:</b> McGlothlin-Street Hall 117</div>
            <div><b>Email:</b> yifan@cs.wm.edu</div>
        </Member>
    </div>

    <h2 class="sec-title">Ph.D. Student</h2>
    <div class="person-container">
        <Member name="Ying Li" profile_img="ying_profile.png">
            <div><b>Position:</b> Ph.D. Candidate</div>
            <div><b>Email:</b> yli81@wm.edu</div>
        </Member>

        <Member name="Sabila Al Jannat" profile_img="sabila_profile.jpeg">
            <div><b>Position:</b> Ph.D. Student</div>
            <div><b>Email:</b> sajannat@wm.edu</div>
        </Member>
    </div>

    <h2 class="sec-title">Undergraduate Researcher</h2>
    <div class="person-container">
        <Member name="Zhuoyan Zheng" profile_img="zhuoyan_profile.jpg ">
            <div><b>Position:</b> Undergraduate Student</div>
        </Member>
    </div>
</div>

<style lang="postcss">
    .person-container {
        @apply grid;
        @apply xl:grid-cols-2 xl:gap-4;
    }
</style>
