const express = require('express')
const mongoose = require('mongoose')
const app = express()
require('dotenv').config()
const {PORT} = process.env;
const userRouter = require('./routes/user.routes')
const productRouter = require('./routes/product.routes')
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

app.use(
  express.json(),
  userRouter,
  productRouter
)

app.get('/', (req, res)=> {
  res.send('hallo')
})

app.listen(PORT, ()=> console.log(`Listening to port ${PORT}`)); 