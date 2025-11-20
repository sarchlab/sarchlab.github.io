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
            role="Assistant Professor"
            email="ysun25@wm.edu"
        >
            <div><b>Office:</b> McGlothlin-Street Hall 117</div>
        </Member>
    </div>

    <h2 class="sec-title">Ph.D. Student</h2>
    <div class="person-container">
        <Member
            name="Ying Li"
            profile_img="/yingli_photo.jpg"
            link="https://yingliphd.com/#about_me"
            role="Ph.D. Candidate"
            email="yli81@wm.edu"
        />

        <Member
            name="Chris Thames"
            profile_img="/chris_thames.jpeg"
            link=""
            role="Part-Time Ph.D. Candidate"
            email="dcthames@wm.edu"
        />

        <Member
            name="Sabila Al Jannat"
            profile_img="/sabila_profile.jpeg"
            link="https://www.linkedin.com/in/sabila-al-jannat-69826718b"
            role="Ph.D. Candidate"
            email="sajannat@wm.edu"
        />

        <Member
            name="Daoxuan Xu"
            profile_img="/daoxuan.jpg"
            link="https://www.linkedin.com/in/%E9%81%93%E7%85%8A-%E5%BE%90-23223323b/"
            role="Ph.D. Candidate"
            email="dxu05@wm.edu"
        >
            <div>
                Co-advised with <a href="https://jren73.github.io/">Jie Ren</a>
            </div>
        </Member>

        <Member
            name="Enze Xu"
            profile_img="/enze.jpg"
            link="https://xuenze.com/"
            role="Ph.D. Student"
            email="exu03@wm.edu"
        />

        <Member
            name="Yijia Shi"
            profile_img=""
            link=""
            role="Ph.D. Student"
            email="yshi16@wm.edu"
        />
    </div>

    <h2 class="sec-title">Undergraduate Researcher</h2>
    <div class="person-container">
        <Member
            name="Xuzhong Wang"
            profile_img="/xuzhong.jpeg"
            link=""
            role="Undergraduate Researcher"
            date="2024/5 -"
            email="xwang58@wm.edu"
        />

        <Member
            name="Huizhi Zhao"
            profile_img=""
            link=""
            role="Undergraduate Researcher"
            date="2024/6 -"
            email="hzhao10@wm.edu"
        />

        <Member
            name="Jeremy Coonley"
            role="Undergraduate Researcher"
            date="2025/4 -"
            email="jmcoonley@wm.edu"
        />
    </div>

    <h2 class="sec-title">External Research Interns</h2>
    <div class="person-container lightweight">
        <Member
            name="Bohan Cui"
            variant="lightweight"
            date="2023/7 -"
            affiliation="Nanjing University"
        />

        <Member
            name="Yuanhuan Deng"
            variant="lightweight"
            date="2024/4 -"
            affiliation="Brandeis University"
        />

        <Member
            name="Shiyuan Li"
            variant="lightweight"
            date="2024/7 -"
            affiliation="Oregon State University"
        />

        <Member name="Kaiyan Ma" variant="lightweight" date="2024/7 -" />

        <Member
            name="Yang Yu"
            variant="lightweight"
            date="2025/2 -"
            affiliation="Eindhoven University of Technology"
        />
    </div>

    <h2 class="sec-title">Past Members</h2>

    <h3 class="mt-5 mb-2">Undergraduate Researchers</h3>
    <div class="person-container extra-lightweight">
        <Member
            name="Zhuoyan Zheng"
            profile_img="/zhuoyan_profile.jpg"
            link="https://www.linkedin.com/in/%E5%8D%93%E5%A6%8D-%E9%83%91-339495224/"
            role="Undergraduate Researcher"
            date="2022/9 - 2024/8"
            email="zzheng11@wm.edu"
            variant="extra-lightweight"
        />

        <Member
            name="Mengyang He"
            profile_img="/mengyang.jpeg"
            link=""
            role="Undergraduate Researcher"
            date="2023/9 - 2025/6"
            email="mhe03@wm.edu"
            variant="extra-lightweight"
        />

        <Member
            name="Pablo Ibarz"
            profile_img=""
            link=""
            role="Undergraduate Researcher"
            date="2023/9 - 2025/9"
            email="pjibarz@wm.edu"
            variant="extra-lightweight"
        />

        <Member
            name="Aibo Li"
            profile_img="/aibo.jpg"
            link=""
            role="Undergraduate Researcher"
            date="2023/11 - 2025/8"
            email="ali14@wm.edu"
            variant="extra-lightweight"
        />

        <Member
            name="Yexi Zheng"
            profile_img="/yexi_zheng.jpg"
            link="https://www.linkedin.com/in/yexi-zheng-201894225/"
            role="Undergraduate Researcher"
            date="2023/11 - 2024/10"
            email="yzheng10@wm.edu"
            variant="extra-lightweight"
        />
    </div>

    <h3 class="mt-5 mb-2">External Research Interns</h3>
    <div class="person-container extra-lightweight">
        <Member
            name="Yan Hang"
            variant="extra-lightweight"
            date="2021/5 - 2023/8"
            affiliation="Huazhong U. of Sci. and Tech."
            description="Yan led the development Vis4Mesh and published the
            paper <i
                >Visual Exploratory Analysis for Designing Large-Scale
                Network-on-Chip Architectures: A Domain Expert-Led Design Study</i
            > as a co-first-author."
        />

        <Member
            name="Ali Mosallaei"
            variant="extra-lightweight"
            date="2021/5 - 2023/12"
            affiliation="University of Michigan"
            description="Ali worked on the developement and evaluation of AkitaRTM, leading to a first-author publication at MICRO '24. Ali also initiated project Yuzawa, laying out the technical foundations."
        />

        <Member
            name="Shaoyu Wang"
            variant="extra-lightweight"
            date="2022/3 - 2024/8"
            affiliation="Huazhong U. of Sci. and Tech."
            description="Shaoyu joined the development Vis4Mesh with Hang and led the user evaluation of Vis4Mesh. He published the paper <i>Visual Exploratory Analysis for Designing Large-Scale Network-on-Chip Architectures: A Domain Expert-Led Design Study</i> as a co-first-author."
        />

        <Member
            name="Yuchao Su"
            variant="extra-lightweight"
            date="2023/8 - 2024/8"
            affiliation="North Carolina State University"
        />

        <Member
            name="Bei Pei"
            variant="extra-lightweight"
            date="2023/8 - 2024/8"
            affiliation="University of California, San Diego"
        />

        <Member
            name="Jijie Zhou"
            variant="extra-lightweight"
            date="2023/11 - 2024/11"
            affiliation="University of California, San Diego"
        />

        <Member
            name="Chen Gong"
            variant="extra-lightweight"
            date="2023/4 - 2025/3"
            affiliation="Huazhong U. of Sci. and Tech."
        />

        <Member
            name="Yuwei Sun"
            variant="extra-lightweight"
            date="2024/7 - 2025/3"
            affiliation="New York University"
        />
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

    .person-container.extra-lightweight {
        @apply lg:grid-cols-1 xl:gap-0;
        @apply xl:grid-cols-1 xl:gap-0;
    }
</style>
