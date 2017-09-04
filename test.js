const test = require('tape');
const remark = require('remark');
const lint = require('remark-lint');
const noURLTrailingSlash = require('./');

const processor = remark().use(lint).use(noURLTrailingSlash);

const nok = '[example.com](http://example.com/)';
const ok = '[example.com](http://example.com)';

test('remark-lint-no-url-trailing-slash', t => {
  t.deepEqual(
    processor.processSync(nok).messages.map(String),
    ['1:1-1:35: Remove trailing slash (http://example.com)'],
    'should warn when URLs end in trailing slashes'
  );

  t.deepEqual(
    processor.processSync(ok).messages.map(String),
    [],
    'should work'
  );

  t.end();
});
