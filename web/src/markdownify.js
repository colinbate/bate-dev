import marked from 'marked';
import Prism from 'prismjs';

marked.setOptions({
  highlight: function (code, lang) {
    return Prism.highlight(code, Prism.languages[lang], lang);
  }
});

export default marked;
