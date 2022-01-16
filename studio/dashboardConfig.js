export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
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
                  buildHookId: '61e392c5f2195130d9f2c314',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-6uddc7je',
                  apiId: '894f5bbe-5c55-4d1c-9989-b78a6256097c'
                },
                {
                  buildHookId: '61e392c58eef0b3760256bea',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-7h68b6zh',
                  apiId: '897ef2ea-139f-44d7-9301-f6e6cdebd4ab'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/bdk6000/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-7h68b6zh.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
