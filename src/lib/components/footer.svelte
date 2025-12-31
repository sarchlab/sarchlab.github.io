<script>
</script>

<div class="footer">
    <div class="container">
        <div>
            <slot name="slot1" />
        </div>
        <div>
            <slot name="slot2" />
        </div>
        <div>
            <slot name="slot3" />
        </div>
        <div>
            <slot name="slot4" />
        </div>
    </div>
</div>

<style lang="postcss">
    .footer {
        @apply mt-10  pt-20 pb-10;
        @apply text-sm;
        @apply min-h-fit;
        @apply bg-muted;
        @apply shadow-inner;
    }

    .container {
        @apply max-w-screen-2xl;
        @apply grid grid-cols-1 gap-6;
        @apply md:grid-cols-4;
        @apply px-12;
    }

    .footer div {
        @apply mb-2;
    }
</style>
