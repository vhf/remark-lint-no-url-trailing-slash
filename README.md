# remark-lint-no-url-trailing-slash

This [remark-lint](https://github.com/wooorm/remark-lint) rule was created for [free-programming-books-lint](https://github.com/vhf/free-programming-books-lint) to enforce [free-programming-books](https://github.com/vhf/free-programming-books) [formatting guidelines](https://github.com/vhf/free-programming-books/blob/master/CONTRIBUTING.md#formatting).

This rule checks that the host part of a URL has no extra trailing slash. It only applies to links.

```Text
<!-- Invalid -->

[example.com](http://example.com/)

<!-- Valid -->

[example.com](http://example.com)
```

## Using the rule

### Via `.remarkrc`

```bash
npm install -g remark-cli
npm install remark-lint remark-lint-no-url-trailing-slash
```

Then, set up your `.remarkrc`:

```JSON
{
  "plugins": [
    "lint",
    "lint-no-url-trailing-slash"
  ]
}
```

Now you can use the following command to run the lint:

```bash
remark xxx.md
```

### Via CLI

```bash
npm install -g remark-cli
npm install remark-lint remark-lint-no-url-trailing-slash
remark -u lint -u lint-no-url-trailing-slash xxx.md
```
