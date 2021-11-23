const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
require('dotenv').config()
const {PORT} = process.env;
const userRouter = require('./routes/user.routes')
const productRouter = require('./routes/product.routes')
const authRouter = require('./routes/auth.routes')
const cartRouter = require('./routes/cart.routes')
const verifyToken = require('./routes/verifyToken')
//connect to mongodb
mongoose.connect(
  process.env.MONGODB_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
)
mongoose.connection.once('open', () => {
  console.log('connected to mongoose')
})

app.use(cors())

app.use(
  express.json(),
  productRouter,
  authRouter,
  userRouter
)

app.use('/', verifyToken, cartRouter)

// app.get('/secret', verifyToken, function(req, res) {
//   res.status(201).json('secret')
// })

// app.get('/', (req, res)=> {
//   res.send('hallo')
// })


app.listen(PORT, ()=> console.log(`Listening to port ${PORT}`)); 