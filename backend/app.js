const express = require("express");
const app = express();
require('dotenv').config();
const bodyParser = require('body-parser')
const cors = require("cors");
const db = require('./db/connection');
const PORT=process.env.PORT
const productRouter = require('./router/product.route')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}))

app.use(express.urlencoded({extended : true}))
app.use(express.json());
app.use(cors())

app.use('/', productRouter)

app.listen(PORT,()=>{
    console.log(`Server listening on port ${PORT}...`)
});