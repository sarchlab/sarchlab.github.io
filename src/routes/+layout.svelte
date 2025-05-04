<script>
    // ...existing script...
    import Footer from '$lib/components/footer.svelte'
    // ...other imports...
</script>

<div class="page-wrapper">
    <slot />
</div>

<style lang="postcss">
    .page-wrapper {
        @apply flex flex-col min-h-screen;
    }
</style>
