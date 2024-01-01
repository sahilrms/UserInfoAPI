const User = require('../models/userModels')
const emailValidation = require('../utils/emailValidation.js')
const passwordValidation = require('../utils/passwordValidation.js')
// function and their definitions 
exports.home = (req, res) => {
    res.status(200).json({ "sucess": true, "message": "server running sucessfully" })
}
exports.loginUser =async (req, res) => {
    const {email, password } = req.body;
    
    try{
        if(email ===undefined ||password===undefined){
            throw new Error("User must provide email and password to login")
        }
        else if(emailValidation(email)!=true){
            throw new Error(`email is not valid email string`)
        }
        else if(passwordValidation(password)!=true){
            throw new Error(`password is not valid string`)
        }
        else{
            const foundUser=await User.findOne({email,password});
            if(!foundUser){
                throw new Error(`user with ${email} and ${password} not found`)
            }
            else{
                res.status(200).json({
                    "message":"User Login sucess",
                    foundUser
                })
            }
        }
    }
    catch(error){
        res.status(400).json({
            sucess:false,
            message:error.message
        })
    }
}

exports.registerUser = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        if (name !== undefined && email !== undefined && password !== undefined) {

            if (emailValidation(email) != true) {
                throw new Error(`${email} is not correct`)
            }
            else if (passwordValidation(password) != true) {
                throw new Error(`${password} is not correct, it must have 8-100 characters, uper case,lower case and 2 digits without spaces`)
            }
            else {
                // check if email aleady exist 
                const userExists = await User.findOne({ email })
                if (userExists) {
                    throw new Error('User already registered')
                }
                const user = await User.create({ name, email, password }) //command to write document in collection in mongo db
                res.status(201).json({
                    message: `${name} user created sucessfully`,
                })
            }
        }
        else {
            throw new Error(`email,password and name all should be provided`)
        }
    } catch (error) {
        res.status(400).json({
            sucess: false,
            message: error.message,
            email,
            password,
            name
        })
    }
}