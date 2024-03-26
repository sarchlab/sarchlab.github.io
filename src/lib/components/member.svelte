<script>
    export let name = ''
    export let profile_img = ''
    export let link = ''
</script>

<div class="person-card">
    <img src={profile_img} alt="Profile of {name}" />
    <div class="person-info">
        {#if link !== ''}
            <a href={link}>
                <div class="person-name">{name}</div>
            </a>
        {:else}
            <div class="person-name">{name}</div>
        {/if}
        <slot />
    </div>
</div>

<style lang="postcss">
    .person-card {
        @apply flex flex-1;
        @apply border-l-2 border-muted;
        @apply p-3 my-4;
        @apply text-left;
    }

    .person-info {
        @apply flex flex-col text-left;
    }

    .person-card img {
        @apply flex-initial rounded-full h-24 w-24 ml-2 mr-8 inline-block;
    }

    .person-name {
        @apply text-2xl font-semibold;
    }
</style>
