require('dotenv').config()

const express = require('express')
const app = express()

const port = process.env.PORT

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req,res) => {
  res.send('twitter.com')
})

app.get('/login', (req,res) => {
  res.send("<h1>Please login</h1>")
})

app.get('/youtube',(req,res)=>{
  res.send("<h2>Chai Aur Code</h2>");
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
   