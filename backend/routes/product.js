//Using Router function from express
const router = require("express").Router();
const { verifyTokenAndAdmin } = require("./verifyToken");

// const CryptoJS = require("crypto-js");
const Product = require("../models/Product");

//CREATE PRODUCT and ONLY ADMIN CAN CREATE PRODUCT
// router.post("/", verifyTokenAndAdmin, async (req, res) => {
router.post("/", async (req, res) => {
  const newProduct = new Product(req.body);

  try {
    const savedProduct = await newProduct.save();
    res.status(200).json(savedProduct);
  } catch (error) {
    res.status(500).json(error);
  }
});

//Update Product
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      {
        //Take everything inside req.body and then set/update them
        $set: req.body,
      },
      //To make it work we have to add new:true
      { new: true }
    );

    //Sending updated response back to user if there is no any errors
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json(error);
  }
});

//DELETE PRODUCT
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json("Product has been deleted!");
  } catch (error) {
    res.status(500).json(error);
  }
});

//GET SINGLE PRODUCT
//In this case, users, admin, and guests can find products, so we don't have to pass "veryfyToken" middleware
router.get("/find/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL PRODUCTS
// router.get("/", verifyTokenAndAdmin, async (req, res) => {
router.get("/", async (req, res) => {
  const queryNew = req.query.new;
  const queryCategory = req.query.category;
  // console.log("queryNew: " + queryNew);
  // console.log("queryCategory: " + queryCategory);

  try {
    let products;

    if (queryNew) {
      products = await Product.find().sort({ createdAt: -1 }).limit(1);
    } else if (queryCategory) {
      //Checking to see if queryCategory we created above is inside the categories in the database(array) then fetch that product
      products = await Product.find({
        categories: {
          $in: [queryCategory],
        },
      });
    } else {
      //There is no query then find all the products
      products = await Product.find();
    }

    res.status(200).json(products);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
