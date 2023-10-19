const express = require('express')
const app = express()
require('dotenv').config()
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const port = process.env.PORT || 3000
var cors = require('cors')

app.use(cors())
app.use(express.json())




const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ujemn7v.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    const database = client.db("dekhboDB");
    const netflixCollection = database.collection("netflixProducts");
    const disneyCollection = database.collection("disneyProducts");
    const chorkiCollection = database.collection("chorkiProducts");
    const hboCollection = database.collection("hboProducts");
    const amazonCollection = database.collection("amazonProducts");
    const huluCollection = database.collection("huluProducts");
    const cartCollection = database.collection("cartProducts");

// Post Methods for different brands and cart

    app.post('/netflix', async(req,res)=>{
        const product = req.body;
        console.log('hello', product)
        const result = await netflixCollection.insertOne(product);
        res.send(result)
      } )

    app.post('/disney', async(req,res)=>{
        const product = req.body;
        console.log('hello', product)
        const result = await disneyCollection.insertOne(product);
        res.send(result)
      } )

    app.post('/chorki', async(req,res)=>{
        const product = req.body;
        console.log('hello', product)
        const result = await chorkiCollection.insertOne(product);
        res.send(result)
      } )

    app.post('/hbo', async(req,res)=>{
        const product = req.body;
        console.log('hello', product)
        const result = await hboCollection.insertOne(product);
        res.send(result)
      } )

    app.post('/amazon', async(req,res)=>{
        const product = req.body;
        console.log('hello', product)
        const result = await amazonCollection.insertOne(product);
        res.send(result)
      } )

    app.post('/hulu', async(req,res)=>{
        const product = req.body;
        console.log('hello', product)
        const result = await huluCollection.insertOne(product);
        res.send(result)
      } )

    app.post('/cart', async(req,res)=>{
        const product = req.body;
        console.log('hello', product)
        const result = await cartCollection.insertOne(product);
        res.send(result)
      } )

    //   Get methods for brands and cart

    app.get('/netflix', async(req,res)=>{
        const cursor = netflixCollection.find()
        const result = await cursor.toArray()
        res.send(result)
    })

    app.get('/netflix/:id', async(req,res)=>{
        const id = req.params.id;
        const query = {_id: new ObjectId(id)}
        console.log('i need data for id :', id);
        const product =  await netflixCollection.findOne( query );
        res.send(product);
    })

    app.get('/hulu', async(req,res)=>{
        const cursor = huluCollection.find()
        const result = await cursor.toArray()
        res.send(result)
    })

    app.get('/hulu/:id', async(req,res)=>{
        const id = req.params.id;
        const query = {_id: new ObjectId(id)}
        console.log('i need data for id :', id);
        const product =  await huluCollection.findOne( query );
        res.send(product);
    })

    app.get('/amazon', async(req,res)=>{
        const cursor = amazonCollection.find()
        const result = await cursor.toArray()
        res.send(result)
    })

    app.get('/amazon/:id', async(req,res)=>{
        const id = req.params.id;
        const query = {_id: new ObjectId(id)}
        console.log('i need data for id :', id);
        const product =  await amazonCollection.findOne( query );
        res.send(product);
    })

    app.get('/chorki', async(req,res)=>{
        const cursor = chorkiCollection.find()
        const result = await cursor.toArray()
        res.send(result)
    })

    app.get('/chorki/:id', async(req,res)=>{
        const id = req.params.id;
        const query = {_id: new ObjectId(id)}
        console.log('i need data for id :', id);
        const product =  await chorkiCollection.findOne( query );
        res.send(product);
    })

    app.get('/disney', async(req,res)=>{
        const cursor = disneyCollection.find()
        const result = await cursor.toArray()
        res.send(result)
    })

    app.get('/disney/:id', async(req,res)=>{
        const id = req.params.id;
        const query = {_id: new ObjectId(id)}
        console.log('i need data for id :', id);
        const product =  await disneyCollection.findOne( query );
        res.send(product);
    })

    app.get('/hbo', async(req,res)=>{
        const cursor = hboCollection.find()
        const result = await cursor.toArray()
        res.send(result)
    })

    app.get('/hbo/:id', async(req,res)=>{
        const id = req.params.id;
        const query = {_id: new ObjectId(id)}
        console.log('i need data for id :', id);
        const product =  await hboCollection.findOne( query );
        res.send(product);
    })

    app.get('/cart', async(req,res)=>{
        const cursor = cartCollection.find()
        const result = await cursor.toArray()
        res.send(result)
    })

    app.get('/cart/:id', async(req,res)=>{
        const id = req.params.id;
        const query = {_id: new ObjectId(id)}
        console.log('i need data for id :', id);
        const product =  await cartCollection.findOne( query );
        res.send(product);
    })



    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})