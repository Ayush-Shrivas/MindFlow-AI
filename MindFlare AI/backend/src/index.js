import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import intentRoutes from "./routes/intent.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/intent", intentRoutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
