const app=require('./app.js');
const port=process.env.PORT
app.listen(port,()=>{
    console.log(`server active on ${port}`)
})