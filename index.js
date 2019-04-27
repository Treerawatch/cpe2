const express = require('express')
const app = express()
const port = 12500

app.get('/', (req, res) =>
  res.send('Greetings from treerawatch...')
)

app.listen(port, () =>
  console.log(`App running on port ${port}.`)
)
