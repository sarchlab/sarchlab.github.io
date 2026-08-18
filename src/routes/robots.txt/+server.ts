import type { RequestHandler } from './$types'

const body = `User-agent: *
Allow: /

Sitemap: https://sarchlab.org/sitemap.xml
`

export const GET: RequestHandler = () =>
    new Response(body, {
        headers: {
            'Content-Type': 'text/plain; charset=utf-8',
            'Cache-Control': 'public, max-age=3600',
        },
    })
