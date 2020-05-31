const express = require('express');
const app = express();
const mongoose = require('mongoose')
const cors = require('cors')
const requireDir = require('require-dir')
app.use(express.json())//aceita json como resposta
app.use(cors())

//startando db
mongoose.connect('mongodb://localhost:27017/liberty', {
  useNewUrlParser: true, useUnifiedTopology:true})

requireDir('./src/models')

//rotas
app.use('/api', require('./src/routes'))



app.listen(3002, ()=>{
    console.log('App is running fine on port 3002')
})