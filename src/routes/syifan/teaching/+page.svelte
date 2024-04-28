<script>
    import News from '$components/news.svelte'
    import '$src/app.css'
    import Course from './course.svelte'
</script>

<svelte:head>
    <title>Scalable Architecture Lab | Publication</title>
</svelte:head>

<div>
    <h2 class="sec-title">@ William & Mary</h2>
    <div class="mt-4 flex flex-col gap-4">
        <Course year="Fall 2024" title="CSCI432: Web Programming" />
        <Course
            year="Spring 2024"
            title="CSCI780: Data Visualization"
            link="https://syifan.notion.site/W-M-CSCI780-Spring-2024-Data-Visualization-4a27c979837e4e42ac7121e9b98a8f6b?pvs=4"
        />

        <Course
            year="Fall 2023"
            title="CSCI141: Computational Problem Solving"
            link="https://syifan.notion.site/W-M-CSCI141-Fall-23-Sec-02-Computational-Problem-Solving-06a5227d5c2c4926830fac017e395ae9?pvs=4"
        />

        <Course
            year="Spring 2023"
            title="CSCI780: Computer Architecture Modeling and Simulation"
            link="https://syifan.notion.site/W-M-CSCI780-01-Fall-22-Computer-Arch-Mdl-and-Sim-a5102523b841499dbbd0ff893f8495a6"
        />

        <Course
            year="Fall 2022"
            title="CSCI141: Computational Problem Solving"
            link="https://syifan.notion.site/W-M-CSCI141-Fall-2022-Sec-04-Computational-Problem-Solving-72e9156b0dae4708acc12629e748b80b"
        />

        <Course
            year="Spring 2022"
            title="CSCI780: Data Visualization"
            link="https://syifan.notion.site/W-M-CSCI780-Spring-2022-Data-Visualization-d7c3d75376224e7dbcf9cb20d30e05c2"
        />

        <Course
            year="Fall 2021"
            title="CSCI141: Computational Problem Solving"
            link="https://syifan.notion.site/W-M-CSCI141-Fall-2021-Sec-03-Computational-Problem-Solving-72e9156b0dae4708acc12629e748b80b"
        />

        <Course
            year="Spring 2021"
            title="CSCI780: Topics in Computer Science"
            link="https://www.notion.so/syifan/W-M-CSCI780-Spring-2020-Topics-in-Computer-Architecture-0271f98a5f6a491db11760d91c50df97"
        />

        <Course
            year="Fall 2020"
            title="CSCI141: Computational Problem Solving"
            link="https://www.notion.so/CSCI141-03-F20-eb0f31971271449f8bde703c587c057c"
        />
    </div>
    <h2 class="sec-title">@ Northeastern University</h2>
    <div class="mt-4 flex flex-col gap-4">
        <Course
            year="Fall 2019"
            title="EECE2322: Fundamental Digital Design and Computer Organization"
            description="Co-instruct with Dr. Aloizio P. Silva."
            link=""
        />

        <Course
            year="Spring 2018"
            title="EECE2560: Fundamentals of Engineering Algorithms"
            link=""
        />

        <Course
            year="Fall 2017"
            title="EECE2160: Embedded Design Enabling Robotics"
            link=""
        />
    </div>
</div>

<style lang="postcss">
</style>
