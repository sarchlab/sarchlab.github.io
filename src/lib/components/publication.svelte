<script>
</script>

<div class="pub-card">
    <div class="venue">
        (<slot name="venue" />)
    </div>

    <div class="title">
        <slot name="title" />
    </div>

    <div class="authors">
        <slot name="authors" />
    </div>

    <div class="links">
        <slot name="links" />
    </div>
</div>

<style lang="postcss">
    .pub-card {
        @apply mt-4;
        @apply flex flex-col;
        @apply pl-2 border-l-2 border-muted;
    }

    .venue {
        @apply text-muted-foreground font-thin;
    }

    .title {
        @apply font-bold;
    }

    .authors {
        @apply text-sm;
    }
</style>
