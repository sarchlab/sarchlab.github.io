/** @type {import('./$types').PageLoad} */
export async function load({ params, fetch }) {
    const data = await fetch('/publication_list.json')
    const list = await data.json()

    return {
        publications: list,
    }
}
