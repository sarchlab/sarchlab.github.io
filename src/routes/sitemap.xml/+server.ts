import type { RequestHandler } from './$types'

const SITE_URL = 'https://sarchlab.org'
const paths = [
    '/',
    '/people',
    '/publication',
    '/software',
    '/news',
    '/branding',
    '/syifan',
    '/syifan/publication',
    '/syifan/teaching',
    '/syifan/cv',
    '/akita',
    '/akita/akita24',
    '/cams24',
    '/cams25',
]

const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${paths.map((path) => `  <url><loc>${SITE_URL}${path}</loc></url>`).join('\n')}
</urlset>
`

export const GET: RequestHandler = () =>
    new Response(body, {
        headers: {
            'Content-Type': 'application/xml; charset=utf-8',
            'Cache-Control': 'public, max-age=3600',
        },
    })
