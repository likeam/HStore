import Product from "../models/productModel.js";
import Order from "../models/orderModel.js";

const createOrder = async (req, res) => {
  try {
    const { orderItems, shippingAddress, paymentMethods } = req.body;

    if (orderItems && orderItems.length === 0) {
      res.status(400);
      throw new Error("No Order items");
    }

    const itemsFromDB = await Product.find({
      _id: { $in: orderItems.map((ord) => ord._id) },
    });

    const dbOrderItem = orderItems.map((itemsFromClient) => {
      const matchingItemFromDB = itemsFromDB.find(
        (itemFromDB) => itemFromDB._id.toString() === itemsFromClient._id
      );
    });
  } catch (error) {
    console.error(error);
    res.status(500).jaon({ error: error.message });
  }
};

export { createOrder };
