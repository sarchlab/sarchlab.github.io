<script>
    export let name = ''
    export let profile_img = ''
    export let link = ''
</script>

<div class="person-card">
    {#if profile_img !== ''}
        <img class="profile-img" src={profile_img} alt="Profile of {name}" />
    {:else}
        <div class="profile-img">
            {#if name !== ''}
                <div class="initials">
                    {name.charAt(0)}{name.split(' ')[1].charAt(0)}
                </div>
            {:else}
                <div class="initials">NN</div>
            {/if}
        </div>
    {/if}
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

    .profile-img {
        @apply flex-initial rounded-full;
        @apply h-24 w-24 ml-2 mr-8 inline-block;
    }

    div.profile-img {
        @apply border border-muted-foreground bg-muted;
        @apply flex items-center justify-center;
        @apply text-4xl font-semibold text-foreground;
    }

    .person-name {
        @apply text-2xl font-semibold;
    }
</style>
