const Cart = require("../models/cart");
exports.CartController = async (req, res) => {
  try {
    const findedCart = await Cart.findOne({ user: req.user.id });

    if (findedCart) {
      const product = req.body.cartItems.product;
      const sameProduct = findedCart.cartItems.find(
        (c) => c.product == product
      );
      if (sameProduct) {
        const updatedCart = await Cart.findOneAndUpdate(
          { user: req.user.id, "cartItems.product": product },
          {
            $set: {
              "cartItems.$": {
                ...req.body.cartItems,
                quantity: sameProduct.quantity + req.body.cartItems.quantity,
                price: sameProduct.price + req.body.cartItems.price,
              },
            },
          },
          { new: true }
        );
        res.status(200).json({ updatedCart });
      } else {
        const updatedCart = await Cart.findOneAndUpdate(
          { user: req.user.id },
          {
            $push: {
              cartItems: req.body.cartItems,
            },
          },
          { new: true }
        );
        res.status(200).json({ updatedCart });
      }
    } else {
      const cart = new Cart({
        user: req.user.id,
        cartItems: [req.body.cartItems],
      });
      await cart.save();
      res.json({ cart });
    }
  } catch (e) {
    res.status(400).json({ e });
  }
};
