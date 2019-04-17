const path = require('path')

module.exports = {
  components: 'src/components/**/index.js',
  skipComponentsWithoutExample: true,
  styleguideComponents: {
    Wrapper: path.join(__dirname, 'src/styleguide/StyleguideWrapper')
  },
  title: 'The Store by BuildIt Style-Guide',
  theme: {
    color: {
      link: '#9C2AA0',
      linkHover: '#E89700'
    },
    fontFamily: {
      base: '"Open Sans", sans-serif'
    }
  },
}
