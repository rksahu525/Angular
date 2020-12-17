let mongodb=require("mongodb");
let SambaIT=mongodb.MongoClient;
let employee=require("express").Router().get("/",(req,res)=>{
    SambaIT.connect("mongodb://localhost:27017/miniprojectdb",(err,db)=>{
        if(err) throw err;
        else{
            db.collection("Employees").find().toArray((err,array)=>{
                 if(err) throw err;
                 else{
                     res.send(array)
                 }
            })
        }

    })
})
module.exports=employee;