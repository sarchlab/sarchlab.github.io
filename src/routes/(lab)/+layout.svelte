<script>
    import Nav from '$components/nav.svelte'
    import News from '$components/news.svelte'
    import Footer from '$src/lib/components/footer.svelte'
</script>

<Nav
    logoLink="/"
    logoImg="/huscarl.svg"
    logoImgDark="/huscarl_dark.svg"
    navItems={[
        {
            name: 'People',
            link: '/people',
        },
        {
            name: 'Publication',
            link: '/publication',
        },
        {
            name: 'Software',
            link: '/software',
        },
        {
            name: 'News',
            link: '/news',
        },
    ]}
/>

<div class="main-container">
    <slot />
</div>

<Footer>
    <div slot="slot1">
        <b>HUSCARL</b>
        <div class="text-xs mt-3">
            Human-Centered System & Computer Architecture Lab <br />
            ISC 4 1365 <br />
            540 Landrum Drive <br />
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

    <div slot="slot3">
        <b>Resources</b>
        <div class="text-xs mt-3">
            <a href="/branding">Branding</a>
        </div>
    </div>

    <div slot="slot4">
        <b>Website Designer</b>
        <div class="text-xs mt-3">Yifan Sun</div>
    </div>
</Footer>
