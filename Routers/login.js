import express from "express"
import { generateAuthToken, User } from "../Models/users.js"
import bcrypt from "bcrypt"
import  jwt  from "jsonwebtoken"

const router = express.Router();

router.post('/login', async(req, res)=>{
    try {
        const user = await User.findOne({email: req.body.email})
        if(!user){
            return res.status(400).json({message: "invalid credentials"})
}
//validate password

const validatePassword = await bcrypt.compare(req.body.password, user.password)
if(!validatePassword){
    return res.status(400).json({message: "invalid credentials"})
}
// const authToken = jwt.sign(
//     {id: user._id},
//     process.env.SecretKey
// )

const token =  generateAuthToken(user._id)

res.status(200).json({message: 'login successful', token })
    } catch (error) {
        console.log(error)
        res.status(500).json({message: 'internal error'})
    }
})

export const loginRouter = router;