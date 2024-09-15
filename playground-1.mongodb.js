/* global use, db */
// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

const database = 'TechGenius';
const collection = 'students';

// The current database to use.
use(database);

// Create a new collection.
db.createCollection(collection);

//insert one data
db.getCollection(collection).insertOne({
    name: 'Raniah',
    age: 19,
    subjects: ['Math', 'Science', 'History'],
    grades: {
        Math: 90,
        Science: 85,
        History: 95
    },
    addres:{
        street: '123 Main St',
        city: 'Anytown'
    }
})

//insert many data 

console.log(`The "${collection}" colllection has been created in the "${database}" database. `);

// The prototype form to create a collection:
/* db.createCollection( <name>,
  {
    capped: <boolean>,
    autoIndexId: <boolean>,
    size: <number>,
    max: <number>,
    storageEngine: <document>,
    validator: <document>,
    validationLevel: <string>,
    validationAction: <string>,
    indexOptionDefaults: <document>,
    viewOn: <string>,
    pipeline: <pipeline>,
    collation: <document>,
    writeConcern: <document>,
    timeseries: { // Added in MongoDB 5.0
      timeField: <string>, // required for time series collections
      metaField: <string>,
      granularity: <string>,
      bucketMaxSpanSeconds: <number>, // Added in MongoDB 6.3
      bucketRoundingSeconds: <number>, // Added in MongoDB 6.3
    },
    expireAfterSeconds: <number>,
    clusteredIndex: <document>, // Added in MongoDB 5.3
  }
)*/

// More information on the `createCollection` command can be found at:
// https://www.mongodb.com/docs/manual/reference/method/db.createCollection/
