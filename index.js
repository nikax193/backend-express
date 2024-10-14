import express from "express";
import mongoose from "mongoose";
import router from "./router.js";

const port = 3000;
const DB_URL = `mongodb+srv://user123:user123@cluster0.5onyj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`

const app = express()

app.use(express.json())
app.use('/api', router)


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


