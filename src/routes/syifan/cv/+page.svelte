<script lang="ts">
    import { onMount } from 'svelte'
    import { createCvElement } from 'easycv'
    import easycvStyles from 'easycv/dist/easycv.css?raw'
    import overrideStyles from './cv-overrides.css?raw'

    import type { PageData } from './$types'

    export let data: PageData

    let container: HTMLDivElement | null = null
    let error: string | null = null

    onMount(() => {
        if (!container) {
            return
        }

        try {
            const shadow = container.attachShadow({ mode: 'open' })

            const style = document.createElement('style')
            style.textContent = easycvStyles
            shadow.appendChild(style)

            const override = document.createElement('style')
            override.textContent = overrideStyles
            shadow.appendChild(override)

            const cvElement = createCvElement(data.cvData, {
                actions: true,
            })
            shadow.appendChild(cvElement)

            const title = data.cvData?.header?.name
            if (title) {
                document.title = `${title} - Curriculum Vitae`
            }
        } catch (err) {
            error =
                err instanceof Error
                    ? err.message
                    : 'Failed to render CV. Please try again.'
        }
    })
</script>

<svelte:head>
    <title>Yifan Sun - Curriculum Vitae</title>
</svelte:head>

{#if error}
    <div class="cv-error" role="alert">
        <p>Unable to load CV.</p>
        <p class="cv-error-message">{error}</p>
    </div>
{:else}
    <div class="cv-mount" bind:this={container} aria-busy="true"></div>
{/if}
