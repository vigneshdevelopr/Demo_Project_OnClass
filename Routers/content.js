import express from "express";
import  jwt  from "jsonwebtoken"


const router = express.Router();

router.get('/content', async(req, res)=>{
try {
res.status(200).json({message:'content will diplay now!'})
} catch (error) {
    console.log(error);
    res.status(500).json({message:'internal server error'})
}
})








export const contentRouter = router;