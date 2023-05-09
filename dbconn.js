// const mongoose = require('mongoose');



// mongoose.connect("mongodb://0.0.0.0:27017/Yourinfo",
//     { useNewUrlParser: true, useUnifiedTopology: true }).then(() =>
//         console.log("Connected successfully")).catch((err) =>
//             console.log(err));


const { MongoClient, ServerApiVersion } = require('mongodb');


const uri = "mongodb+srv://phuyelarjun38:fucku%40143@cluster0.yaemeeq.mongodb.net/informa_user?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
     
  })

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
   
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
