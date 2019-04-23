const path = require('path');

module.exports = {
  skipComponentsWithoutExample: true,
  styleguideComponents: {
    Wrapper: path.join(__dirname, 'src/styleguide/renderers/Wrapper'),
    LogoRenderer: path.join(__dirname, 'src/styleguide/renderers/Logo'),
    TableOfContentsRenderer: path.join(__dirname, 'src/styleguide/renderers/TableOfContents'),
    ComponentsListRenderer: path.join(__dirname, 'src/styleguide/renderers/ComponentsList')
  },
  title: 'The Store Styleguide',
  assetsDir: path.join(__dirname, 'src/styleguide/assets'),
  template: {
    favicon: '/favicon.ico',
  },
  theme: {
    color: {
      link: '#008484',
      linkHover: '#00a09f',
      sidebarBackground: '#222222',
      codeBase: '#ffffff',
      codeBackground: '#222222',
      codeComment: '#74975c',
      codeKeyword: '#bc8abd',
      codeProperty: '#a9dbfb',
      codeString: '#ce9d86',
      codeFunction: '#46d9d8'
    },
    fontFamily: {
      base: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
      monospace: '"Menlo", "Consolas", monospace'
    }
  },
  styles: {
    Code: {
      code: {
        fontSize: '16px',
        borderRadius: '4px',
        background: '#e8e8e8',
        padding: '2px'
      }
    }
  },
  sections: [
    {
      name: 'Introduction',
      content: 'src/styleguide/content/Introduction.md'
    },
    {
      name: 'Style',
      sections: [
        {
          name: 'Logo',
          content: 'src/styleguide/content/Logo.md'
        },
        {
          name: 'Colors',
          content: 'src/styleguide/content/Colors.md'
        },
        {
          name: 'Icons',
          content: 'src/styleguide/content/Icons.md'
        },
        {
          name: 'Typography',
          content: 'src/styleguide/content/Typography.md'
        }
      ]
    },
    {
      name: 'Basic Inputs',
      components: [
        'src/components/FormInput/index.js',
        'src/components/FormSelect/index.js',
        'src/components/FormCreditCardInput/index.js',
        'src/components/Checkbox/index.js',
        'src/components/QuantityInput/index.js',
        'src/components/TextLink/index.js'
      ],
    },
    {
      name: 'Layout',
      components: [
        'src/components/Header/index.js',
        'src/components/Navigation/index.js',
        'src/components/InfoBanner/index.js',
        'src/components/Headline/index.js',
        'src/components/SectionHeader/index.js',
        'src/components/NextStep/index.js'
      ],
    },
    {
      name: 'Content',
      components: [
        'src/components/Item/index.js',
        'src/components/ShippingDetails/index.js',
        'src/components/CartItemsList/index.js',
        'src/components/ItemsList/index.js',
        'src/components/OrderSummary/index.js',
        'src/components/AddressDetails/index.js'
      ],
    },
    {
      name: 'Feedback',
      components: [
        'src/components/Text/Text.js',
        'src/components/Error/index.js',
        'src/components/ModalTrigger/index.js'
      ],
    }
  ]
};
