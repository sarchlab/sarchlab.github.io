import { error } from '@sveltejs/kit'
import { researchTopics } from '$lib/data/research_topics'
import type { PageLoad } from './$types'
import type publicationList from '../../../../../static/publication_list.json'

type Publication = (typeof publicationList)[number]

export const load: PageLoad = async ({ params, fetch }) => {
    const topic = researchTopics.find((topic) => topic.slug === params.slug)
    if (!topic) error(404, 'Research topic not found')

    const response = await fetch('/publication_list.json')
    if (!response.ok) error(500, 'Could not load publications')
    const publications: Publication[] = await response.json()

    return {
        topic,
        publications: publications.filter((publication) =>
            topic.publicationTitles.includes(publication.title)
        ),
        architecturePublications: publications.filter((publication) =>
            topic.architecturePublicationTitles?.includes(publication.title)
        ),
    }
}
