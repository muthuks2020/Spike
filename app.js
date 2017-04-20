const htmlStandards = require('reshape-standard')
const cssStandards = require('spike-css-standards')
const jsStandards = require('babel-preset-env')
const Contentful = require('spike-contentful')
const marked = require('marked')
const locals = {}

marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: true,
  pedantic: true,
  sanitize: false,
  smartLists: true,
  smartypants: true
})

module.exports = {
  devtool: 'source-map',
  matchers: {
    html: '*(**/)*.sgr',
    css: '*(**/)*.sss'
  },
  ignore: ['**/layout.sgr', '**/_*', '**/.*', '_cache/**', 'readme.md', 'yarn.lock'],
  reshape: htmlStandards({
    locals: (ctx) => { return Object.assign(locals, { marked: marked }) }
  }),
  postcss: cssStandards(),
  babel: { presets: [[jsStandards, { modules: false }]] },
  plugins: [
    new Contentful({
        addDataTo: locals,
        spaceId: '6n4dchzgpcdt',
          accessToken: '9a14c1d26fa975cefd86f3cd49a79a654b05d5732ed654ce57fd70753acd0e43',
          contentTypes: [
                {
                  name: 'posts',
                  id: 'article',
                  template: {
                    path: 'views/templates/_post.sgr',
                    output: (post) => { return `posts/${post.fields.slug}.html` }
                  }
                }
              ]
            })
          ]
      
