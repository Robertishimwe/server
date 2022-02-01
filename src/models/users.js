// const mongoose = require("mongoose")
import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt')

const UserSchema = new Schema({
    userName:{
        type: 'string',
        required: true,
        min:6,
        max: 60

    },
    userEmail:{
        type: 'string',
        required: true,
        min:50,
        max: 300

    },
    userPassword:{
        type: 'string',
        required: true,
        min:6,
        max:12
    },
    userRole: {
        type: 'string',
        default:"user"
    },
    CreatedDate:{
        type: 'date',
        default: Date.now()
    },
    UpdatedDate:{
        type: 'date',
        default: Date.now()
    }
});

UserSchema.pre('save', async function(next){
const salt = await bcrypt.genSalt(10);
this.userPassword = await bcrypt.hash(this.userPassword,salt)
next()
});




const User =  mongoose.model('User' , UserSchema)

module.exports = User;