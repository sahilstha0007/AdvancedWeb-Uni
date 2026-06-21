import express from "express";
import dotenv from "dotenv";
const app = express();
dotenv.config();
const port = process.env.PORT || 3000;
const HOST = "0.0.0.0";
app.get("/", (req, res) => {
  res.send("The server is onnn noww yooo yoooo guyss");
});
app.listen(port, HOST, () => {
  console.log(`Server is running at ${port}`);
});

app.get("/gaming", (req, res) => {
  res.send("Heelooo welcome to gaminnggg laptop with rtx2060");
});

app.get("/work", (req, res) => {
  res.send("Thiss laptop is for professional use casee");
});

app.get("/api/feature", (req, res) => {
  res.json({ name: "Pro Hp Pavillion", price: 900, stock: "IN Stock" });
});
