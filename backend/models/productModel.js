import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User"
  },
  name: {
    trype: String,
    required: true
  },
  rating: {
    trype: Number,
    required: true
  },
  comment: {
    trype: String,
    required: true
  },
}, {
  timestamps: true
});

const productSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User"
  },
  image: {
    type: String,
    required: true
  },
  brand: {
    type, String,
    required: true
  },
  category: {
    type, String,
    required: true
  },
  description: {
    type, String,
    required: true
  },
  reviews: [reviewSchema],
  rating: {
    type: Number,
    required: true,
    default: 0
  },
  numReviews: {
    type: Number,
    required: true,
    default: 0
  },
  price: {
    type: Number,
    required: true,
    default: 0
  },
  countInStock: {
    type: Number,
    required: true,
    default: 0
  }
}, {
  timestamps: true
});

const Product = mongoose.model("Product", productSchema);

export default Product;