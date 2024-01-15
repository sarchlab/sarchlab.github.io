<script lang="ts">
    export let venue = ''
    export let title = ''
    export let authors = ''
</script>

<div class="pub-card">
    <div class="venue">
        {venue}
    </div>

    <div class="title">
        {title}
    </div>

    <div class="authors">
        {authors}
    </div>

    <div class="links">
        <slot />
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

    .links {
        @apply flex flex-row;
        @apply flex-wrap;
        @apply gap-4;
    }
</style>
