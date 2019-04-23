const path = require('path');

module.exports = {
  skipComponentsWithoutExample: true,
  styleguideComponents: {
    Wrapper: path.join(__dirname, 'src/styleguide/StyleguideWrapper')
  },
  ribbon: {
    url: 'https://github.com/BuildIt-Poland/store-checkout',
    text: 'The Store by BuildIt'
  },
  title: 'The Store by BuildIt Style-Guide',
  usageMode: 'expand',
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
        'src/components/OrderSummary/OrderSummary.js',
        'src/components/AddressDetails/AddressDetails.js'
      ],
    },
    {
      name: 'Feedback',
      components: [
        'src/components/Text/Text.js',
        'src/components/Error/Error.js',
        'src/components/ModalTrigger/ModalTrigger.js'
      ],
    }
  ]
};
