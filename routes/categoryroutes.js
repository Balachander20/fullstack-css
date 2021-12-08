
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
      let includes =database.categories.find(item =>{
        return item.name===name
      })
      // console.log(includes)
      if (!includes) {database.categories.push(newcategory)}
      else{ console.log("alredy exit")}
      res.status(200).json({
        categories:database.categories,
        message:"sucessfullybfetch",
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
router.delete("/delete/:id",(req,res)=>{
  try {
    const {id}=req.params
    // let e =database.categories.find(item=>{
    //   return item.id ==id
    // })
    // const index = database.categories.indexOf(e)
    // database.categories.splice(index,1)
    const newcategories =database.categories.filter(item=>item.id!==id)
    database.categories=newcategories
    console.log(newcategories)


    res.status(200).json({
      categories:newcategories,
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
module.exports=router
