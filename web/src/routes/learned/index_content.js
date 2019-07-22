import client from '../../contentClient'

export async function get(_, res, next) {
	const content = await client.fetch('*[_type == "post" && defined(slug.current) && publishedAt < now()]|order(publishedAt desc)').then(posts => {
    return { posts };
  }).catch(err => {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({error: err}));
  });

  if (content != null) {
    res.setHeader('Content-Type', 'application/json');
		res.end(JSON.stringify(content));
	} else {
		next();
	}
}
