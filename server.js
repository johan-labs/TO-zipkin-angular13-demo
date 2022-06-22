const express = require('express')
const app = express()
const port = 8080

app.get('/hello', (req, res) => {
  console.log('got through')
	res.status(200).end()
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


