<script>
    export let year = ''
    export let title = ''
    export let description = ''
    export let link = ''
</script>

<div class="course">
    <div class="course-year">{year}</div>
    <div class="course-title">
        {title}
    </div>
    {#if description}
        <div class="course-description">
            {description}
        </div>
    {/if}
    {#if link}
        <a href={link}>Website</a>
    {/if}
</div>

<style lang="postcss">
    .course {
        @apply flex flex-col;
        @apply border-l-2 border-muted pl-3;
    }

    .course-year {
        @apply text-muted-foreground;
    }

    .course-title {
        @apply font-bold;
    }
</style>
