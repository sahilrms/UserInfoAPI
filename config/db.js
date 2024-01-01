const mongoose=require('mongoose')

const connectToDB=async ()=>{
    mongoose.connect(process.env.MONGO_URL).then((conn)=>{
        console.log("DB connected sucess")
    }).catch((e)=>{
        console.log(`error in connecting db ${e}`)
        process.exit(1);
    })
}
module.exports=connectToDB