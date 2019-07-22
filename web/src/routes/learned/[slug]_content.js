import client from '../../contentClient'

export async function get(req, res, next) {
	// the `slug` parameter is available because this file
	// is called [slug].json.js
	const { slug } = req.params;

	const filter = '*[_type == "post" && slug.current == $slug][0]'
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

  const query = filter + projection
  const post = await client.fetch(query, { slug }).catch(err => {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({error: err}));
  });

  if (post != null) {
    res.setHeader('Content-Type', 'application/json');
		res.end(JSON.stringify({
      post: {
        ...post,
        body: blocksToHtml({blocks: post.body, serializers, ...client.clientConfig })
      }
    }));
	} else {
		next();
	}
}
