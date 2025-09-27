<script lang="ts">
    import CvTableEntry from './cv_table_entry.svelte'

    type TableCell =
        | string
        | number
        | boolean
        | null
        | undefined
        | { html: string }

    type TableEntry = {
        left: Array<TableCell>
        right: Array<TableCell>
        hanging?: TableCell
    }

    export let entries: TableEntry[] = []
    export let condensed = false
</script>

{#if entries.length > 0}
    <table class="cv-table">
        <tbody>
            {#each entries as entry}
                <CvTableEntry
                    condensed={condensed}
                    hanging={entry.hanging ?? null}
                    left={entry.left}
                    right={entry.right}
                />
            {/each}
        </tbody>
    </table>
{/if}

<style>
    table {
        margin: 0;
        border: none;
        border-spacing: 0;
        border-collapse: collapse;
        width: 100%;
    }

    .cv-table {
        width: 100%;
        border-collapse: collapse;
    }

    .cv-table tbody tr:first-child td {
        padding-top: 0;
    }

    .cv-table tbody tr:last-child td {
        padding-bottom: 0;
    }
</style>
