<script>
    import Nav from '$components/nav.svelte'
    import News from '$src/lib/components/news.svelte'
    import YifanSidebar from './YifanSidebar.svelte'
    import { page } from '$app/stores'

    $: isCvRoute = $page.url.pathname.startsWith('/syifan/cv')
</script>

{#if isCvRoute}
    <slot />
{:else}
    <Nav
        logoImg="/yifan_sun.svg"
        logoImgDark="/yifan_sun_dark.svg"
        logoLink="/syifan"
        navItems={[
            {
                name: 'HUSCARL',
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

{/if}
