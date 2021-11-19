const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const cartschema = new mongoose.Schema(
 {
  userId: {
    type: ObjectId,
    require: true
  },
  products: [
    {
      productId: {
        type: ObjectId
      },
      quantity: {
        type: Number,
        default: 1
      }
    }
  ]
 },
 { timestamps: true }
);
const Cart = mongoose.model("cart", cartschema);

module.exports = Cart;
