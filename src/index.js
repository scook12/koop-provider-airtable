const provider = {
  type: 'provider',
  name: 'koop-provider-airtable',
  hosts: false,
  disableIdParam: true,
  Model: require('./model'),
  version: require('../package.json').version
}

module.exports = provider