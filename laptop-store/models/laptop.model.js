import mongoose from "mongoose";
const LaptopSchema = new mongoose.Schema({
  modelName: String,
  brand: String,
  price: Number,
});

const Laptop = mongoose.models.Laptop || mongoose.model("Laptop", LaptopSchema);

export default Laptop;
