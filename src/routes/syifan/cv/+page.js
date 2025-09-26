/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
    const response = await fetch('/cv/cv_data.json')
    const cvData = await response.json()

    return {
        cvData,
    }
}
