import "dotenv/config";
import express from "express";
import routes from "./routes/index.js";
import "./db.js";

const app = express();

app.use("/api", routes);

// middleware for 404 and 500
app.use((req, res, next) => {
  res.status(404).send("Not Found");
});

app.use((error, req, res, next) => {
  console.error(error);
  res.status(500).send("Interval Server Error");
});

app.listen(8080, () => {
  console.log("Server started on port 8080");
});
