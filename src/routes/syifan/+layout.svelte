<script>
    import Nav from '$components/nav.svelte'
    import News from '$src/lib/components/news.svelte'
    import Footer from '$components/footer.svelte'
    import YifanSidebar from './YifanSidebar.svelte'
</script>

<Nav
    logoImg="/yifan_sun.svg"
    logoLink="/syifan"
    navItems={[
        {
            name: 'SARCHLAB',
            link: '/',
        },
        {
            name: 'Publication',
            link: '/syifan/publication',
        },
        {
            name: 'Teaching',
            link: '/syifan/teaching',
        },
    ]}
/>

<div class="main-container">
    <div class="w-full md:w-3/12 lg:w-3/12">
        <YifanSidebar />
    </div>

    <div class="w-full md:w-6/12 lg:w-6/12">
        <slot />
    </div>

    <div class="hidden md:block md:w-3/12 pl-4">
        <News />
    </div>
</div>

<Footer>
    <div slot="slot1">
        <b>Scalable Architecture Lab</b>
        <div class="text-xs mt-3">
            McGlothlin-Street Hall 117 <br />
            737 Landrum Dr, <br />
            Williamsburg, VA 23185
        </div>
    </div>

    <div slot="slot2">
        <b>GitHub</b>
        <div class="text-xs mt-3">
            <a href="https://github.com/sarchlab">
                https://github.com/sarchlab
            </a>
        </div>
    </div>

    <div slot="slot4">
        <b>Website Designer</b>
        <div class="text-xs mt-3">Yifan Sun</div>
    </div>
</Footer>
