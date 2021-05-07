const express = require("express");
const router = express.Router();
const Auth = require("../../middleware/auth");

const { CartController } = require("../../controllers/cart");

router.post("/cart", Auth, CartController);
//router.get("/category/getcategory", getCategoris);

module.exports = router;
