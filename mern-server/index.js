
const express = require('express')
const app = express()
const port = process.env.PORT || 5000;
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const orderRoutes = require('./routes/orderRoutes');
const Order = require('./model/order');
const Order1 = require('./model/order');
const User = require('./model/user');


const secret = 'adsajlf4h4h5htt6hlsaflnzcllkcvndlknfsdsdfsd9gj';

// const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

// const blogController = require('./BlogController');

const jwt = require('jsonwebtoken');

require('dotenv').config()

// Middlewares
app.use(bodyParser.json());
app.use(cors({credentials: true, origin:'http://localhost:5173'}));
app.use(express.json());

mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.bpkxc2b.mongodb.net/medAdept`
  )
  .then(
    console.log("MongoDB Connected Successfully!")
  )
  .catch((error) => console.log("Error connecting to MongoDB", error))


  // JWT authentication 
  app.post('/jwt', async(req, res) => {
    const user = req.body;
    const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
      expiresIn: '1hr'
    })
    res.send({token})
  })

 // Backend code (server.js or app.js)

// Route to handle payment
app.post('/ordered', async (req, res) => {
  try {
    const { firstname, lastname, address, state, state2, number, info } = req.body;
    // Create a new order document
    const newOrder = new Order({ firstname, lastname, address, state, state2, number, info });
    // Save the order to the database
    await newOrder.save();
    // Respond with a success message
    res.status(200).json({ message: "Order placed successfully" });
  } catch (error) {
    console.error("Error placing order:", error);
    // Respond with an error message
    res.status(400).json({ error: "Failed to place order" });
  }
});




  // import routes here
  const medicineRoutes = require('./routes/medicineRoutes');
  const cartRoutes = require('./routes/cartRoute');
  const userRoutes = require('./routes/userRoute');
const blogRoutes = require('./routes/blogRoute');
  // const blogController = require('./BlogController');

  app.use('/all-medicines', medicineRoutes)
  app.use('/carts', cartRoutes)
  app.use('/user', userRoutes)
  app.use('/blog', blogRoutes)

  // login starts from here 
//   app.post('/login', async (req, res) => {
//     const { email, password } = req.body;
//     const userDoc = await User.findOne({ email });
  
//     // Ensure the user exists
//     if (!userDoc) {
//       return res.status(400).json('Wrong credentials');
//     }
  
//     // Compare passwords without bcrypt
//     if (password !== userDoc.password) {
//       return res.status(400).json('Wrong credentials');
//     }
  
//     // If passwords match, generate JWT token
//     jwt.sign({ email, id: userDoc._id }, secret, {}, (err, token) => {
//       if (err) {
//         console.error('Error generating token:', err);
//         return res.status(500).json('Internal server error');
//       }
//       // Set the token in a cookie and send 'ok' response
//       res.cookie('token', token, { httpOnly: true }).json('ok');
//       localStorage.setItem('token', token);
//       res.locals.token = token;
//     });
// });

app.post('/login', (req, res) => {

  const email = req.body.email
  const password = req.body.password

  const user = User.findOne({email})
  if (user) {
      // generate the json web token 
      const token = jwt.sign({ email: user.email }, 'SECRETKEY')
      res.json({ success: true, token: token })
  } else {
      // response with not authenticated 
      res.json({ success: false, message: 'Not authenticated' })
    }

})

  
  // registration parts starts here

app.post('/register' , async (req,res) => {
  const {username , password , email} = req.body;
  try {
    const userDoc = await User.create({username , password , email});
    res.json(userDoc);
    
  } catch (error) {
    res.status(400).json(error);
  }
})

  // STRIPE PAYMENT ROUTES
   
// app.post("/create-payment-intent", async (req, res) => {
//   const { price } = req.body;
//   const amount = price*100;

//   // Create a PaymentIntent with the order amount and currency
//   const paymentIntent = await stripe.paymentIntents.create({
//     amount: amount,
//     currency: "usd",

//     payment_method_types: [ "card" ],
//   });

//   res.send({
//     clientSecret: paymentIntent.client_secret,
//   });
// });
  

  // app.get('/user/:id', (req, res) => {
  //   User.findById(req.params.id).select('email')
  //     .exec()
  //     .then(doc => {
  //       if (!doc)
  //         return res.status(404).send({ message: "No user with that ID" });
  //       else
  //         res.status(200).send(doc);
  //     })
  //     .catch(err => {
  //       return res.status(500).send({
  //         err: err
  //       });
  //     })
  // })
//   app.get('/all-blogs', blogController.getAllBlogs);
// app.get('/blog/:id', blogController.getBlogById);

app.post('/orders', orderRoutes);
app.get('/orders/:userId?', async (req, res) => {
  try {
    if (req.params.userId) {
      // If userId is provided in the request, fetch orders for that specific user
      const userId = req.params.userId;
      console.log('Received request for user ID:', userId);
      const orders = await Order.find({ userId });
      console.log('Fetched orders for user ID', userId, ':', orders);
      res.status(200).json(orders);
    } else {
      // If userId is not provided, fetch all orders
      const orders = await Order.find();
      res.status(200).json(orders);
    }
  } catch (error) {
    console.error('Error fetching orders:', error.message);
    res.status(500).json({ message: error.message });
  }
});
// app.get('/orders', orderRoutes);
// app.get('/orders', async (req, res) => {
//   const userId = req.params.userId;

//   console.log('Received request for user ID:', userId);

//   try {
//     // Assuming Order.find returns a promise that resolves to an array of orders
//     const orders = await Order.find();

//     console.log('Fetched orders:', orders);

//     res.status(200).json(orders);
//   } catch (error) {
//     console.error('Error fetching orders:', error.message);
//     res.status(500).json({ message: error.message });
//   }
// });



// Fetch all orders
// app.get('/orders', async (req, res) => {
//   try {
//     const orders = await Order.find();
//     console.log('Fetched Orders:', orders);
//     res.json(orders);
//   } catch (error) {
//     console.error('Error fetching orders:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });



app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})



// Mongo DB configrtion

// const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
// const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.bpkxc2b.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// async function run() {
//   try {
//     await client.connect();
//     // CREATE A COLLECTION OF DATABASE
//     const medicineCollections = client.db("MedicineInventory").collection("medicine");
//     const cartCollections = client.db("MedicineInventory").collection("cartItems");

    // //all cart collections
    // app.post('/carts', async(req, res) => {
    //   const cartItem = req.body;
    //   const result = await cartCollections.insertOne(cartItem);
    //   res.send(result);
    // })

    // app.get('/carts', async(req, res) => {
    //   const email = req.query.email;
    //   const filter = {email: email};
    //   const result = await cartCollections.find(filter).toArray();
    //   res.send(result)
    // })

//     app.get('/carts/:id', async(req, res) => {
//       const id = req.params.id;
//       const filter = {_id: new ObjectId(id)};
//       const result = await cartCollections.findOne(filter);
//       res.send(result);
//     })

//     app.delete('/carts/:id', async(req, res) => {
//       const id = req.params.id;
//       const filter = {_id: new ObjectId(id)};
//       const result = await cartCollections.deleteOne(filter);
//       res.send(result);
//     })

//     app.put('/carts/:id', async(req, res) => {
//       const id = req.params.id;
//       const {quantity} =req.body
//       const filter = { _id : new ObjectId(id) };
//       const options = { upsert: true };

//       const updateDoc = {
//         $set: 
//         {
//           quantity: parseInt(quantity, 10)  
//         },
//       };
//       const result = await cartCollections.updateOne(filter, updateDoc, options);
          
//     })

    // // insert a medicine to the db: post method
    // app.post("/upload-medicine", async(req, res) => {
    //     const data = req.body;
    //     const result = await medicineCollections.insertOne(data);
    //     res.send(result);
    // })

    // // get all medicines from database
    // // app.get("/all-medicines", async(req,res) => {
    // //     const medicine = await medicineCollections.find();
    // //     const result = await medicine.toArray();
    // //     res.send(result)
    // // })

    // // Update medicine : patch or update method
    // app.patch("/medicine/:id", async(req, res) => {
    //     const id = req.params.id;
    //     // console.log(id);
    //     const updateMedicineData =  req.body;

    //     const filter = {_id: new ObjectId(id)};
    //     const options = { upsert: true };
    

    //     const updateDoc = {
    //         $set : {
    //             ...updateMedicineData
    //         }
    //     }
    //     // update
    //     const result = await medicineCollections.updateOne(filter, updateDoc, options);
    //     res.send(result);
    // })

    // // DElete medicine
    // app.delete("/medicine/:id", async(req, res) => {
    //     const id = req.params.id;
    //     const filter = {_id: new ObjectId(id)};
    //     const result = await medicineCollections.deleteOne(filter);
    //     res.send(result);
    // })

    // //find by category
    // app.get("/all-medicines", async(req, res) => {
    //     let query = {};
    //     if(req.query?.category) {
    //         query = {category: req.query.category}
    //     }
    //     const result = await medicineCollections.find(query).toArray();
    //     res.send(result);
    // })
    // app.get("/medicine/:id", async(req, res) => {
    //   const id = req.params;
    //   const filter = { _id: new ObjectId(id)};
    //   const result = await medicineCollections.findOne(filter);
    //   res.send(result);
    // })

//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     // await client.close();
//   }
// }
// run().catch(console.dir);



