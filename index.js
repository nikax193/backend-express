import express from "express";

const app = express()

const port = 3000

app.use(express.json())

app.post('/', (req, res) => {
  console.log(req.body)
  res.status(200).json('server worcks' )
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})