import mongoose from "mongoose";

const connectDb = (link)=>{
    return mongoose.connect(link)
}
// module.exports = connectDb;
export {connectDb}