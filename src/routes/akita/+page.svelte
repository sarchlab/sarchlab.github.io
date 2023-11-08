<script lang="ts">
    import AkitaDescription from './akita_description.svelte'
    import AkitaEnabledResearch from './akita_enabled_research.svelte'
    import AkitaSubProject from './akita_sub_project.svelte'
</script>

<svelte:head>
    <title>
        Akita: Building Developer Friendly Computer Architecture Simulator
    </title>
</svelte:head>

<div class="block">
    <AkitaDescription />
</div>

<div class="block">
    <AkitaSubProject />
</div>

<div class="block">
    <div class="block-content">
        <h2 class="text-4xl mb-6 text-theme font-bold">Events</h2>
        <ul class="px-5 list-outside list-disc">
            <li>
                <a href="/akita/akita2023">
                    The first lightweight Workshop on Akita and MGPUSim (Akita
                    2023)
                </a>
            </li>
        </ul>
    </div>
</div>

<div class="block">
    <div class="block-content">
        <AkitaEnabledResearch />
    </div>
</div>

<style lang="postcss"></style>
