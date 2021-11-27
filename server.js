const express=require("express")
const app=express()
app.get("/products/cases")

app.get("/products/bands")
app.get("/products/protection")
app.get("/products/:categories",(req,res)=>{
  console.log(req.params)
  res.send("ping")


}
)
app.listen(3001,()=>{
  console.log("server is rumnnig")
})