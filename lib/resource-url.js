const visit = require('unist-util-visit');
const url = require('url');

function checkURL(ast, file, preferred, done) {
  visit(ast, 'link', (node) => {
    const href = node.href;
    const parsed = url.parse(node.href);
    const target = parsed.protocol + '//' + parsed.host;

    if (href === target + '/') {
      file.warn('Remove trailing slash (' + target + ')', node);
    }
  });

  done();
}

module.exports = checkURL;
