const mongoose = require("mongoose")
b
const planetsSchema = new mongoose.Schema({
  keplerName: {type: String, required: true},
})

module.exports = mongoose.model("Planets", planetsSchema)
