# babel-plugin-stylis

> babel-plugin-stylis is a babel plugin to precompile a style string into a minified and optimized version. For so it uses the [`stylis`](https://github.com/thysultan/stylis.js) package.

## Install

```shell
$ npm i babel-plugin-stylis # or yarn add babel-plugin-stylis
```

## Usage:

add the plugin to your `.babelrc`:

```json
{
  "plugins": [
    [
      "babel-plugin-stylis",
      {
        /* options */
      }
    ]
  ]
}
```

From now on the `css` tagged template expression will be available in your code:

```js
var s = css`
  .some-class {
    display: flex;
  }
`;
```

transforming your css to a minified and optimized version:

```js
var s = ".some-class{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}";
```

## License

[MIT](https://github.com/malbernaz/babel-plugin-stylis/blob/master/LICENSE)
