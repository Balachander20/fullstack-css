
  // it is an object for routing

const database=require("../database/db")
const express=require("express")
// const { categories } = require("../database/db")
const {v4:uuidv4}=require("uuid");
// const { response } = require("express")
const router=express.Router()
const db =require("../database/db")
router.get ("/all",(req,res)=>{
  try {
    res.status(200).json({
      categories:database.categories,
      message:"sucessfullybfetch",
      status:"sucess"
    })
    
  } catch (error) {
    res.status(200).json({
      categories:[],
      message:error.message,
      status:"failed"
    })
    
    
  }


})
router.post("/add",(req,res)=>{
 
    const{name}=req.body
    let newcategory={
      
      id:uuidv4(),
      name
   

    }
    
    database.categories.push(newcategory)
    try{
    res.status(200).json({
      categories:database.categories,
      message:"sucessfully added category",
      status:"sucess"
      

    })

   }
    catch(error)
    {
      res.status(200).json({
        categories:[],
        message:"memememkkk",
        status:"failed"
      })

    }
  
})
module.exports=router
