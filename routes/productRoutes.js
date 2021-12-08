const database=require("../database/db")
const express=require("express")
// const { categories } = require("../database/db")
const {v4:uuidv4}=require("uuid");
// const { response } = require("express")
const router=express.Router()
// const db =require("../database/db")
router.get ("/all",(req,res)=>{
  try {
    res.status(200).json({
      products:database.products,
      message:"sucessfullybfetch",
      status:"sucess"
    })
    
  } catch (error) {
    res.status(200).json({
      products:[],
      message:error.message,
      status:"failed"
    })
    
    
  }
})
router.post("/add",(req,res)=>{
  const{name,price,category}=req.body
  if (!database.categories.find(item=>{
    return item.name===category
  })){
    let newcategory ={name:category,id:uuidv4()}
    database.categories.push(newcategory)
    const newproduct={
      id:uuidv4(),name,price,category:category
      
    }
    database.products.push(newproduct)
  }else{
    let newcategory ={name:category,id:uuidv4()}
    database.categories.push(newcategory)
    const newproduct={
      id:uuidv4(),name,price,category:category
      
    }
    database.products.push(newproduct)

  }

  try {
    res.status(200).json({
      products:database.products,
      message:"sucessfullybfetch",
      status:"sucess"
    })
    
  } catch (error) {
    res.status(200).json({
      products:[],
      message:error.message,
      status:"failed"
    })
    
    
  }
})
module.exports=router