import Laptop from "../models/laptop.model.js";

export const getLaptops = async (req, res) => {
  const laptops = await Laptop.find();
  res.json(laptops);
};

export const addLaptop = async (req, res) => {
  const newLaptops = new Laptop(req.body);
  await newLaptops;
  res.json({ message: "Laptop Added!" });
};
