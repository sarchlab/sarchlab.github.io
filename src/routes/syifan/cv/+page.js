import yaml from 'js-yaml'

/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
    const cvResponse = await fetch('/cv/cv_data.yml')

    if (!cvResponse.ok) {
        throw new Error(`Failed to load CV data: ${cvResponse.status}`)
    }

    const cvText = await cvResponse.text()
    const cvData = yaml.load(cvText)

    if (!cvData || typeof cvData !== 'object') {
        throw new Error('Invalid CV data format')
    }

    return {
        cvData,
    }
}
