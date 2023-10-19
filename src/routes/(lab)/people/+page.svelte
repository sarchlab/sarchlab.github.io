<script>
    import News from '$components/news.svelte'
    import Member from '$src/lib/components/Member.svelte'
    import '$src/app.css'
</script>

<svelte:head>
    <title>Scalable Architecture Lab | People</title>
</svelte:head>

<div class="two-col-left">
    <h2 class="sec-title">Faculty</h2>
    <div class="person-container">
        <Member
            name="Yifan Sun"
            profile_img="yifan_profile.png"
            link="/syifan"
        >
            <div><b>Position:</b> Assistant Professor</div>
            <div><b>Office:</b> McGlothlin-Street Hall 117</div>
            <div><b>Email:</b> yifan@cs.wm.edu</div>
        </Member>
    </div>

    <h2 class="sec-title">Ph.D. Student</h2>
    <div class="person-container">
        <Member
            name="Ying Li"
            profile_img="ying_profile.png"
            link="https://yingliphd.com/#about_me"
        >
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
<div class="two-col-right">
    <News />
</div>

<style lang="postcss">
    .person-container {
        @apply grid;
        @apply lg:grid-cols-2 lg:gap-4;
    }
</style>
