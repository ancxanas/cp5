import { Router } from "express";

const inventory = [
  {
    item_id: 1,
    name: "Smartphone",
    brand: "TechMaster",
    model: "X3",
    price: 499.99,
    quantity: 50,
  },
  {
    item_id: 2,
    name: "Laptop",
    brand: "Quantum",
    model: "Vortex Pro",
    price: 899.99,
    quantity: 30,
  },
  {
    item_id: 3,
    name: "Smartwatch",
    brand: "Gizmo",
    model: "TimeSync",
    price: 149.99,
    quantity: 100,
  },
  {
    item_id: 4,
    name: "Headphones",
    brand: "SonicWave",
    model: "NoiseBlast 500",
    price: 79.99,
    quantity: 75,
  },
];

const inventoryRouter = new Router();

inventoryRouter.get("/", (req, res) => {
  try {
    res.json(inventory);
  } catch (err) {
    res.status(404).end();
  }
});

inventoryRouter.post("/", (req, res) => {
  const { body } = req;

  if (
    !body.name ||
    !body.brand ||
    !body.model ||
    !body.price ||
    !body.quantity
  ) {
    return res.status(400).json({
      error: "missing required field",
    });
  }

  try {
    const newItem = {
      item_id: inventory.length + 1,
      ...body,
    };

    inventory.push(newItem);

    res.json(newItem);
  } catch (err) {
    res.status(500).end();
  }
});

export default inventoryRouter;
