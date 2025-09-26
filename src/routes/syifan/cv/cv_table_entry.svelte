<script lang="ts">
    type HtmlValue = { html: string }
    type CellValue = string | number | null | undefined | boolean | HtmlValue

    export let left: Array<CellValue> = []
    export let right: Array<CellValue> = []
    export let hanging: CellValue = null

    const isHtmlValue = (value: CellValue): value is HtmlValue =>
        typeof value === 'object' && value !== null && 'html' in value

    const hasContent = (value: CellValue) => {
        if (value === null || value === undefined) {
            return false
        }

        if (isHtmlValue(value)) {
            return value.html.trim().length > 0
        }

        if (typeof value === 'boolean') {
            return true
        }

        return String(value).trim().length > 0
    }

    $: hasHangingColumn = hasContent(hanging)
    $: hasRightColumn = right.some(hasContent)
    $: rowCount = Math.max(
        left.length,
        hasRightColumn ? right.length : 0,
        hasHangingColumn ? 1 : 0
    )
    $: rows = Array.from({ length: rowCount }, (_, index) => index)
</script>

{#each rows as index}
    <tr class:entry-start={index === 0}>
        {#if hasHangingColumn}
            <td class="hanging-cell">
                {#if index === 0}
                    {#if isHtmlValue(hanging)}
                        {@html hanging.html}
                    {:else}
                        {hanging}
                    {/if}
                {/if}
            </td>
        {/if}
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
        {#if hasRightColumn}
            <td class="right-cell">
                {#if right[index] != null}
                    {#if isHtmlValue(right[index])}
                        {@html right[index].html}
                    {:else}
                        {right[index]}
                    {/if}
                {/if}
            </td>
        {/if}
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

    .hanging-cell {
        padding: 0.05rem 0.5rem 0.05rem 0;
        white-space: nowrap;
        vertical-align: top;
    }

    .right-cell {
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

    td {
        line-height: 1.2rem;
    }
</style>
