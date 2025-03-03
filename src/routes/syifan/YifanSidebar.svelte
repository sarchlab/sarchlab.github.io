<script>
</script>

<svelte:head>
    <title>Yifan Sun</title>
</svelte:head>

<div class="sidebar">
    <div class="sub-sidebar md:pl-5">
        <div>
            <img
                src="/yifan_profile.png"
                alt="Yifan Sun"
                class="w-32 h-32 rounded-full object-cover"
            />
            <div class="mt-4">
                <h2>Yifan Sun</h2>
                <p>(孙轶凡)</p>
            </div>
        </div>
        <div class="text-muted-foreground">
            <p>Assistant Professor</p>
            <p>Computer Science</p>
            <p>William & Mary</p>
        </div>
    </div>

    <div class="sub-sidebar">
        <div class="entry">
            <img class="small-icon" src="/location.svg" alt="location" />
            <div>
                McGlothlin-Street Hall 117<br />
                737 Landrum Dr, <br />
                Williamsburg, VA 23185
            </div>
        </div>

        <div class="flex flex-col gap-1">
            <div class="entry">
                <img class="small-icon" src="/file.svg" alt="file" />
                <a href="yifan_cv.pdf">CV (updated Mar 2025)</a>
            </div>
            <div class="entry">
                <img class="small-icon" src="/email.svg" alt="email" />
                <a href="mailto:ysun25@wm.edu">ysun25@wm.edu</a>
            </div>
            <div class="entry">
                <img
                    class="small-icon"
                    src="/googlescholar.png"
                    alt="google scholar"
                />
                <a
                    href="https://scholar.google.com/citations?user=LZg-kGAAAAAJ&hl=en"
                    >Google Scholar</a
                >
            </div>
            <div class="entry">
                <img class="small-icon" src="/twitter.svg" alt="twitter" />
                <a href="https://twitter.com/_syifan_"> Twitter</a>
            </div>
            <div class="entry">
                <img class="small-icon" src="/github.svg" alt="github" />
                <a href="https://github.com/syifan">GitHub</a>
            </div>
            <div class="entry">
                <img
                    class="small-icon"
                    src="/xiaohongshu.png"
                    alt="xiaohongshu"
                />
                <a
                    href="https://www.xiaohongshu.com/user/profile/61da3d750000000010004c3e"
                >
                    小红书
                </a>
            </div>
            <div class="entry">
                <img class="small-icon" src="/bilibili.svg" alt="bilibili" />
                <a href="https://space.bilibili.com/1914889792"> 哔哩哔哩 </a>
            </div>
        </div>
    </div>
</div>

<style lang="postcss">
    .sidebar {
        @apply w-full;
        @apply flex flex-col gap-6 justify-start items-start;
        @apply px-12 py-8;
        @apply md:px-0 md:justify-start;
    }

    .sub-sidebar {
        @apply flex flex-col gap-4;
    }

    .entry {
        @apply flex gap-1 justify-start items-center;
    }

    .small-icon {
        @apply w-4 h-4;
        @apply object-contain;
    }

    a {
        @apply underline;
    }
</style>
