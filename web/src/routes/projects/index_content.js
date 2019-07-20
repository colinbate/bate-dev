import client from '../../sanityClient'

export async function get(_, res, next) {
	const content = await client.fetch('*[_type == "project" && defined(slug.current) && publishedAt < now()]|order(title asc)').then(projects => {
    return { projects };
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
