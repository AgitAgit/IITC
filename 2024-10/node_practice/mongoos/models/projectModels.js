import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
   title: String,
   check: String 
});

const output = mongoose.model('Project', projectSchema);

export default output;