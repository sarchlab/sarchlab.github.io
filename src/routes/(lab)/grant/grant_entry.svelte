<script lang="ts">
    export let title = ''
    export let amount = ''
    export let labAmount = ''
    export let program = ''
    export let sponsor = ''
    export let duration = ''
    export let pi = ''
</script>

<div class="grant-card">
    <div class="duration">{duration}</div>
    <div class="title">{title}</div>
    <div class="info"><b>Sponsor:</b> {sponsor}, {program}</div>
    <div class="info"><b>Amount:</b> {amount}, SARCHLAB part {labAmount}</div>
    <div class="info"><b>PIs:</b> {pi}</div>
</div>

<style lang="postcss">
    .grant-card {
        @apply mt-6;
        @apply flex flex-col;
        @apply pl-2 border-l-2 border-muted;
    }

    .duration {
        @apply text-muted-foreground font-thin text-lg;
    }

    .title {
        @apply font-bold;
        @apply mt-2 mb-2;
    }

    .info {
        @apply text-sm;
    }
</style>
