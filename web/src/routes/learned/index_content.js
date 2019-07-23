import client from '../../contentClient';
import {normalize} from './_normalize';

export async function get(_, res, next) {
	const content = await client.getEntries({
    'content_type': 'learning'
  }).catch(err => {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({error: err}));
  });

  if (content != null) {
    res.setHeader('Content-Type', 'application/json');
		res.end(JSON.stringify(content.items.map(normalize)));
	} else {
		next();
	}
}
