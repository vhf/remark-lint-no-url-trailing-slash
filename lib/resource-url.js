const visit = require('unist-util-visit');
const url = require('url');

function checkURL(ast, file, preferred, done) {
  visit(ast, 'link', (node) => {
    const nodeUrl = node.url;
    if (nodeUrl) {
      const parsed = url.parse(nodeUrl);
      const target = parsed.href;

      if (target.endsWith('/')) {
        file.warn('Remove trailing slash (' + target + ')', node);
      }
    }
  });

  done();
}

module.exports = {
  'trailing-slash': checkURL
};
