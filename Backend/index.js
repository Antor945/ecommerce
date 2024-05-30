const express = require('express')
const dbconnection = require('./config/dbConfig');
const router = require('./route');
const app = express()
var cors = require('cors')
const port = 8000


app.use(express.json())
dbconnection();
app.use(cors())
app.use(router)


const path = require('path')
app.use('/upload', express.static(path.join(__dirname, 'upload')))

app.listen(port, () => {
  console.log(`Port is runing ${port}`)
})