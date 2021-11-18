const mongoose = require("mongoose");



const UserSchema= new mongoose.Schema({
    username: {
        type: String,
        required: true,
        uniquire: true
    },
     email: {
        type: String,
        required: true,
        uniquire: true
    },
     password: {
        type: String,
        required: true,
        uniquire: true
    },
     profilePic: {
        type: String,
        default: ""
    },
},{timestamps: true});


const User = mongoose.model("User",UserSchema);


module.exports = User;