const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    googleId: String,
    username: String,
    profilepicture: String,
    email: {
        type: String,
        required: true,
        unique: true,
        min: 6,
        max: 255
      },
      password: { type: String, min: 6, max: 1024 },

},{
    timestamps: true
  });

mongoose.model('users',userSchema);