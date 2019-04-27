const express = require('express')
const app = express()
const port = 9153

app.get('/', (req, res) =>
  res.send('Greetings from treerawatch...')
)

app.listen(port, () =>
  console.log(`App running on port ${port}.`)
)
