/** @type {import('./$types').PageLoad} */
export async function load({ fetch, url }) {
    const [cvResponse, publicationResponse] = await Promise.all([
        fetch('/cv/cv_data.json'),
        fetch('/publication_list.json'),
    ])

    const [cvData, publicationList] = await Promise.all([
        cvResponse.json(),
        publicationResponse.json(),
    ])

    const showPublicationDetails = url.searchParams.has('show_details')

    return {
        cvData,
        publicationList,
        showPublicationDetails,
    }
}
