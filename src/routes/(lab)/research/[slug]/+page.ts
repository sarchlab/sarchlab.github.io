import { error } from '@sveltejs/kit'
import { researchTopics } from '$lib/data/research_topics'
import type { PageLoad } from './$types'
import type publicationList from '../../../../../static/publication_list.json'

type Publication = (typeof publicationList)[number]

export const load: PageLoad = async ({ params, fetch }) => {
    const topicIndex = researchTopics.findIndex(
        (topic) => topic.slug === params.slug
    )
    const topic = researchTopics[topicIndex]
    if (!topic) error(404, 'Research topic not found')

    const previous = researchTopics[
        (topicIndex - 1 + researchTopics.length) % researchTopics.length
    ]
    const next = researchTopics[(topicIndex + 1) % researchTopics.length]

    const response = await fetch('/publication_list.json')
    if (!response.ok) error(500, 'Could not load publications')
    const publications: Publication[] = await response.json()

    return {
        topic,
        previousTopic: { slug: previous.slug, title: previous.title },
        nextTopic: { slug: next.slug, title: next.title },
        publications: publications.filter((publication) =>
            topic.publicationTitles.includes(publication.title)
        ),
        architecturePublications: publications.filter((publication) =>
            topic.architecturePublicationTitles?.includes(publication.title)
        ),
    }
}
