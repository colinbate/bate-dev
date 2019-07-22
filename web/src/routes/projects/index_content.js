import client from '../../contentClient';
import {normalize} from './_normalize';

export async function get(_, res, next) {
	const content = await client.getEntries({
    'content_type': 'project'
  }).catch(err => {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({error: err}));
  });

  if (content != null) {
    const items = content.items.map(normalize);
    res.setHeader('Content-Type', 'application/json');
		res.end(JSON.stringify(items));
	} else {
		next();
	}
}
