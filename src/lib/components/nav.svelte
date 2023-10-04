<script lang="ts">
    import feather from 'feather-icons'
    import { onMount } from 'svelte'
    import { navigating } from '$app/stores'
    import '$src/app.css'

    export let logoLink = ''
    export let logoImg = ''
    export let navItems = Array<{
        name: string
        link: string
    }>()

    onMount(() => {
        highlightNavItem()

        window
            .matchMedia('(prefers-color-scheme: dark)')
            .addEventListener('change', (e) => {
                changeTheme()
            })

        changeTheme()
    })

    function changeTheme() {
        const userPref = localStorage.getItem('theme')
        if (userPref === 'dark') {
            document.documentElement.classList.add('dark')
            return
        }

        if (userPref === 'light') {
            document.documentElement.classList.remove('dark')
            return
        }

        const systemTheme = window.matchMedia('(prefers-color-scheme: dark)')
        if (systemTheme.matches) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }

    function highlightNavItem() {
        const navItems = document.getElementsByClassName('nav-item')
        for (let i = 0; i < navItems.length; i++) {
            navItems[i].classList.remove('highlight')
        }

        const path = window.location.pathname
        const pathTokens = path.split('/')
        const pageName = pathTokens[pathTokens.length - 1]

        const itemID = 'nav-' + pageName
        const item = document.getElementById(itemID)

        if (item) {
            item.classList.add('highlight')
        }
    }

    function toggleMenu() {
        const fold = document.getElementById('nav-fold')!
        fold.classList.toggle('hidden')
        fold.classList.toggle('flex')
    }

    function toggleThemeOption() {
        const options = document.getElementById('theme-options')!
        options.classList.toggle('hidden')
        options.classList.toggle('flex')

        const btn = document.getElementById('theme-option-btn')!
        btn.classList.toggle('hidden')
        btn.classList.toggle('flex')
    }

    function selectTheme(theme: string) {
        switch (theme) {
            case 'Light':
                localStorage.setItem('theme', 'light')
                changeTheme()
                break
            case 'Dark':
                localStorage.setItem('theme', 'dark')
                changeTheme()
                break
            case 'System':
                localStorage.removeItem('theme')
                changeTheme()
                break
            default:
                console.error('Unknown theme: ' + theme)
        }

        toggleThemeOption()
    }
</script>

<nav>
    <div class="nav-container">
        <a href={logoLink}>
            <img src={logoImg} alt="logo" class="logo" />
        </a>
        <button
            id="menu-toggle-btn"
            class=" justify-end md:hidden"
            on:click={toggleMenu}
        >
            {@html feather.icons['menu'].toSvg()}
        </button>

        <div id="nav-fold" class="nav-fold hidden items-center text-slate-300">
            <div id="nav-menu-list">
                {#each navItems as item}
                    <div
                        id="nav-{item.name.toLowerCase()}"
                        class="nav-item highlight"
                    >
                        <a href={item.link}> {item.name} </a>
                    </div>
                {/each}

                <!-- <div id="nav-people" class="nav-item highlight">
                    <a href="/people"> People </a>
                </div>
                <div id="nav-publication" class="nav-item">
                    <a href="/publication"> Publication </a>
                </div>
                <div id="nav-software" class="nav-item">
                    <a href="/software"> Software </a>
                </div>
                <div id="nav-news" class="nav-item">
                    <a href="/news"> News </a>
                </div> -->
            </div>

            <button id="theme-option-btn" on:click={toggleThemeOption}>
                {@html feather.icons['sun'].toSvg({
                    width: 18,
                    height: 18,
                })}
            </button>
            <div id="theme-options" class="hidden">
                <button
                    class="theme-option"
                    on:click={() => selectTheme('Light')}
                >
                    {@html feather.icons['sun'].toSvg({
                        width: 18,
                        height: 18,
                    })} Light
                </button>
                <button
                    class="theme-option"
                    on:click={() => selectTheme('Dark')}
                >
                    {@html feather.icons['moon'].toSvg({
                        width: 18,
                        height: 18,
                    })} Dark
                </button>
                <button
                    class="theme-option"
                    on:click={() => selectTheme('System')}
                >
                    {@html feather.icons['monitor'].toSvg({
                        width: 18,
                        height: 18,
                    })} System
                </button>
            </div>
        </div>
    </div>
</nav>

<style lang="postcss">
    nav {
        @apply items-center mb-3 py-4 px-2;
        @apply bg-background;
        @apply max-w-screen-2xl;
        @apply mx-auto;
    }

    .logo {
        @apply h-6;
    }

    .nav-container {
        @apply flex flex-wrap justify-between;
        @apply items-center;
        @apply mx-auto;
        @apply px-8;
    }

    #nav-menu-list {
        @apply w-full flex-col gap-1;
        @apply md:mt-0 md:w-auto md:basis-0 md:flex md:flex-row md:gap-4;
    }

    .nav-item {
        @apply text-muted-foreground text-lg;
        @apply hover:text-foreground;
        @apply cursor-pointer;
    }

    .nav-item.highlight {
        @apply text-foreground;
    }

    .logo {
        @apply text-2xl  font-bold;
        @apply md:mr-12;
        @apply text-foreground;
    }

    #menu-toggle-btn {
        @apply text-muted-foreground;
    }

    .nav-fold {
        @apply flex-col items-center basis-full mt-4 gap-1;
        @apply md:flex md:flex-row md:basis-0 md:mt-0 md:gap-4;
    }

    #theme-option-btn {
        @apply w-full;
        @apply text-muted-foreground;
    }

    #theme-options {
        @apply items-center justify-start gap-3 w-full;
    }

    .theme-option {
        @apply cursor-pointer;
        @apply text-muted-foreground;
        @apply hover:text-foreground;
        @apply flex items-center gap-1;
    }
</style>
