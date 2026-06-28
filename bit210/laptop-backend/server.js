const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const laptops = [
  { id: 1, name: "Dell XPS 13", price: 4500 },
  { id: 2, name: "MacBook Air M2", price: 5200 },
  { id: 3, name: "Lenovo ThinkPad X1", price: 4800 },
];

app.get("/api/laptops-json", (req, res) => res.json(laptops));

app.get("/api/laptops-xml", (req, res) => {
  res.type("application/xml");

  let xml = "<laptops>";

  laptops.forEach((laptop) => {
    xml += `
      <laptop>
        <id>${laptop.id}</id>
        <name>${laptop.name}</name>
        <price>${laptop.price}</price>
      </laptop>`;
  });

  xml += "</laptops>";

  res.send(xml);
});

app.post("/api/order", (req, res) => {
  res.json({
    message: "Order received successfully!",
    order: req.body,
  });
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
