# lib

- webpack.config.js needs `mode: 'production'`
- `yarn build` prunes `'unused unexported function'`


# app

- index.js only imports one of the functions in `'./math'` (cube)
- webpack.config.js needs `mode: 'production'`
- app/package.json has `"sideEffects": false` but it does not seem to be required
- `yarn build` prunes the unused function (square)


- when changing the import from `'./math'` to `lib` square is not pruned
- see https://webpack.js.org/guides/author-libraries/#final-steps
- see https://vuetifyjs.com/en/framework/a-la-carte
- see https://rollup-plugin-vue.vuejs.org/#what-does-rollup-plugin-vue-do
