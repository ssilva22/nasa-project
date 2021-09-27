//IMPORTANT: MAKE SURE TO MAKE .env FILE!!!!!!!!!!!!!!!!!
const mongoose = require("mongoose")
const MONGO_URL = `mongodb+srv://nasa-api-admin:hzA2mnmI3WgmZrOd@cluster-nasa.zdbfw.mongodb.net/nasa?retryWrites=true&w=majority`

mongoose.connection.once('open',() => {
  console.log("Mongodb connected")
})

mongoose.connection.on('error', (err) => {
  console.error(err)
})

async function connectDB() {
   await mongoose.connect(MONGO_URL,{
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