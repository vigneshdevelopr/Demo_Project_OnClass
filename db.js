import mongoose from "mongoose";
import  jwt  from "jsonwebtoken"


export function createConnection(){
    const params={
        useNewUrlParser:true,
        useUnifiedTopology:true,
    }
    try {
        mongoose.connect(process.env.Mongourl, params)
        console.log("mongodb Connected")
    } catch (error) {
        console.log("Error occured during connection");
    }
}