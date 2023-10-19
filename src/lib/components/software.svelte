<script>
    export let img = ''
    export let title = ''
</script>

<div class="research-topic">
    <img src={img} alt={title} />
    <div>
        <span class="title">
            {title}
        </span>
        <span class="link">
            <slot name="link" />
        </span>

        <div class="description">
            <slot name="description" />
        </div>
    </div>
</div>

<style lang="postcss">
    .research-topic {
        @apply flex gap-6;
        @apply flex-col justify-start items-start;
        @apply sm:flex-row sm:justify-center sm:items-center;
        @apply mt-8 ml-2 pl-2;
        /* @apply border-l-2 */
    }

    .link {
        @apply text-sm text-muted-foreground;
        @apply ml-4;
    }

    img {
        /* @apply rounded-full; */
        @apply w-24 h-24;
        @apply flex-shrink-0;
        @apply object-contain;
    }

    .title {
        @apply text-xl font-bold;
    }

    .description {
        @apply text-sm;
    }
</style>
