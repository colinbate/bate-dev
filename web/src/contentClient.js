import contentful from 'contentful'

const client = contentful.createClient({
  space: process.env.CONTENT_SPACE,
  accessToken: process.env.CONTENT_TOKEN
});

export default client
