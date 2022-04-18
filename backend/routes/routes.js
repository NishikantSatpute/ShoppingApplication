const express = require('express')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const { jwtkey } = require('../keys')
const router = express.Router();
const User = mongoose.model('User');

//for signup route
router.post('/signup',async(req,res)=>{
    
    const { email, password,firstName,lastName,otp } = req.body;
    //const {name} = req.body;
    console.log("req send",req.body)
    try{
    const user = new User({email,password,firstName,lastName,otp});
    const newuser = await  user.save();
    console.log(newuser)
    const token = jwt.sign({ userId: user._id }, jwtkey, { expiresIn: 86400})
        console.log("token",token)
         res.json({ token: token })
    }
    catch(err)
    {
        return res.send(err)
    }
})

//for signin route
router.post('/signin', async (req, res) => {
    const { email, password } = req.body;
    if(!email||!password){
        return res.status(422).send({error:"must provide email or password"})
    }
    const user = await User.findOne({email})
    if (!user) {
        return res.status(422).send({ error: "must provide email or password" })
    }
    try{
        await user.comparePassword(password);
        const token = jwt.sign({userId:user._id},jwtkey)
        res.send({token})
    }
    catch(err){
        return res.status(422).send({error: "must provide email or password"})
    }
})

module.exports = router
