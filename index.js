import express from "express";
import mongoose from "mongoose";
import Post from "./Post.js";

const port = 3000;
const DB_URL = `mongodb+srv://user123:user123@cluster0.5onyj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`

const app = express()

app.use(express.json())

app.post('/', async (req, res) => {
  const {author, title, content, picture} = req.body
  const post = await Post.create({author, title, content, picture})
  res.status(200).json('server work with mongodb' )
})

async function startApp() {
  try {
   await mongoose.connect(DB_URL)

    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`)
    })

  } catch (e) {
    console.log(e)
  }
  
}


startApp()


