<script lang="ts">
    import feather from 'feather-icons'

    function toggleMenu() {
        const menu = document.getElementById('nav-menu-list')!
        menu.classList.toggle('hidden')
        menu.classList.toggle('flex')
    }
</script>

<nav>
    <div class="logo">SARCHLAB</div>
    <button
        id="menu-toggle"
        class="text-white justify-end md:hidden"
        on:click={toggleMenu}
    >
        {@html feather.icons['menu'].toSvg()}
    </button>

    <ul id="nav-menu-list" class="hidden">
        <li>People</li>
        <li>Publication</li>
        <li>Software</li>
    </ul>
</nav>

<style lang="postcss">
    nav {
        @apply flex flex-wrap justify-between;
        @apply items-center bg-slate-700 px-8 mb-3 py-4;
    }

    nav > ul {
        @apply w-full flex-col gap-1 basis-full;
        @apply md:w-auto md:basis-0 md:flex md:flex-row md:gap-4;
    }

    nav > ul > li {
        @apply text-slate-400 text-lg;
        @apply hover:text-slate-100;
    }

    .logo {
        @apply text-2xl text-white font-bold;
        @apply md:mr-12;
    }
</style>
