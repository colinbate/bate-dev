import {format} from 'date-fns'

export default {
  name: 'project',
  type: 'document',
  title: 'Project',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'Titles should be catchy, descriptive, and not too long'
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'Some frontends will require a slug to be set to be able to show the post',
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
      name: 'projectUrl',
      type: 'url',
      title: 'URL',
      description: 'Where the project is hosted if it is something online.'
    },
    {
      name: 'repoUrl',
      type: 'url',
      title: 'Repo URL',
      description: 'Where the code for the project is hosted, if public.'
    },
    {
      name: 'issuesUrl',
      type: 'url',
      title: 'Issues URL',
      description: 'Where is the list of tasks for this? Trello, Zenkit, Workflowy...'
    },
    {
      name: 'status',
      type: 'string',
      title: 'Status',
      description: 'Project status.',
      options: {
        list: ['deployed', 'in-development', 'in-planning', 'abandoned', 'idea', 'retired']
      }
    },
    {
      name: 'publishedAt',
      type: 'datetime',
      title: 'Published at',
      description: 'This can be used to schedule post for publishing'
    },
    {
      name: 'mainImage',
      type: 'mainImage',
      title: 'Main image'
    },
    {
      name: 'excerpt',
      type: 'excerptPortableText',
      title: 'Excerpt',
      description:
        'This ends up on summary pages, on Google, when people share your post in social media.'
    },
    {
      name: 'body',
      type: 'bodyPortableText',
      title: 'Body'
    }
  ],
  orderings: [
    {
      name: 'publishingDateAsc',
      title: 'Publishing date new–>old',
      by: [
        {
          field: 'publishedAt',
          direction: 'asc'
        },
        {
          field: 'title',
          direction: 'asc'
        }
      ]
    },
    {
      name: 'publishingDateDesc',
      title: 'Publishing date old->new',
      by: [
        {
          field: 'publishedAt',
          direction: 'desc'
        },
        {
          field: 'title',
          direction: 'asc'
        }
      ]
    },
    {
      name: 'title',
      title: 'Title alphabetical',
      by: [
        {
          field: 'title',
          direction: 'asc'
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'title',
      publishedAt: 'publishedAt',
      slug: 'slug',
      media: 'mainImage',
      status: 'status'
    },
    prepare ({title = 'No title', publishedAt, slug, media, status}) {
      const dateSegment = format(publishedAt, 'YYYY')
      const path = `/${dateSegment}/${slug.current}/`
      return {
        title,
        media,
        subtitle: (publishedAt ? path : 'Missing publishing date') + ' • ' + status
      }
    }
  }
}
