const mongoose = require("mongoose");
const { Schema } = mongoose;
const ProductSchema = new Schema({
  product: {
    type: String,
    require: true,
  },
  quantity: {
    type: Number,
    required: false,
  },
  price: {
    type: Number,
    require: false,
  },
 
  description: {
    type: String,
    require: true,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});
module.exports = mongoose.model("Product", ProductSchema);


