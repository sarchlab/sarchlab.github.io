<script lang="ts">
    import { onMount } from 'svelte'
    import { createCvElement } from 'easycv'
    import easycvStyles from 'easycv/dist/easycv.css?raw'
    import overrideStyles from './cv-overrides.css?raw'
    import Seo from '$components/seo.svelte'

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

            const baseStyle = document.createElement('style')
            baseStyle.textContent = easycvStyles
            shadow.appendChild(baseStyle)

            const overrideStyle = document.createElement('style')
            overrideStyle.textContent = overrideStyles
            shadow.appendChild(overrideStyle)

            const cvElement = createCvElement(data.cvData, {
                actions: true,
            })
            shadow.appendChild(cvElement)
            container.removeAttribute('aria-busy')
        } catch (err) {
            error =
                err instanceof Error
                    ? err.message
                    : 'Failed to render CV. Please try again.'
        }
    })
</script>

<Seo
    title="Yifan Sun | Curriculum Vitae"
    description="Curriculum vitae of Yifan Sun, Class of 1953 Associate Professor of Computer Science at William & Mary."
    path="/syifan/cv"
    image="/yifan_profile.png"
    imageAlt="Yifan Sun"
/>

<svelte:head>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" />
    <style>
        @media print {
            @page {
                margin: 0.5in;
            }
        }
    </style>
</svelte:head>

{#if error}
    <h1 class="sr-only">Yifan Sun Curriculum Vitae</h1>
    <div class="cv-error" role="alert">
        <p>Unable to load CV.</p>
        <p class="cv-error-message">{error}</p>
    </div>
{:else}
    <h1 class="sr-only">Yifan Sun Curriculum Vitae</h1>
    <div class="cv-mount" bind:this={container} aria-busy="true"></div>
{/if}
