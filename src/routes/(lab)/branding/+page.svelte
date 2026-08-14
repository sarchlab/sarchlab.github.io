<script>
    const colors = [
        {
            name: 'Deep Space Blue',
            hex: '#023047',
            role: 'The workhorse: text, headings, links, and buttons. 13.8:1 on white.',
        },
        {
            name: 'Blue Green',
            hex: '#219EBC',
            role: 'The brand hue: logo, borders, and chip backgrounds. Not for small text on white (3.1:1).',
        },
        {
            name: 'Sky Blue',
            hex: '#8ECAE6',
            role: 'Dark-mode text, headings, and the dark-mode logo; light tint backgrounds.',
        },
        {
            name: 'Amber Flame',
            hex: '#FFB703',
            role: 'Highlight badges with Deep Space text on top (6.8:1); accent text on dark (10.9:1).',
        },
        {
            name: 'Tiger Orange',
            hex: '#FB8500',
            role: 'Energetic accent for large decorative elements only. Never small text on white (2.5:1).',
        },
    ]

    const logos = [
        {
            title: 'Full logo, light backgrounds',
            note: 'Blue Green #219EBC',
            img: '/branding/huscarl_full_light.svg',
            png: '/branding/huscarl_full_light.png',
            dark: false,
        },
        {
            title: 'Full logo, dark backgrounds',
            note: 'Sky Blue #8ECAE6',
            img: '/branding/huscarl_full_dark.svg',
            png: '/branding/huscarl_full_dark.png',
            dark: true,
        },
        {
            title: 'Lockup, light backgrounds',
            note: 'Blue Green #219EBC',
            img: '/branding/huscarl_lockup_light.svg',
            png: '/branding/huscarl_lockup_light.png',
            dark: false,
        },
        {
            title: 'Lockup, dark backgrounds',
            note: 'Sky Blue #8ECAE6',
            img: '/branding/huscarl_lockup_dark.svg',
            png: '/branding/huscarl_lockup_dark.png',
            dark: true,
        },
        {
            title: 'Mark, light backgrounds',
            note: 'Blue Green #219EBC',
            img: '/branding/huscarl_mark_light.svg',
            png: '/branding/huscarl_mark_light.png',
            dark: false,
            square: true,
        },
        {
            title: 'Mark, dark backgrounds',
            note: 'Sky Blue #8ECAE6',
            img: '/branding/huscarl_mark_dark.svg',
            png: '/branding/huscarl_mark_dark.png',
            dark: true,
            square: true,
        },
    ]
</script>

<svelte:head>
    <title>HUSCARL | Branding</title>
</svelte:head>

<div class="w-full max-w-4xl">
<h2 class="sec-title">Branding</h2>

<p class="mt-2 text-sm">
    Assets and guidelines for HUSCARL (Human-Centered System &amp; Computer
    Architecture Lab). Use these files as-is; please do not restyle the logo or
    introduce colors outside the palette below.
</p>

<h3 class="mt-8 mb-3 font-bold">Logo</h3>

<div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
    {#each logos as l}
        <div class="border rounded-lg overflow-hidden">
            <div
                class="flex items-center justify-center p-6 {l.dark
                    ? 'bg-[#100e1b]'
                    : 'bg-white'}"
            >
                <img
                    src={l.img}
                    alt={l.title}
                    class={l.square ? 'h-24' : 'h-12 max-w-full'}
                />
            </div>
            <div
                class="flex items-center justify-between px-4 py-2 text-xs bg-muted"
            >
                <span><b>{l.title}</b> · {l.note}</span>
                <span>
                    <a href={l.img} download>SVG</a>
                    ·
                    <a href={l.png} download>PNG</a>
                </span>
            </div>
        </div>
    {/each}
</div>


<h3 class="mt-8 mb-3 font-bold">Colors — the “Ocean &amp; Amber” palette</h3>

<div class="grid grid-cols-2 sm:grid-cols-5 gap-3">
    {#each colors as c}
        <div class="border rounded-lg overflow-hidden">
            <div class="h-14" style="background: {c.hex}"></div>
            <div class="px-2.5 py-2">
                <div class="text-sm font-bold">{c.name}</div>
                <div class="text-xs font-mono">{c.hex}</div>
                <div class="text-xs mt-1">{c.role}</div>
            </div>
        </div>
    {/each}
</div>

<p class="mt-3 text-xs">
    Neutrals: white and the site ink <span class="font-mono">#100e1b</span>
    (dark-mode background). These five colors plus the neutrals are the entire system
    — please do not introduce new colors.
</p>

<h3 class="mt-8 mb-3 font-bold">Usage</h3>

<ul class="text-sm list-disc ml-5 mt-2">
    <li>
        Web contexts use the single-color lockups above: Blue Green on light,
        Sky Blue on dark.
    </li>
    <li>
        Print materials (posters, slides, signage) use the full logo with the
        tagline.
    </li>
    <li>
        Deep Space Blue carries text; Blue Green identifies the brand; the
        ambers accent. Never set small text in Amber Flame or Tiger Orange on
        white.
    </li>
    <li>
        The wordmark is fixed vector outlines, not live text — do not retype
        it in a different font.
    </li>
    <li>Keep clear space around the logo of at least the height of the “H.”</li>
</ul>
</div>
