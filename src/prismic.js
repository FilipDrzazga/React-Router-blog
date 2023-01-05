import * as prismic from '@prismicio/client'

export const repositoryName = 'euro-blog';

export const client = prismic.createClient(repositoryName, {
    accessToken: 'MC5ZNllxUFJjQUFQeVFuV1Jw.77-9Q--_ve-_ve-_vRhj77-977-977-9M3Bu77-9HDhp77-977-9fO-_vWzvv73vv70UMu-_vSN_NO-_vWQ',
  routes: [
    {
      type: 'header',
      path: '/countries',
    },
  ],
});