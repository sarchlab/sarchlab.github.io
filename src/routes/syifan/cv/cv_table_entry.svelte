<script lang="ts">
    type HtmlValue = { html: string }
    type CellValue = string | number | null | undefined | boolean | HtmlValue

    export let left: Array<CellValue> = []
    export let right: Array<CellValue> = []

    const rowCount = Math.max(left.length, right.length)
    $: rows = Array.from({ length: rowCount }, (_, index) => index)

    const isHtmlValue = (value: CellValue): value is HtmlValue =>
        typeof value === 'object' && value !== null && 'html' in value
</script>

{#each rows as index}
    <tr class:entry-start={index === 0}>
        <td class:left-header={index === 0 && left[index] != null}>
            {#if left[index] != null}
                {#if isHtmlValue(left[index])}
                    {@html left[index].html}
                {:else if index === 0}
                    <strong>{left[index]}</strong>
                {:else}
                    {left[index]}
                {/if}
            {/if}
        </td>
        <td>
            {#if right[index] != null}
                {#if isHtmlValue(right[index])}
                    {@html right[index].html}
                {:else}
                    {right[index]}
                {/if}
            {/if}
        </td>
    </tr>
{/each}

<style>
    tr {
        border: none;
        background: none;
    }

    td {
        padding: 0.05rem 0.35rem 0.05rem 0;
        vertical-align: top;
        line-height: 1.2;
    }

    td:last-child {
        padding-right: 0;
        text-align: right;
        white-space: nowrap;
    }

    .left-header strong {
        font-weight: 600;
    }

    .entry-start td {
        padding-top: 0.6rem;
    }
</style>
