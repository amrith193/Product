const mongoose = require(`mongoose`)
const mongoURL = "mongodb://localhost:27017/Product"
const ConnectToMongo = async ()=>{
    try {
        await mongoose.connect(mongoURL)
        console.log("connected mongo sucessfully")
    } catch (error) {
        console.log ("conected mongo unsucessfully")
    }
}
module.exports = ConnectToMongo