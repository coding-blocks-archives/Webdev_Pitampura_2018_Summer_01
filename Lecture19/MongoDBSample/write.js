const {MongoClient} = require('mongodb');
const mongoUrl = 'mongodb://localhost:27017';

(async () => {

  const client = await MongoClient.connect(mongoUrl)

  const mydb = client.db('mydatabase')
  // console.log(mydb)

  const tasks = mydb.collection('tasks')
  const results = await tasks.insertMany([
    {name: 'other task', priority: 2},
    {name: 'some more task', priority: 0},
    {name: 'another task', priority: 2},
    {name: 'sample task', priority: 1},
  ])
  console.log(results)


})()