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
    default: "item"
  },
  image: {
    type: String,
    default: ""
  },

 },
 { timestamps: true }
);
const Product = mongoose.model("product", productschema);

module.exports = Product;
