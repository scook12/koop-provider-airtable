/**
 * This module provides the `getData` function for the koop provider
 */
const config = require('../config/secrets.json');
const Airtable = require('airtable');
const base = new Airtable({ apiKey: config.secrets.apiKey }).base(config.secrets.appId);
const table = base(config.params.tableName);

// TODO: Add support for non-point geometries (polyline, polygon, etc)
function Model() { }

Model.prototype.getData = function (req, callback) {
  try {
    table.select().eachPage(function page(records) {
      let geo = toGeojson(records, config.params.longitudeFieldName, config.params.latitudeFieldName);
      return callback(null, geo)
    })
  } catch (err) {
    return callback(err);
  }
}

const toPointFeature = (record, xCol, yCol) => {
  // convert returned record to geojson format using xCol, yCol,  and included fields
  // TODO: Add support for including only certain fields
  let values = { id: record.id, fields: record.fields }
  if (values.fields && values.fields.hasOwnProperty(xCol) && values.fields.hasOwnProperty(yCol)) {
    return {
      type: 'Feature',
      properties: values.fields,
      geometry: {
        type: 'Point',
        coordinates: [values.fields[xCol], values.fields[yCol]]
      }
    }
  } else {
    console.error(`Record ${record.id} missing necessary properties to create geojson`)
  }
}

const toGeojson = (records, xCol, yCol) => {
  // TODO: add support for geometry discovery
  return {
    type: 'FeatureCollection',
    features: records.map(rec => toPointFeature(rec, xCol, yCol))
  }
}

module.exports = Model