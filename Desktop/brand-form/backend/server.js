import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// Example brand data
const brands = [
  {
    id: 1,
    name: "Toyota",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Toyota_carlogo.png",
  },
  {
    id: 2,
    name: "BMW",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg",
  },
  {
    id: 3,
    name: "Mercedes",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/90/Mercedes-Logo.svg",
  },
];

app.get("/getbrands", (req, res) => {
  res.json(brands);
});

const PORT = 4002;
app.listen(PORT, () => console.log(`✅ Server running on http://localhost:${PORT}`));
