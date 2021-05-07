const Product = require("../models/product");
const shortId = require("shortid");
const { default: slugify } = require("slugify");

exports.ProductController = async (req, res) => {
  const { name, price, description, category, quantity, cretedBy } = req.body;
  var productImages = [];

  if (req.files.length > 0) {
    console.log(req.files.length);
    productImages = req.files.map((file) => {
      return { img: file.filename };
    });
  }
  try {
    const product = new Product({
      name: name,
      slug: slugify(name),

      description,
      price,
      productImages,
      quantity,
      category,
      createdBy: req.user.id,
    });
    await product.save();
    res.status(201).json({ product, files: req.files });
  } catch (error) {
    return res.status(400).json({ error });
  }
};
