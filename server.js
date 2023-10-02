import express from "express";
import populationRoutes from "./routes/populationRoutes.js";
import { readCsv } from "./csv.js";

const app = express();

app.use(express.text());

app.get("/", (req, res) => {
  res.send("Welcome to Derek's simple Node.js app");
});
app.use("/api/population", populationRoutes);

const PORT = 5555; // created var so it could be swapped depending on env

readCsv();

app.listen(PORT, console.log(`Server running on ${PORT}`));
