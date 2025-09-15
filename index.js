const express = require("express");
const mongoose = require("mongoose");
const routes = require("./Routes/index_routes");
const cors = require("cors");
require("dotenv").config();
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

app.use("/", routes);

async function connectToDatabase() {
  try {
    await mongoose.connect("mongodb://localhost:27017/note_summarizer", {});
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1); // Exit the process if connection fails
  }
}

async function startServer() {
  try {
    await connectToDatabase();

    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
}

startServer();
