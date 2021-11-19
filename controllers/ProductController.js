const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Product = require('../model/ProductModel.js')
const { ObjectId } = require("mongodb");

exports.createProduct = async (req, res) => {
  const {
    name,
    buy_price,
    sell_price,
    stock,
    image,
    functions
  } = req.body

  Product({
    name,
    buy_price,
    sell_price,
    stock,
    image,
    function: functions
  })
  .save()
  .then((result) => {
    res.status(201).json({result})
  })
  .catch((err) => {
    res.status(500).json({message: err})
  })
}

exports.viewAllProduct = async (req, res) => {
  Product.find()
  .then(result => {
    res.status(201).json({result})
  })
  .catch(err => {
    res.status(500).json({message: err})
  }) 
}

exports.viewProduct = async (req, res) => {
  const _id = req.params.id
  Product.find({_id})
  .then(result => {
    res.status(201).json({result})
  })
  .catch(err => {
    res.status(500).json({message: err})
  }) 
}

exports.updateProduct = async (req, res) => {
  const _id = req.params.id
  const {
    name,
    buy_price,
    sell_price,
    stock,
    image,
    functions
  } = req.body

  try {
    const updateOneProduct = await Product.findByIdAndUpdate({_id}, 
      {
        name,
        buy_price,
        sell_price,
        stock,
        image,
        function: functions
      }).exec()
    if(!updateOneProduct) return res.status(500).json({message: "No product found"})
    return res.status(201).json({message: "Successfully updated"})
  } catch(err) {
    return res.status(500).json({message: err})
  }
}

exports.deleteProduct = async (req, res) => {
  const _id = req.params.id
  try {
    const deleteOneProduct = await Product.findByIdAndDelete({_id}).exec()

    if(!deleteOneProduct) return res.status(500).json({message: "No product found"})

    return res.status(201).json({message: "Successfully deleted"})
  } catch(err) {
    res.status(500).json({message: err})
  }
}