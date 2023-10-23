const express = require  ('express')
const ConnectTOMongo=require ('./db')
const cors = require('cors')
ConnectTOMongo()

const app = express()
app.use(cors())
app.use(express.json())
port = 7000

app.use('/api/product',require('./Router/ProductRoute'))
app.use('/api/register',require('./Router/Registerroute'))
app.use('/uploads/user',express.static('./uploads/user'))
app.listen(port,()=>{
    console.log("api is listening port "+port);

})