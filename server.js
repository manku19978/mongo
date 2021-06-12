const express = require('express');
const app = express();

// DB setup
const MongoClient = require('mongodb').MongoClient
let db;

(async function(){
    try {
        const client = await MongoClient.connect('mongodb://localhost:27017')
        db = client.db('ecom')
    } catch (err) {
        console.log(err)
    }
})();

app.get('/', async (req, res) => {
    const result = await db.collection('products').find().toArray()
    res.send(result)
})

app.listen(4000, () => console.log('Listening on port 4000'))