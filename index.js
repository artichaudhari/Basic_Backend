require('dotenv').config()
const express = require('express')
const app = express()
const port = 2011              //total virtual port are 65,535

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/twitter', (req, res) => {
    res.send('chaudhariarti')
  })
app.get('/youtube',(req,res) => {
    res.send("<h2>Chai aur code</h2>")
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})