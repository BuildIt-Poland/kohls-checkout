const path = require('path')

module.exports = {
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
  sections: [
    {
      name: 'Introduction',
      content: 'src/styleguide/introduction.md'
    },
    {
      name: 'Style',
      sections: [
        {
          name: 'Logo',
          content: 'src/styleguide/logo.md'
        },
        {
          name: 'Colors',
          content: 'src/styleguide/colors.md'
        },
        {
          name: 'Icons',
          content: 'src/styleguide/icons.md'
        },
        {
          name: 'Typography',
          content: 'src/styleguide/typography.md'
        }
      ]
    },
    {
      name: 'UI Components',
      components: 'src/components/**/index.js'
    }
  ]
}

// content: 'docs/ui.md',
