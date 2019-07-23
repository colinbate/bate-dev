import marked from '../../markdownify';

export const normalize = x => ({
  ...x.fields,
  mainImage: x.fields.mainImage ? x.fields.mainImage.fields.file.url : null,
  excerpt: marked(x.fields.excerpt || ''),
  body: marked(x.fields.body || '')
});
