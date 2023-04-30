// MODELS
import User from "../Models/User.js";

export const AddUser = async(req,res)=>{

    const newUser = new User(req.body);

    try{
        await newUser.save()
        res.status(201).json({status:1,message:'User created Successfully.'});
    }catch(err){
        res.status(409).json({status:0,message:'Failed to create User.'});
    }
}

export const GetUsers = async(req,res)=>{
    try{
        const Users = await User.find();
        res.status(200).json(Users);
    }catch(err){
        res.status(404).json({status:0,message:'Not Found'});
    }
}


export const GetUser = async(req,res)=>{
    try{
        const UserData = await User.find({_id:req.params.userId});
        res.status(200).json(UserData);
    }catch(err){
        res.status(404).json({status:0,message:'Not Found'});
    }
}

export const editUser = async(req,res)=>{
    const editUser = new User(req.body);
    try{
        await User.updateOne({_id:req.params.userId},editUser);
        res.status(200).json({message:"OK"});
    }catch(err){
        res.status(409).json({status:0,message:err.message});
    }
}

export const deleteUser = async(req,res)=>{
    try{
        await User.deleteOne({_id:req.params.userId});
        res.status(200).json({message:"OK"});
    }catch(err){
        res.status(409).json({status:0,message:err.message});
    }
}