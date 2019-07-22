import client from '../../contentClient';
import {normalize} from './_normalize';

export async function get(req, res, next) {
	// the `slug` parameter is available because this file
	// is called [slug].json.js
  const { slug } = req.params;

  const project = await client.getEntries({
    'content_type': 'project',
    'fields.slug': slug
  }).catch(err => {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({error: err}));
  });

  if (project != null) {
    res.setHeader('Content-Type', 'application/json');
    try {
      const retVal = JSON.stringify(project.items.map(normalize)[0]);
      res.end(retVal);
    } catch (ex) {
      res.end(JSON.stringify({error: ex.toString()}));
    }
	} else {
		next();
	}
}
