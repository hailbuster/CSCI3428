curl --request POST \
  'https://data.mongodb-api.com/app/data-ychvt/endpoint/data/beta/action/findOne' \
  --header 'Content-Type: application/json' \
  --header 'Access-Control-Request-Headers: *' \
  --header 'api-key: ny462OXD5VSPF37iQDLHtCHPeRamF42EAKSF6uQAw1lFQ67UaQNnG4Q6zWibbFl5' \
  --data-raw '{
      "dataSource": "Cluster0",
      "database": "learn-data-api",
      "collection": "people",
      "filter": { "name": "John Sample" }
  }'
