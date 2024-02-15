const express = require('express')
const app = express()
const port = 3001

app.get('/a', (req, res) => {
  res.send('Second: A!')
})

app.get('/b', (req, res) => {
    res.send('Second: B!')
  })
  

app.listen(process.env.PORT || port, () => {
  console.log(`Example app listening on port ${port}`)
})