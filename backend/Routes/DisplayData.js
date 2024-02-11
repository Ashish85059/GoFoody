const express=require("express")
const router=express.Router()

router.post("/foodData",(req,res)=>{
    try{
        res.send([global.food_items,global.foodCategory]) // defined in db.js file as it is made global
    }
    catch(err){
        console.log("Error -> "+err);
        res.send("Server Error")
    }
})

module.exports=router