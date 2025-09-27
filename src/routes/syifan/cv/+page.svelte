<script lang="ts">
    import CvTable from './cv_table.svelte'

    type TableCell =
        | string
        | number
        | boolean
        | null
        | undefined
        | { html: string }

    type CvEntry = {
        left: Array<TableCell>
        right: Array<TableCell>
        hanging?: TableCell
    }

    type CvSubsection = {
        id: string
        title: string
        entries?: CvEntry[]
        meta?: string[]
        condensed?: boolean
    }

    type CvSection = {
        id: string
        title: string
        entries?: CvEntry[]
        meta?: string[]
        condensed?: boolean
        subsections?: CvSubsection[]
    }

    type CvHeader = {
        name: string
        tags?: string[]
        contact?: Record<string, string>
    }

    type CvData = {
        version?: number
        header: CvHeader
        sections?: CvSection[]
    }

    const contactOrder = ['phone', 'email', 'website']
    const contactIcons: Record<string, string> = {
        phone: '/phone-solid-full.svg',
        email: '/envelope-solid-full.svg',
        website: '/globe-solid-full.svg',
    }

    export let data: {
        cvData: CvData
    }

    let cvData: CvData = { header: { name: '' }, sections: [] }
    let header: CvHeader = cvData.header
    let sections: CvSection[] = []
    let contactEntries: Array<{ key: string; value: string }> = []

    $: cvData = data.cvData
    $: header = cvData.header
    $: sections = cvData.sections ?? []

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    const triggerPrint = () => {
        window.print()
    }

    const formatWebsite = (value: string) =>
        /^https?:\/\//i.test(value) ? value : `https://${value}`

    $: contactEntries = (() => {
        const contact = (header?.contact ?? {}) as Record<string, string>
        const entries: Array<{ key: string; value: string }> = []

        for (const key of contactOrder) {
            const value = contact[key]
            if (typeof value === 'string' && value.trim().length > 0) {
                entries.push({ key, value })
            }
        }

        for (const [key, value] of Object.entries(contact)) {
            if (
                !contactOrder.includes(key) &&
                typeof value === 'string' &&
                value.trim().length > 0
            ) {
                entries.push({ key, value })
            }
        }

        return entries
    })()
</script>

<svelte:head>
    <title>Yifan Sun - Curriculum Vitae</title>
</svelte:head>

<div class="cv-container">
    <header class="cv-header">
        <div>
            <h1>{header.name}</h1>
            {#if header.tags?.length}
                <p class="tagline">
                    {#each header.tags as tag, index}
                        {tag}
                        {#if index < header.tags.length - 1}
                            <br />
                        {/if}
                    {/each}
                </p>
            {/if}
        </div>
        {#if contactEntries.length > 0}
            <div class="contact">
                {#each contactEntries as entry (entry.key)}
                    <div class="contact-item">
                        {#if contactIcons[entry.key]}
                            <img
                                class="contact-icon"
                                src={contactIcons[entry.key]}
                                alt=""
                                aria-hidden="true"
                                width="16"
                                height="16"
                            />
                        {/if}
                        {#if entry.key === 'email'}
                            <a href={`mailto:${entry.value}`}>{entry.value}</a>
                        {:else if entry.key === 'website'}
                            <a
                                href={formatWebsite(entry.value)}
                                target="_blank"
                                rel="noreferrer"
                            >
                                {entry.value}
                            </a>
                        {:else}
                            <span>{entry.value}</span>
                        {/if}
                    </div>
                {/each}
            </div>
        {/if}
    </header>

    <main>
        {#each sections as section (section.id)}
            <section class="cv-section" id={section.id}>
                <header class="section-header">
                    <h2>{section.title}</h2>
                </header>

                {#if section.meta?.length}
                    {#each section.meta as metaLine}
                        <p class="list-heading">{metaLine}</p>
                    {/each}
                {/if}

                {#if section.entries?.length}
                    <CvTable
                        entries={section.entries ?? []}
                        condensed={section.condensed ?? false}
                    />
                {/if}

                {#if section.subsections?.length}
                    {#each section.subsections as subsection (subsection.id)}
                        <div class="subsection">
                            <h3>{subsection.title}</h3>

                            {#if subsection.meta?.length}
                                {#each subsection.meta as metaLine}
                                    <p class="list-heading">{metaLine}</p>
                                {/each}
                            {/if}

                            <CvTable
                                entries={subsection.entries ?? []}
                                condensed={subsection.condensed ?? false}
                            />
                        </div>
                    {/each}
                {/if}
            </section>
        {/each}
    </main>

    <div class="floating-actions" aria-label="page controls">
        <button type="button" class="action-button" on:click={scrollToTop}>
            Back to Top
        </button>
        <button type="button" class="action-button" on:click={triggerPrint}>
            Download PDF
        </button>
    </div>
</div>

<style>
    :global(body) {
        margin: 0;
        background: #e9eef3;
        font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
        color: #111;
        font-size: 0.85rem;
        line-height: 1.45;
    }

    .cv-container {
        max-width: 850px;
        min-height: 11in;
        margin: 1.5rem auto;
        background: #fff;
        padding: 80px 80px 400px 80px;
        box-shadow: 0 14px 36px rgba(0, 0, 0, 0.12);
        box-sizing: border-box;
    }

    .cv-header {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        border-bottom: 3px solid #1d2f4b;
        padding-bottom: 1.2rem;
        margin-bottom: 1.6rem;
        gap: 1.5rem;
    }

    .cv-header h1 {
        font-size: 2.4rem;
        letter-spacing: 0.03em;
        margin: 0;
        color: #1d2f4b;
    }

    .tagline {
        margin: 0.4rem 0 0;
        font-size: 0.9rem;
        color: #334;
    }

    .contact {
        text-align: right;
        font-size: 0.85rem;
        line-height: 1.35;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        gap: 0.25rem;
    }

    .contact-item {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: 0.35rem;
    }

    .contact-icon {
        width: 16px;
        height: 16px;
        opacity: 0.85;
    }

    .contact a {
        color: inherit;
        text-decoration: none;
        border-bottom: 1px solid rgba(29, 47, 75, 0.35);
    }

    main {
        display: flex;
        flex-direction: column;
        gap: 1.45rem;
    }

    .floating-actions {
        position: fixed;
        right: 1.5rem;
        bottom: 1.5rem;
        display: flex;
        flex-direction: column;
        gap: 0.6rem;
        z-index: 999;
    }

    .action-button {
        background: #1d2f4b;
        color: #fff;
        border: none;
        border-radius: 999px;
        padding: 0.55rem 1.1rem;
        font-size: 0.85rem;
        letter-spacing: 0.04em;
        cursor: pointer;
        box-shadow: 0 6px 16px rgba(0, 0, 0, 0.18);
        transition:
            transform 0.2s ease,
            box-shadow 0.2s ease,
            background 0.2s ease;
    }

    .action-button:hover,
    .action-button:focus {
        transform: translateY(-1px);
        box-shadow: 0 10px 24px rgba(0, 0, 0, 0.2);
        background: #243f68;
        outline: none;
    }

    .action-button:focus-visible {
        outline: 2px solid rgba(29, 47, 75, 0.4);
        outline-offset: 3px;
    }

    .cv-section {
        position: relative;
    }

    .section-header {
        margin-bottom: 0rem;
    }

    .section-intro {
        margin-bottom: 0.9rem;
    }

    .subsection {
        margin-top: 1.4rem;
    }

    .subsection:first-of-type {
        margin-top: 0;
    }

    .entry-list {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
    }

    section {
        position: relative;
    }

    /* section::before {
        content: '';
        position: absolute;
        left: -0.5in;
        top: 0.2rem;
        width: 0.18in;
        height: 0.18in;
        background: #1d2f4b;
    } */

    h2 {
        font-size: 2.12rem;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        margin: 0.4rem 0 0.2rem 0;
        color: #1d2f4b;
        border-bottom: 1px solid rgba(29, 47, 75, 0.35);
        font-weight: 100;
    }

    h3 {
        font-size: 1.2rem;
        /* letter-spacing: 0.12em; */
        /* text-transform: uppercase; */
        margin: 1.2rem 0 0 0;
        color: #243654;
        font-weight: 500;
        text-decoration: underline;
    }

    .entry {
        display: grid;
        grid-template-columns: minmax(0, 1fr) auto;
        gap: 0.75rem;
        padding: 0.15rem 0;
    }

    .entry-body {
        display: flex;
        flex-direction: column;
        gap: 0.15rem;
    }

    .entry-header {
        font-weight: 600;
        color: #111;
    }

    .role {
        font-weight: 600;
        color: #111;
    }

    .affiliation {
        font-size: 0.9rem;
        color: #333;
    }

    .entry-meta {
        text-align: right;
        font-size: 0.82rem;
        color: #333;
    }

    ul,
    ol {
        margin: 0.3rem 0 0.6rem 1.2rem;
        padding: 0;
    }

    li {
        margin-bottom: 0.25rem;
    }

    .entry-body {
        margin-top: 0.2rem;
    }

    :global(.publication-title) {
        /* color: #1d2f4b; */
        font-weight: 700;
    }

    :global(.self-name) {
        text-decoration: underline;
        text-decoration-thickness: 2px;
        text-decoration-color: #1d2f4b;
        /* font-weight: 600; */
    }

    :global(.wm-advisee) {
        text-decoration-line: underline;
        text-decoration-style: wavy;
        text-decoration-color: #1d2f4b;
    }

    @media screen and (max-width: 900px) {
        .cv-container {
            margin: 0;
            min-height: auto;
            padding: 1.5rem;
            box-shadow: none;
            padding-bottom: 180px;
        }

        .cv-header {
            flex-direction: column;
            text-align: left;
            align-items: flex-start;
        }

        .contact {
            text-align: left;
            align-items: flex-start;
        }

        section::before {
            left: -0.4rem;
        }

        .entry {
            grid-template-columns: 1fr;
        }

        .entry-meta {
            text-align: left;
        }
    }

    @media print {
        @page {
            size: letter;
            margin: 0.7in;
        }

        :global(body) {
            background: #fff;
            font-size: 0.88rem;
            margin: 0;
        }

        .cv-container {
            box-shadow: none;
            margin: 0;
            width: 100%;
            max-width: none;
            padding: 0;
            page-break-inside: avoid;
        }

        .floating-actions {
            display: none !important;
        }

        section::before {
            left: -0.5in;
        }

        a {
            color: inherit;
            text-decoration: none;
        }

        .cv-header {
            border-bottom-width: 2px;
        }
    }
</style>
