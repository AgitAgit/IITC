import User from '../models/userModel.js';

export const getUsers = async function(req, res){
    try{
        const users = await User.find();
        res.json({ users:users });
    } catch (error){
        next(error);
    }
}