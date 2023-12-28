import express from "express";
import helmet from "helmet";
import cors from "cors";

import inventoryRouter from "./controllers/inventory.js";
import { unknownEndpoint } from "./middleware.js";

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

const PORT = 3000;

app.use("/api/inventory", inventoryRouter);

app.use(unknownEndpoint);

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
