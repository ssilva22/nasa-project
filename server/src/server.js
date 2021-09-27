const http = require("http")
const mongoose = require("mongoose")
const app = require("./app")

const {loadPlanetsData} = require("./models/planets.model")

const PORT = process.env.PORT || 8000

const MONGO_URL = `mongodb+srv://nasa-api-admin:znQq67o2GZDVBmij@cluster-nasa.zdbfw.mongodb.net/nasa?retryWrites=true&w=majority`

const server = http.createServer(app)

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })

    console.log(`MongoDB Connected: ${conn.connection.host}`)
  } catch (err) {
    console.error(`Error: ${err.message}`)
  }
}

async function startServer() {
  await loadPlanetsData()

  server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
  })
}
connectDB()
startServer()
