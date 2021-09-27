//IMPORTANT: MAKE SURE TO MAKE .env FILE!!!!!!!!!!!!!!!!!
const mongoose = require("mongoose")
const dotenv = require('dotenv')

dotenv.config()

mongoose.connection.once('open',() => {
  console.log("Mongodb connected")
})

mongoose.connection.on('error', (err) => {
  console.error(err)
})

async function connectDB() {
   await mongoose.connect(process.env.MONGO_URL,{
     useNewUrlParser:true,
     useUnifiedTopology:true
   })
  }


async function disconnectDB() {
  await mongoose.disconnect()
}



module.exports = {
    connectDB,
    disconnectDB
}