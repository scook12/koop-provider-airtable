# koop-provider-airtable

Transform your airtable data into geoservices. 

## About
[Koop.js](http://koopjs.github.io/) is a JavaScript toolkit for connecting disparate goespatial data APIs. Koop organizes data sources into input and output providers and translates GeoJSON into Geoservices via a Node server.

[Airtable](https://airtable.com/) is a popular service that tries to bridge the gap between the usability of spreadsheets and the performance and flexibility of a database. For lightweight JAMSTACK applications, Airtable can be an excellent alternative to a self-hosted or managed database.

This provider lets you register your Airtable-stored data with Koop and serve it as a geoservice that can then be consumed by Esri tools or other software that employs the geoservices specification. You can also translate the data into different output providers as needed using the Koop framework.

## Status
This repository is in early development - things may change and break at any moment. It's passed most of the small sample test suite that Koop.js ships with its example provider, but there's still work to be done. For example, at this stage, the provider assumes your dataset is composed of point geometries and no other geometries are supported.

With that said, the provider should work for basic use cases. All of the parameters are passed via a config file, an example of which is shown in the config directory of this repo.

## Known Issues and To Dos
- [] Improve test coverage
- [] Add support for runtime geojson validation
- [] Add support for non-point geometries
- [] Add support for excluding fields from source data


## Contributing

Open a PR or an issue, happy to accept all contributions!
