const {MongoClient} = require('mongodb');
const mongoUrl = 'mongodb://localhost:27017';

(async () => {

  const client = await MongoClient.connect(mongoUrl)

  const mydb = client.db('mydatabase')
  // console.log(mydb)

  const tasks = mydb.collection('tasks')

  const taskItems = await tasks.find({}).toArray()
  console.log(taskItems)


})()