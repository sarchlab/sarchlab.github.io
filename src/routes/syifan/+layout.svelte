<script>
    import Nav from '$components/nav.svelte'
    import News from '$src/lib/components/news.svelte'
    import YifanSidebar from './YifanSidebar.svelte'
</script>

<Nav
    logoImg="/yifan_sun.svg"
    logoLink="/syifan"
    navItems={[
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

    <div class="w-full md:w-3/12 pl-4">
        <News />
    </div>
</div>
