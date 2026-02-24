const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: [true, "user name already exists"],
    required: [true, "user name requireed"],
  },
  email: {
    type: String,
    unique: [true, "email already exists"],
    required: [true, "email is required"],
  },
  password: {
    type: String,
    requried: [true, "password is required"],
    select: false,
  },
  bio: String,
  profileImage: {
    type: String,
    default:
      "https://ik.imagekit.io/yxsuwmigo/24-248253_user-profile-default-image-png-clipart-png-download.webp",
  },
});

const userModel = mongoose.model("users", userSchema);

module.exports = userModel;
