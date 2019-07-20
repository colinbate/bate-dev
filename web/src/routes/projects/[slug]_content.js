import blocksToHtml from '@sanity/block-content-to-html'
import client from '../../sanityClient'
import serializers from '../../components/serializers'

export async function get(req, res, next) {
	// the `slug` parameter is available because this file
	// is called [slug].json.js
	const { slug } = req.params;

	const filter = '*[_type == "project" && slug.current == $slug][0]'
  const projection = `{
    ...,
    body[]{
      ...,
      children[]{
        ...,
        _type == 'authorReference' => {
          author->
        }
      }
    }
  }`

  const query = filter; // + projection
  const project = await client.fetch(query, { slug }).catch(err => {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({error: err}));
  });

  if (project != null) {
    res.setHeader('Content-Type', 'application/json');
    try {
      const retVal = project.body ? JSON.stringify({
        project: {
          ...project,
          body: blocksToHtml({blocks: project.body, serializers, ...client.clientConfig })
        }
      }) : JSON.stringify({project});
      res.end(retVal);
    } catch (ex) {
      res.end(JSON.stringify({error: ex.toString()}));
    }
	} else {
		next();
	}
}
