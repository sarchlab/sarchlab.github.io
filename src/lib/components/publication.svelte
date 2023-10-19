<script lang="ts">
    import { stringify } from 'postcss'

    export let venue = ''
    export let title = ''
    export let authors = ''
    export let links = Array<{
        icon: string
        name: string
        link: string
    }>()
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
        {#each links as link}
            <a href={link.link}>
                <span class="link">
                    <i class={link.icon} />
                    {link.name}
                </span>
            </a>
        {/each}
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
