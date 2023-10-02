import { appendCsv, updateCsv, populations } from "../csv.js";

const getPopulation = (req, res) => {
  const state = req.params.state.toLowerCase();
  const city = req.params.city.toLowerCase();
  if (populations[state] !== undefined && populations[state][city] !== undefined) {
    res.status(200).json({ population: populations[state][city] });
  } 
  else {
    res
      .status(400)
      .json({ message: `ERROR: ${city} of ${state} is not a valid state/city combination.` });
  }
};
const updatePopulation = (req, res) => {
  const state = req.params.state.toLowerCase();
  const city = req.params.city.toLowerCase();
  const population = req.body;
  if (isNaN(population)) {
    res.status(400).json({ message: "ERROR: Population must be a numeric value." });
  } 
  else if (populations[state] === undefined) {
    res.status(400).json({ message: `ERROR: ${state} is not a valid state input.` });
  } 
  else if (populations[state][city] === undefined) {
    // valid state, new city to be created
    populations[state][city] = population;
    res.status(201).json({ message: `New city ${city} of ${state} with population ${population} was created.` });
    appendCsv(`${city},${state},${population}`);
  } 
  else {
    //valid state city combo
    const oldEntry = `${city},${state},${populations[state][city]}`;
    const newEntry = `${city},${state},${population}`;
    populations[state][city] = population;
    res.status(200).json({ message: `${city} of ${state} population was updated to ${population}.` });
    updateCsv(oldEntry, newEntry);
  }
};

export { getPopulation, updatePopulation };
