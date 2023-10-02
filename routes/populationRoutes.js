import express from "express";
import {
  getPopulation,
  updatePopulation,
} from "../controllers/populationController.js";

const router = express.Router();
router
    .route("/state/:state/city/:city")
    .get(getPopulation)
    .put(updatePopulation);


export default router;