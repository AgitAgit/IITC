import User from '../models/userModel.js';

export const getAllUsers = async function(req, res, next){
    try{
        const users = await User.find();
        res.body = {};
        res.body.users = users;
        next();
    }
    catch(error){
        next(error);
    }
}

export async function addUser(req, res,  next){
    try{
        const data = req.body.user;
        const user = new User({
            name:data.name,
            email:data.email,
            password:data.password
        });
        const newUser = await user.save();
        res.status(201).json(newUser);
        next();
    } catch(error){
        next(error);
    }
}