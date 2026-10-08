<script>
    export let img = ''
    export let title = ''
    export let content = ''
    export let href = ''
</script>

<div class="research-topic">
    {#if href}
        <a class="thumbnail" {href} aria-label={title}>
            <img src={img} alt="" width="1200" height="600" />
        </a>
    {:else}
        <img
            class="thumbnail"
            src={img}
            alt={title}
            width="1200"
            height="600"
        />
    {/if}
    <div class="min-w-0">
        <div class="title">
            {#if href}
                <a {href}>{title}</a>
            {:else}
                {title}
            {/if}
        </div>

        <div class="content">
            {content}
        </div>

        {#if href}
            <a
                class="mt-2 inline-block text-sm"
                {href}
                aria-label="Learn more about {title}"
            >
                Learn more →
            </a>
        {/if}
    </div>
</div>

<style lang="postcss">
    .research-topic {
        @apply flex gap-6;
        @apply flex-col justify-start items-start;
        @apply lg:flex-row lg:justify-center;
        @apply mt-8 ml-2 pl-2;
        /* @apply border-l-2 */
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
