import marked from '../../markdownify';

export const normalize = x => ({
  ...x.fields,
  mainImage: x.fields.mainImage.fields.file.url,
  intro: marked(x.fields.intro),
  details: null
});
