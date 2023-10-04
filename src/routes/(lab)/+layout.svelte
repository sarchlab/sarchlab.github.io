<script>
    import Nav from '$components/nav.svelte'
</script>

<Nav
    logoLink="/"
    logoImg="sarchlab.svg"
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

<slot />
