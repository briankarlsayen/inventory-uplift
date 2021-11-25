const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const cartschema = new mongoose.Schema(
 {
  userId: {
    type: ObjectId,
    required: true
  },
  products: [
    {
      productId: {
        type: ObjectId,
        default: null
      },
      quantity: {
        type: Number,
        default: 1
      },
      name: {
        type: String,
        required: true,
        default: ""
       },
       function: {
         type: String,
         required: true,
         default: ""
       },
       buy_price: {
         type: Number,
         default: 0
       },
       sell_price: {
         type: Number,
         default: 0
       },
       stock: {
         type: Number,
         default: 0
       },
       type: {
         type: String,
         default: "item"
       },
       image: {
         type: String,
         default: "https://i.pinimg.com/originals/6d/d7/56/6dd7567ef378593b7da07440227f4a39.jpg"
       },
    }
  ]
 },
 { timestamps: true }
);
const Cart = mongoose.model("cart", cartschema);

module.exports = Cart;
