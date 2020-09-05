const test = require('tape')
const Model = require('../src/model')
const model = new Model()
const Koop = require('koop')

test('should fetch from api and translate features', t => {
  model.getData({}, (err, geojson) => {
    t.error(err)
    t.equal(geojson.type, 'FeatureCollection', 'creates a feature collection object')
    t.ok(geojson.features, 'has features')
    const feature = geojson.features[0]
    t.equal(feature.type, 'Feature', 'has proper type')
    t.equal(feature.geometry.type, 'Point', 'creates point geometry')
    t.deepEqual(feature.geometry.coordinates, [-90.34038, 29.26782], 'translates geometry correctly')
    t.ok(feature.properties, 'creates attributes')
    // t.equal(feature.properties.expires, new Date(1484268019000).toISOString(), 'translates expires field correctly')
    // t.equal(feature.properties.expires, new Date(1484268019000).toISOString(), 'translates serviceDate field correctly')
    // t.equal(feature.properties.expires, new Date(1484268019000).toISOString(), 'translates time field correctly')
    t.end()
  })
})

test('should register with koop instance and serve features', t => {
  const koop = new Koop()
  koop.register(model, {})
  t.ok(koop.providers)
  t.end()
})