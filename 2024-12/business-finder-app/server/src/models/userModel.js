import { Schema, model } from "mongoose";

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  plan: { type: String, enum: ["Standard", "Gold", "Platinum"], default: "Standard" },
  savedBusinesses: [{ type: Schema.Types.ObjectId, ref: "Business" }],
},
{
  timestamps:true,
  versionKey:false
});

export const User = model("User", userSchema);



// profilePic: {
//   type: String,
//   required: false,
//   default: "https://loremflickr.com/500/500?lock=8792450353592873",
// },