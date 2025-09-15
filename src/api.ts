import express from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/user.routes.js";
import { applySecurity } from "./middleware/security.middleware.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Security + Middleware
applySecurity(app);
app.use(express.json());

// Routes
app.use("/api/users", userRoutes);

// Root
app.get("/", (_req, res) => {
  res.send("🚀 MyExpress TypeScript API läuft!");
});

// Server starten
app.listen(PORT, () => {
  console.clear();
  console.log(`✅ Server läuft auf http://localhost:${PORT}`);
});
