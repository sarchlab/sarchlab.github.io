<script>
    export let img = ''
    export let title = ''
    export let content = ''
</script>

<div class="research-topic">
    <img src={img} alt={title} />
    <div>
        <div class="title">
            {title}
        </div>

        <div class="content">
            {content}
        </div>
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

    img {
        @apply rounded-2xl border;
        @apply w-full lg:w-48 h-16 lg:h-24;
        @apply lg:mt-4;
        @apply flex-shrink-0;
        @apply object-cover;
    }

    .title {
        @apply font-semibold;
    }

    .content {
        @apply text-sm;
    }
</style>
