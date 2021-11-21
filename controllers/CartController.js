const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Cart = require('../model/CartModel.js')
const { ObjectId } = require("mongodb");

exports.createCart = async (req, res) => {
  const cart = new Cart(req.body)
  try {
    const savedCart = await cart.save()
    res.status(201).json(savedCart)
  } catch(err) {
    res.status(500).json({message: err})
  }
}

exports.viewCart = async (req, res) => {
  try {
    const cart = await Cart.find()
    res.status(201).json(cart)
  } catch(err) {
    res.status(500).json({message: err})
  }
}

exports.addCart = async (req, res) => {
  const {user, product, quantity} = req.body
  //get specific cart
  //update product array
  const addToCart = await Cart.findOne({userId: user})

  if(addToCart) {
    console.log(addToCart)
    
    const filteredCart = await addToCart.products(
      (data) => data.productId.includes(product)
    )
    console.log(filteredCart)
  }
  // filteredCart.products.quantity ++
  // await addToCart.products.push({productId: product, quantity})

  try {
    // const cart = await Cart.findOneAndUpdate({userId: user}, {...addToCart})
    res.status(201).json({message: "Successfully added to cart"})
  } catch(err) {
    res.status(500).json({message: err})
  }
}