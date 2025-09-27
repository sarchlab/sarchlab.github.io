<script lang="ts">
    type HtmlValue = { html: string }
    type CellValue = string | number | null | undefined | boolean | HtmlValue

    export let left: Array<CellValue> = []
    export let right: Array<CellValue> = []
    export let hanging: CellValue = null
    export let condensed = false

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
    <tr class:entry-start={index === 0} class:condensed-row={condensed}>
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
        {#if condensed}
            {#if index === 0}
                <td class="left-cell" rowspan={rowCount}>
                    {#each left as value, leftIndex}
                        {#if value != null}
                            <span
                                class:left-header-span={leftIndex === 0}
                                class:left-entry-span={leftIndex > 0}
                            >
                                {#if isHtmlValue(value)}
                                    {@html value.html}
                                {:else if leftIndex === 0}
                                    <strong>{value}</strong>
                                {:else}
                                    {value}
                                {/if}
                            </span>
                        {/if}
                    {/each}
                </td>
            {/if}
        {:else}
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

    tr:not(.entry-start):not(.condensed-row) td {
        font-size: 0.9em;
    }

    .hanging-cell {
        padding: 0.05rem 0.5rem 0.05rem 0;
        white-space: nowrap;
        vertical-align: top;
    }

    .left-cell {
        padding-left: 1rem;
        padding-right: 0.5rem;
        min-width: 10rem;
    }

    .left-cell span {
        display: inline;
    }

    .left-header-span {
        font-size: 1.05em;
    }

    .left-entry-span {
        font-size: 0.95em;
    }

    .right-cell {
        padding: 0;
        padding-right: 1rem;
        text-align: left;
        white-space: nowrap;
        width: 1%;
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

    @media screen and (max-width: 600px) {
        tr {
            display: block;
            line-height: 1.1em;
        }

        td,
        .right-cell,
        .hanging-cell,
        .left-cell {
            display: block;
            width: 100%;
            padding-right: 0;
            padding-left: 0;
            white-space: normal;
            text-align: left;
        }

        .left-cell {
            margin-bottom: 0.4rem;
        }

        .entry-start:not(.condensed-row) td:first-child {
            padding-top: 0.7rem;
        }

        .entry-start:not(.condensed-row) td {
            padding-top: 0.1rem;
        }

        .condensed-row.entry-start td {
            padding-top: 0.4rem;
        }
    }
</style>
