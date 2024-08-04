import { User } from '../models/user.models.js'

const GetUsers = async (req,res)=>{
    try {
        const person = await User.find({})
        console.log(person)
        res.send(person)
    } catch (err) {
        console.log('error in creating',err)
    }
}

const GetUserById = async(req,res)=>{
    try {
        const {id} = req.params;
        const person = await User.findById(id)
        if(!person){res.status(404).json({message:'user not found'})}
        console.log(person)
        res.send(person)
    } catch (err) {
        console.log('error in creating',err)
    }
}

const createUser = async(req,res)=>{
    try{   const body = req.body;
        console.log(body)
        
    const person = await User.create({
        name:body.name,
        Age:body.Age,
        Working:body.Working,
     })
    console.log("created")
    console.log(person)
    res.send(person)
    }catch(err){
        console.log('error in creating',err)
    }
 
}

const UpdateUser = async(req,res)=>{
    try {
        const {id} = req.params;
        const person = await User.findByIdAndUpdate(id, req.body)
        if(!person){res.status(404).json({message:'user not found'})}
        console.log(person)
        res.send(person)
    } catch (err) {
        console.log('error in creating',err)
    }
}

const deleteUser = async (req,res)=>{
    try {
        const {id} = req.params;
        const person = await User.findByIdAndDelete(id)
        if(!person){res.status(404).json({message:'user not found'})}
        res.json({message:'deleted successfully'})
    } catch (error) {
        console.log('error in creating',err)
    }
}

const DeleteAll =  async (req,res)=>{
    try {
        const person = await User.deleteMany({})
        res.json({message:'deleted successfully'})
    } catch (error) {
        console.log('error in creating',err)
    }
}

export {
    GetUsers,
    GetUserById,
    createUser,
    UpdateUser,
    deleteUser,
    DeleteAll
};