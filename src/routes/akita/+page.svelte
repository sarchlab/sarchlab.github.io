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
        <h2>Useful Resources</h2>
    </div>
</div>

<div class="block">
    <div class="block-content">
        <h2>Events</h2>
    </div>
</div>

<div class="block">
    <div class="block-content">
        <AkitaEnabledResearch />
    </div>
</div>

<style lang="postcss"></style>
