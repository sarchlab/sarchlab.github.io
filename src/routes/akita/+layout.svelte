<script>
    import Nav from '$components/nav.svelte'
    import Footer from '$src/lib/components/footer.svelte'
</script>

<Nav
    logoLink="/akita"
    logoImg="/akita_logo.png"
    navItems={[
        {
            name: 'Sarchlab',
            link: '/',
        },
    ]}
/>

<div class="block-container">
    <slot />
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
