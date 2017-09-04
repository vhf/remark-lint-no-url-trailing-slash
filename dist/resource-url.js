'use strict';

var url = require('url');
var rule = require('unified-lint-rule');
var visit = require('unist-util-visit');

function checkURL(tree, file) {
  visit(tree, 'link', function (node) {
    var nodeUrl = node.url;
    if (nodeUrl) {
      var parsed = url.parse(nodeUrl);
      var target = parsed.protocol + '//' + parsed.host;

      if (nodeUrl === target + '/') {
        file.message('Remove trailing slash (' + target + ')', node);
      }
    }
  });
}

module.exports = rule('remark-lint:no-url-trailing-slash', checkURL);