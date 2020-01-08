const NextI18Next = require('next-i18next').default;
const Locize = require('i18next-locize-backend');

const NextI18NextInstance = new NextI18Next({
  use: [Locize],
  initImmediate: false,
  defaultNS: null,
  ns: [],
  otherLanguages: ['de'],
  backend: {
    projectId: 'fd5ded6e-86a1-4353-b574-ea2c87acb21f',
    referenceLng: 'en-US'
  }
});

module.exports = NextI18NextInstance;