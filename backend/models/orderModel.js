import mongoose from "mongoose";

const orderSchema = mongoose.Schema(
  {
    customerDetails: {
      name: { type: String, required: true },
      phone: { type: String, requried: true },
      guests: { type: Number, required: true },
    },
    orderStatus: {
      type: String,
      required: true,
    },
    orderDate: {
      type: Date,
      default: Date.now(),
    },
    bills: {
      total: { type: Number, required: true },
      tax: { type: Number, required: true },
      totalWithTax: { type: Number, required: true },
    },
    items: [],
    table: { type: mongoose.Schema.Types.ObjectId, ref: "Table" },
  },
  { timestamps: true }
);

const Order = mongoose.model("Order", orderSchema);
export default Order;
