const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const productschema = new mongoose.Schema(
 {
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
    default: "created-item"
  },
  image: {
    type: String,
    default: "https://i.pinimg.com/originals/6d/d7/56/6dd7567ef378593b7da07440227f4a39.jpg"
  },

 },
 { timestamps: true }
);
const Product = mongoose.model("product", productschema);

module.exports = Product;
