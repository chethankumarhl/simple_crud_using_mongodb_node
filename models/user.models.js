import mongoose from 'mongoose';
import { type } from "os";
const UserSchema = mongoose.Schema({
    name:String,
    Age:Number,
    Working:Boolean
});

let User = mongoose.model('user', UserSchema);

export {User}