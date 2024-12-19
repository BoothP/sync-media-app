import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import getStartedRoutes from "./routes/getStarted.js";

// Load environment variables
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to the API",
    endpoints: {
      getStarted: "/get-started",
    },
  });
});

// Mount the get-started routes
app.use("/get-started", getStartedRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Something went wrong!" });
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export default app;
