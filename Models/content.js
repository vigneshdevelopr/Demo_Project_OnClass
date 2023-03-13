import mongoose from "mongoose";
import  jwt  from "jsonwebtoken"


const {ObjectId}= mongoose.Schema


const contentSchema = new mongoose.Schema(
    {
        companyName: {
            type: String,
            required: true,
        },
        position: {
            type: String,
            required: true,
        },
        package: {
            type: String,
        },
        date: {
            type: Date,
            required: true,
        },
        questions: {
            type: String,
            required: true,
        },
        user: {
            type: ObjectId,
            ref: "user",
        },
    }
)


const Content = mongoose.model('content', contentSchema)
export {Content} 