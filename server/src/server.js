const http = require("http")
const dotenv = require('dotenv')
const {connectDB}  = require("./config/db")
const {loadPlanetsData} = require("./models/planets.model")
const app = require("./app")

const PORT = process.env.PORT || 8000

const server = http.createServer(app)
dotenv.config()

async function startServer() {
  await connectDB()
  await loadPlanetsData()

  server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
  })
}

startServer()
