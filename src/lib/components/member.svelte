<script>
    export let name = ''
    export let profile_img = ''
    export let link = ''
    export let variant = 'default'
    export let role = ''
    export let date = ''
    export let affiliation = ''
    export let description = ''
    export let email = ''
</script>

<div class={`person-card ${variant}`}>
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
        {#if role !== ''}
            <div class="person-role">{role}</div>
        {/if}
        {#if date !== ''}
            <div class="person-date">{date}</div>
        {/if}
        {#if affiliation !== ''}
            <div class="person-affiliation">{affiliation}</div>
        {/if}
        {#if description !== ''}
            <div class="person-description">{description}</div>
        {/if}
        {#if email !== ''}
            <div class="person-email"><b>Email:</b> {email}</div>
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
        @apply text-sm;
    }

    .person-card.lightweight {
        @apply p-0 my-1 pl-3;
    }

    .person-info {
        @apply flex flex-col text-left;
    }

    .profile-img {
        @apply inline-block;
        @apply flex-initial rounded-full;
        @apply h-20 w-20 ml-0 mr-4;
        @apply md:h-28 md:w-28 md:ml-4 md:mr-12;
        @apply lg:h-24 lg:w-24 lg:ml-1 lg:mr-4;
        @apply xl:h-24 xl:w-24 xl:ml-2 xl:mr-8;
    }

    div.profile-img {
        @apply border border-muted-foreground bg-muted;
        @apply flex items-center justify-center;
        @apply text-4xl font-semibold text-foreground;
    }

    .person-description {
        @apply text-sm text-muted-foreground leading-4;
    }

    .person-card.lightweight .profile-img {
        @apply hidden;
    }

    .person-name {
        @apply text-2xl font-semibold;
    }

    .person-card.lightweight .person-name {
        @apply text-lg;
    }

    .person-card.extra-lightweight {
        @apply p-0 my-1 pl-3;
        @apply flex-row;
    }

    .person-card.extra-lightweight .person-info {
        @apply flex-row gap-2;
    }

    .person-card.extra-lightweight .profile-img {
        @apply hidden;
    }

    .person-card.extra-lightweight .person-name {
        @apply text-base;
    }

    .person-card.extra-lightweight .person-date {
        @apply text-base;
    }

    .person-card.extra-lightweight .person-affiliation {
        @apply hidden;
    }

    .person-card.extra-lightweight .person-role {
        @apply hidden;
    }

    .person-card.extra-lightweight .person-description {
        @apply hidden;
    }

    .person-card.extra-lightweight .person-email {
        @apply hidden;
    }
</style>
