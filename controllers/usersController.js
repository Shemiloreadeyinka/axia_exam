const  bcrypt=require('bcrypt')
const User= require('../models/user')


exports.registerUser=async (req,res) => {
    try {
        const {name,email,password,isAdmin,hobbies}=req.body
        const userExists= await User.findOne({email})
        if(userExists){ return res.status(400).json({message:"User already exists"}) }
        const hashedPassword=await bcrypt.hash(password,10)
        const user=await User.create({name,email,password:hashedPassword,isAdmin,hobbies})
        res.status(201).json({message:"User created successfully",user})}catch(error ){
            res.json({message:error.message})
        }
    
}

exports.loginUser=async(req,res)=>{
    try {
        const {email,password}=req.body
        const user=await User.findOne({email})
        if(!user){ return res.status(400).json({message:"Invalid email or password"})
            }
        const isValidPassword=await bcrypt.compare(password,user.password)
        if (!isValidPassword) {
                return res.status(400).json({message:'invalid email or password'})
        }
        res.status(200).json({message:"User logged in successfully",user})}catch(error){
            res.status(500).json({message:error.message})       
        }
}

exports.getAllUsers= async (req,res) => {
    try {
        const users=await User.find()
        res.status(200).json({users})
        }catch(error){
            res.status(500).json({message:error.message})
            }
        }

exports.updateUser= async (req,res) =>  {
    try {
        const {id}=req.params
        const update=req.body
        const updatedUser=await User.findByIdAndUpdate(id,update,{new:true})

        res.status(200).json({user})}catch(error){
            res.status(500).json({message:error.message})
        }
}

exports.deleteUser= async (req,res) =>{
    try {
        const {id}=req.params
        const user=await User.findByIdAndDelete(id)
        res.json({message:'user deleted'})
    }catch(error){
        res.status(500).json({message:error.message})
    }
}