//  import mongoose from "mongoose";
//  import { DB_NAME } from "./constant";
import dotenv from "dotenv"
 import connectDB from "./db/index.js";


//  hum ek alaga se file le database folder me ya connection folder me wha pe sara code likhe aur wha se function export kraye 
//  aur index file me sirf uss function ko import kraye aur usko execute krle


dotenv.config({
    path:"./env"
})
connectDB()



 

 /* ----------This is the second(2) method of connecting to the databaes and the express server
 import express from "express";
 const app = express()

 (async() => {
    try{
       await mongoose.connect(`${process.env.
        MONGODB_URI}/${DB_NAME}`)
        app.on("error",(error) =>{
            console.log("ERROR",error);
            throw error

        })
        app.listen(process.env.PORT,() =>{
            console.log(`App is listening on port ${process.env.PORT}`);
        })

    }
    catch(error){
        console.error("ERROR",error)
        throw error
    }
 })()
 */