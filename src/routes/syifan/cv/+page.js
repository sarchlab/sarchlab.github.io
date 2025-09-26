/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
    const [cvResponse, publicationResponse] = await Promise.all([
        fetch('/cv/cv_data.json'),
        fetch('/publication_list.json'),
    ])

    const [cvData, publicationList] = await Promise.all([
        cvResponse.json(),
        publicationResponse.json(),
    ])

    return {
        cvData,
        publicationList,
    }
}
