<script>
    import News from '$components/news.svelte'
    import Member from '$src/lib/components/member.svelte'
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
            profile_img="/yifan_profile.png"
            link="/syifan"
        >
            <div>Assistant Professor</div>
            <div><b>Office:</b> McGlothlin-Street Hall 117</div>
            <div><b>Email:</b> ysun25@wm.edu</div>
        </Member>
    </div>

    <h2 class="sec-title">Ph.D. Student</h2>
    <div class="person-container">
        <Member
            name="Ying Li"
            profile_img="/ying_profile.png"
            link="https://yingliphd.com/#about_me"
        >
            <div>Ph.D. Candidate</div>
            <div><b>Email:</b> yli81@wm.edu</div>
        </Member>

        <Member name="Chris Thames" profile_img="/chris_thames.jpeg" link="">
            <div>Part-Time Ph.D. Candidate</div>
            <div><b>Email:</b> dcthames@wm.edu</div>
        </Member>

        <Member
            name="Sabila Al Jannat"
            profile_img="/sabila_profile.jpeg"
            link="https://www.linkedin.com/in/sabila-al-jannat-69826718b"
        >
            <div>Ph.D. Candidate</div>
            <div><b>Email:</b> sajannat@wm.edu</div>
        </Member>

        <Member
            name="Daoxuan Xu"
            profile_img="/daoxuan.jpg"
            link="https://www.linkedin.com/in/%E9%81%93%E7%85%8A-%E5%BE%90-23223323b/"
        >
            <div>Ph.D. Student</div>
            <div><b>Email:</b> dxu05@wm.edu</div>
        </Member>

        <Member
            name="Enze Xu"
            profile_img="/enze.jpg"
            link="https://xuenze.com/"
        >
            <div>Ph.D. Student</div>
            <div><b>Email:</b> exu03@wm.edu</div>
        </Member>

        <Member name="Yijia Shi" profile_img="" link="">
            <div>Ph.D. Student</div>
            <div><b>Email:</b> yshi16@wm.edu</div>
        </Member>
    </div>

    <h2 class="sec-title">Undergraduate Researcher</h2>
    <div class="person-container">
        <Member
            name="Zhuoyan Zheng"
            profile_img="/zhuoyan_profile.jpg"
            link="https://www.linkedin.com/in/%E5%8D%93%E5%A6%8D-%E9%83%91-339495224/"
        >
            <div>Undergraduate Researcher</div>
            <div>2022/9 -</div>
            <div><b>Email:</b> zzheng11@wm.edu</div>
        </Member>

        <Member name="Mengyang He" profile_img="/mengyang.jpeg" link="">
            <div>Undergraduate Researcher</div>
            <div>2023/9 -</div>
            <div><b>Email:</b> mhe03@wm.edu</div>
        </Member>

        <Member name="Pablo Ibarz" profile_img="" link="">
            <div>Undergraduate Researcher</div>
            <div>2023/9 -</div>
            <div><b>Email:</b> pjibarz@wm.edu</div>
        </Member>

        <Member name="Aibo Li" profile_img="/aibo.jpg" link="">
            <div>Undergraduate Researcher</div>
            <div>2023/11 -</div>
            <div><b>Email:</b> ali14@wm.edu</div>
        </Member>

        <Member name="Xuzhong Wang" profile_img="" link="">
            <div>Undergraduate Researcher</div>
            <div>2024/5 -</div>
            <div><b>Email:</b> xwang58@wm.edu</div>
        </Member>

        <Member name="Huizhi Zhao" profile_img="" link="">
            <div>Undergraduate Researcher</div>
            <div>2024/6 -</div>
            <div><b>Email:</b> hzhao10@wm.edu</div>
        </Member>
    </div>

    <h2 class="sec-title">External Research Interns</h2>
    <div class="person-container lightweight">
        <Member name="Chen Gong" lightweight>
            <div>2023/4 -</div>
            <div>Huazhong U. of Sci. and Tech.</div>
        </Member>

        <Member name="Bohan Cui" lightweight>
            <div>2023/7 -</div>
            <div>Nanjing University</div>
        </Member>

        <Member name="Yuanhuan Deng" lightweight>
            <div>2024/4 -</div>
            <div>Brandeis University</div>
        </Member>

        <Member name="Shiyuan Li" lightweight>
            <div>2024/7 -</div>
            <div>Oregon State University</div>
        </Member>

        <Member name="Yuwei Sun" lightweight>
            <div>2024/7 -</div>
            <div>New York University</div>
        </Member>
    </div>

    <h2 class="sec-title">Past Members</h2>
    <div class="person-container">
        <Member name="Yan Hang" lightweight>
            <div>Research Intern</div>
            <div>2021/5 - 2023/8</div>
            <div>Huazhong U. of Sci. and Tech.</div>
            <div class="member-description">
                Yan led the development Vis4Mesh and published the paper <i
                    >Visual Exploratory Analysis for Designing Large-Scale
                    Network-on-Chip Architectures: A Domain Expert-Led Design
                    Study</i
                > as a co-first-author.
            </div>
        </Member>

        <Member name="Ali Mosallaei" lightweight>
            <div>Research Intern</div>
            <div>2021/5 - 2023/12</div>
            <div>University of Michigan</div>
            <div class="member-description">
                Ali worked on the developement and evaluation of AkitaRTM,
                leading to a first-author publication at MICRO '24. Ali also
                initiated project Yuzawa, laying out the technical foundations.
            </div>
        </Member>

        <Member name="Shaoyu Wang" lightweight>
            <div>Research Intern</div>
            <div>2022/3 - 2024/8</div>
            <div>Huazhong U. of Sci. and Tech.</div>
            <div class="member-description">
                Shaoyu joined the development Vis4Mesh with Hang and led the
                user evaluation of Vis4Mesh. He published the paper
                <i>
                    Visual Exploratory Analysis for Designing Large-Scale
                    Network-on-Chip Architectures: A Domain Expert-Led Design
                    Study
                </i>
                as a co-first-author.
            </div>
        </Member>

        <Member
            name="Yexi Zheng"
            profile_img="/yexi_zheng.jpg"
            link="https://www.linkedin.com/in/yexi-zheng-201894225/"
            lightweight
        >
            <div>Undergraduate Researcher</div>
            <div>2023/11 - 2024/10</div>
        </Member>

        <Member name="Yuchao Su" lightweight>
            <div>Research Intern</div>
            <div>2023/8 - 2024/8</div>
            <div>North Carolina State University</div>
        </Member>

        <Member name="Bei Pei" lightweight>
            <div>Research Intern</div>
            <div>2023/8 - 2024/8</div>
            <div>University of California, San Diego</div>
        </Member>

        <Member name="Jijie Zhou" lightweight>
            <div>Research Intern</div>
            <div>2023/11 - 2024/11</div>
        </Member>
    </div>
</div>
<div class="two-col-right">
    <News />
</div>

<style lang="postcss">
    .person-container {
        @apply grid;
        @apply lg:grid-cols-2 xl:gap-4;
    }

    .person-container.lightweight {
        @apply lg:grid-cols-2 xl:gap-0;
        @apply xl:grid-cols-3 xl:gap-0;
    }

    .member-description {
        @apply text-sm text-muted-foreground leading-4;
    }
</style>
