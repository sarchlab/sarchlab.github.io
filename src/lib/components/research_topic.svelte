<script>
    export let img = ''
    export let title = ''
    export let content = ''
    export let href = ''
</script>

<svelte:element
    this={href ? 'a' : 'div'}
    href={href || undefined}
    aria-label={href ? title : undefined}
    class="research-topic"
>
    <img
        class="thumbnail"
        src={img}
        alt={href ? '' : title}
        width="1200"
        height="600"
    />
    <div class="min-w-0">
        <div class="title">{title}</div>

        <div class="content">
            {content}
        </div>
    </div>
</svelte:element>

<style lang="postcss">
    .research-topic {
        @apply flex gap-6;
        @apply flex-col justify-start items-start;
        @apply lg:flex-row lg:justify-center;
        @apply mt-8 ml-2 pl-2;
    }

    a.research-topic {
        @apply no-underline;
    }

    a.research-topic:hover .title {
        @apply underline;
    }

    a.research-topic:focus-visible {
        outline: 2px solid var(--brand);
        outline-offset: 6px;
        border-radius: 0.5rem;
    }

    .thumbnail {
        @apply block;
        @apply w-full lg:w-48 h-16 lg:h-24;
        @apply lg:mt-4;
        @apply flex-shrink-0;
    }

    img {
        @apply rounded-2xl border;
        @apply w-full h-full;
        @apply object-cover;
    }

    .title {
        @apply font-semibold;
    }

    .content {
        @apply text-sm;
    }
</style>
