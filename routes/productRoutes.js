const router = require("express").Router();
let Product = require('../models/product.model');

//Get all the products
//http://localhost:4000/api/product
router.get("/", async (req, res) => {
  try {
    const product = await Product.find()
    res.send(product)
} catch(err) {
    res.status(500).json({message: err.message})
}
});

//Save new contact from the comment form to database
//http://localhost:4000/api/contacts/new
router.post("/new", async (req, res) => {
      try {
          const product = await Product.create(req.body)
          res.send(product)
      } catch(err) {
          res.status(500).json({message: err.message})
      }
});

//http://localhost:4000/api/product/filter/electric/fender/900/1000
router.get("/filter/:type/:brand/:pricelow/:pricehigh", async (req, res) => {
    const type = req.params.type; //define req.params.type passed through url as type
    const brand = req.params.brand; //define req.params.brand passed through url as brand
    const priceLow = req.params.pricelow; //define req.params.pricelow passed through url as priceLow
    const priceHigh = req.params.pricehigh; //define req.params.pricehigh passed through url as priceHigh
    const ANY = "any"; // define ANY for easy reassignment if that value gets changed on the page
    let paramArr = []; //Create a redefinable variable paramArr with an empty array to be able to add to below with the values of the req.params
  
    if (brand !== ANY) {
      //If brand does not equal ANY check if the paramArr array has anything in it if it is empty define qryStr a string with WHERE otherwise define it as  a string with &&
      if (paramArr.length < 0) {
        qryStr = `${qryStr} WHERE  brands.brand_name = ?`;
      } else {
        qryStr = `${qryStr} && brands.brand_name = ?`;
      }
      paramArr = [...paramArr, brand]; //Spread operator to redefine paramArr with what was already in the array and add brand
    }
    if (type !== ANY) {
      if (paramArr.length < 0) {
        qryStr = `${qryStr} WHERE products.guitar_type = ?`;
      } else {
        qryStr = `${qryStr} && products.guitar_type = ?`;
      }
      paramArr = [...paramArr, type]; //Add type to array
    }
    if (priceLow !== ANY) {
      if (paramArr.length < 0) {
        qryStr = `${qryStr} WHERE price BETWEEN ? AND ?`;
      } else {
        qryStr = `${qryStr} && price BETWEEN ? AND ?`;
      }
      paramArr = [...paramArr, priceLow, priceHigh]; //Add priceLow and priceHigh to array
    }
    qryStr = `${qryStr} ORDER BY products.product_id`;
    //Connect to mySQL database and send the qryStr passing in the paramArr for what to filter for and send the result as a response
      res.send(result);
  });


  module.exports = router; //Export the endpoints to be used in another file