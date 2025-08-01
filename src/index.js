// require('dotenv').config({path: './env'})
//  import mongoose from 'mongoose'
// import {DB_NAME} from "./constants"

// import express from "express"
import dotenv from "dotenv"
import connectDB from "./db/index.js";

dotenv.config({
  path:'./env'
})



connectDB()


// we wont use function here willl use async await becoz talking to dtabase is time taking 

/*(async()=>{
  try{
    mongoose.connect(`${process.env.MONGODB_URI}/{DB_NAME}`)
    app.on("errror",(error) => {
      console.log("ERRR: ", error);
      throw err
    })
    app.listen(process.env.PORT,()=> {
      console.log(`App is listening on port ${process.env.PORT}`);
    })
  }
  catch(error){
    console.log("Error:",error)
    throw err
  }
})() */
