import { response } from 'express';
import User from '../models/userModel.js';

export const getUsers = async function(req, res, next){
    try{
        const users = await User.find();
        res.json({ users:users });
        next();
    } catch (error){
        next(error);
    }
}

export const addUser = async function(req, res, next){
    console.log("@ss");
    try{
        const data = req.body.user;
        console.log(data);
        const user = new User({
            username:data.username,
            name:data.name,
            password:data.password,
            email:data.email
        });
        const result = await user.save();
        res.json({ result:result });
        next();
    } catch(error){
        next(error);
    }
}