import User from "../models/UserModel.js"

export const getUser = async(req, res) =>{
    try {
        const respone = await User.findAll();
        res.status(200).json(respone);
    } catch (error) {
        console.log(error.message);
    }
}

export const getUserById = async(req, res) =>{
    try {
        const respone = await User.findOne({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json(respone);
    } catch (error) {
        console.log(error.message);
    }
}

export const createUser = async(req, res) =>{
    try {
        await User.create(req.body);
        res.status(201).json({msg: "User created"});
    } catch (error) {
        console.log(error.message);
    }
}


export const updateUser = async(req, res) =>{
    try {
        await User.update(req.body,{
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({msg: "User update"});
    } catch (error) {
        console.log(error.message);
    }
}


export const deleteUser = async(req, res) =>{
    try {
        await User.destroy({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({msg: "User delete"});
    } catch (error) {
        console.log(error.message);
    }
}