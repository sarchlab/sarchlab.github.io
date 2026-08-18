<script lang="ts">
    const SITE_URL = 'https://sarchlab.org'

    export let title: string
    export let description: string
    export let path: string
    export let image = '/branding/huscarl_full_light.png'
    export let imageAlt = 'HUSCARL logo'
    export let type = 'website'
    export let noIndex = false
    export let structuredData: Record<string, unknown> | null = null

    $: canonicalUrl = new URL(path, SITE_URL).toString()
    $: imageUrl = new URL(image, SITE_URL).toString()
    $: serializedStructuredData = structuredData
        ? JSON.stringify(structuredData).replace(/</g, '\\u003c')
        : ''
</script>

<svelte:head>
    <title>{title}</title>
    <meta name="description" content={description} />
    <link rel="canonical" href={canonicalUrl} />

    {#if noIndex}
        <meta name="robots" content="noindex, nofollow" />
    {/if}

    <meta property="og:site_name" content="HUSCARL" />
    <meta property="og:locale" content="en_US" />
    <meta property="og:type" content={type} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:url" content={canonicalUrl} />
    <meta property="og:image" content={imageUrl} />
    <meta property="og:image:alt" content={imageAlt} />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={imageUrl} />

    {#if structuredData}
        {@html `<script type="application/ld+json">${serializedStructuredData}</script>`}
    {/if}
</svelte:head>
