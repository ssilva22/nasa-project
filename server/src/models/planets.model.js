const parse = require("csv-parse")
const fs = require("fs")

//pipe() is meant to connect a readable source stream
//to a writable stream destination

const habitablePlanets = []

function isHabitable(planet) {
  return (
    planet["koi_disposition"] === "CONFIRMED" &&
    planet["koi_insol"] > 0.36 &&
    planet["koi_insol"] < 1.11 &&
    planet["koi_prad"] < 1.6
  )
}

fs.createReadStream("kepler_data.csv")
  .pipe(
    parse({
      comment: "#",
      columns: true,
    })
  )
  .on("data", (data) => {
    if (isHabitable(data)) {
      habitablePlanets.push(data)
    }
  })
  .on("error", (err) => {
    console.log(err)
  })
  .on("end", () => {
    console.log(
      habitablePlanets.map((planet) => {
        return planet["kepler_name"]
      })
    )
    console.log(`${habitablePlanets.length} habitable planets found !`)
    console.log("done")
  })

module.exports = {
  planets: habitablePlanets,
}
