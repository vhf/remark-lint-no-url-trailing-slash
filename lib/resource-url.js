const url = require('url');
const rule = require('unified-lint-rule');
const visit = require('unist-util-visit');

function checkURL(tree, file) {
  visit(tree, 'link', node => {
    const nodeUrl = node.url;
    if (nodeUrl) {
      const parsed = url.parse(nodeUrl);
      const target = `${parsed.protocol}//${parsed.host}`;

      if (nodeUrl === `${target}/`) {
        file.message(`Remove trailing slash (${target})`, node);
      }
    }
  });
}

module.exports = rule('remark-lint:no-url-trailing-slash', checkURL);
