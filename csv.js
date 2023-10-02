import fs from "fs";
import { parse } from "csv";

let populations = {};

function readCsv() {
  fs.createReadStream("./city_populations.csv")
    .pipe(parse({ delimiter: ",", from_line: 1 }))
    .on("data", function (row) {
      const [city, state, population] = row;
      if (!(state in populations)) {
        populations[state] = {};
      }
      populations[state][city] = parseInt(population);
    })
}

function updateCsv(oldEntry, newEntry) {
  fs.readFile("city_populations.csv", "utf8", function (err, data) {
    var regex = new RegExp(oldEntry, "g");
    var updatedData = data.replace(regex, newEntry);

    fs.writeFile("city_populations.csv", updatedData, "utf8", function (err) {
      if (err) return console.log(err);
    });
  });
}

function appendCsv(newEntry) {
  fs.appendFile("city_populations.csv", newEntry + "\n", (err) => {
    if(err) console.log(err)
  });
};

export { readCsv, updateCsv, appendCsv, populations };