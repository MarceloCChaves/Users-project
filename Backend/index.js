// config inicial
const express = require('express')
const mongoose = require('mongoose')
const app = express()
const cors = require('cors')
app.use(cors())

require('dotenv').config()

// forma de ler JSON // middlewares
app.use(
  express.urlencoded({
    extended: true
  })
)

app.use(express.json())

// Rotas da api
const personRoutes = require('./routes/personRoutes')
app.use('/person', personRoutes)

// rota inicial / endpoint
app.get("/", (req, res) => {

  // mostrar req

  res.json({message: 'hello world'})

})


// entregar uma porta
const DB_USER = process.env.DB_USER
const DB_PASSWORD = process.env.DB_PASSWORD

mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@apicluster.kiphkfo.mongodb.net/?retryWrites=true&w=majority`)
.then(() => {
  console.log("Servidor conectado")
  app.listen(3000)
})
.catch()