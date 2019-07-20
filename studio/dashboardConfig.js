export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5d30b340244a3f41c74274cf',
                  title: 'Sanity Studio',
                  name: 'bate-dev-studio',
                  apiId: '51ed9ae7-b136-40ed-92a3-ea71595698aa'
                },
                {
                  buildHookId: '5d30b340ad974e3d6b3003bd',
                  title: 'Blog Website',
                  name: 'bate-dev',
                  apiId: '94120623-9363-4ee4-b6a0-c9635b783759'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/colinbate/bate-dev',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://bate-dev.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
