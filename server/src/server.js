import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

import { checkDbConnection } from "./configs/db.js";
import userRoutes from "./routes/userRoutes.js";
import { applyMiddlewares } from "./middleware/appMiddleware.js";

const app = express();
const port = 3000;

// middlewares
applyMiddlewares(app);

app.use("/api/v1", userRoutes);

app.listen(port, async () => {
  console.log(`✅ Server listening at http://localhost:${port}`);
  await checkDbConnection();
});
