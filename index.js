const express=require('express');

const app=express()

app.get('/',(req,res)=>{
    res.send("this is my server , and me suhas")
})
const PORT=process.env.PORT||8800;
app.listen(PORT,()=>{
    console.log("this is reunning in Portnumber:",PORT)
})