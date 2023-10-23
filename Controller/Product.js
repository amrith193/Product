const { param } = require("../Router/ProductRoute");
const ProductSchema = require("../Modal/ProductSchema");

const Insert = async (req, res) => {
  try {
    const { product, quantity, price, description } = req.body;

    const data = await new ProductSchema({ product, quantity, price, description });
    const saveProduct = await data.save();

    console.log("inserted sucessfuly");
    res.send({ "inserted sucessfdully": true, saveProduct });
  } catch (error) {
    console.error("internal server error", error);
  }
};

const View = async (req, res) => {
  try {
    const data = await ProductSchema.find();
    console.log(data);
    res.json(data);
  } catch (error) {
    console.log("Error Occured", error);
    res.status(500).json("some internal error");
  }
};
const Delete = async (req, res) => {
  
  try {
    let data = await ProductSchema.findById(req.params.id);
    if (!data) {
      console.log("data is not found");
      return res.status(404).send("data not exists");
    } else {
      data = await ProductSchema.findByIdAndDelete(req.params.id);
      console.log("data deleted successfully");
      res.json({ success: "sucessfully", "deleted data": data });
    }
  } catch (error) {
    console.log("Error Occured", error);
    res.status(500).json("some internal error");
  }
};




const Update = async (req, res) => {
  const {
    product, quantity, price, description 
  } = req.body;
  try {
    const newdata = {};
    if (product) [(newdata.product = product)];
    if (quantity) [(newdata.quantity = quantity)];
    if (price) [(newdata.price = price)];
    if (description) [(newdata.description = description)];
   
    let data = await ProductSchema.findById(req.params.id);
    if (!data) {
      console.log("data is not found");
      return res.status(404).send("data not exists");
    } else {
      data = await ProductSchema.findByIdAndUpdate(req.params.id, {
        $set: newdata,
      });
      console.log("data updated successfully");
      res.json({ success: "sucessfully", "updated data": data });
    }
  } catch (error) {
    console.log("Error Occured", error);
    res.status(500).json("some internal error");
  }
};

module.exports = { Insert, View, Delete, Update };
