const mongoose = require("mongoose");

//need to add post count or post ids to the user, followers and following.
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      unique: false,
    },
    plainPassword: {
      type: String,
      required: false
    },
    role: {
      type: String,
      enum: [],
      required: false,
      default: 'user'
    }
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("User", userSchema);


// profilePic: {
//   type: String,
//   required: false,
//   default: "https://loremflickr.com/500/500?lock=8792450353592873",
// },