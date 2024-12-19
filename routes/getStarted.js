import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    message: "Welcome to the Get Started Guide!",
    steps: [
      {
        step: 1,
        title: "Installation",
        description:
          "Make sure you have all dependencies installed using 'npm install'",
      },
      {
        step: 2,
        title: "Environment Setup",
        description: "Configure your .env file with necessary variables",
      },
      {
        step: 3,
        title: "Start the Server",
        description:
          "Run 'npm run dev' for development or 'npm start' for production",
      },
    ],
  });
});

export default router;
