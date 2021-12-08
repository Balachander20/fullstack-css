const { Router } = require("express")
const express=require("express")
// const database =require("./database/db")
const categoryroutes =require("./routes/categoryroutes")
const productroutes =require("./routes/productRoutes")
const app=express()
app.use(express.json())
// console.log(categoryroutes.stack)
app.use("/category",categoryroutes)
app.use("/products",productroutes)
// app.get("/",(req,res)=>{
  
//   try{
 
//   }
//   catch(error){
//     res.status(203).send(error.message)
   
//   }
  
// })


app.listen(3001,()=>{
  console.log("server is rumnnig")
})
