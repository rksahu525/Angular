let mongodb=require("mongodb");
let SambaIT=mongodb.MongoClient;
let deleteEmployees=require("express").Router().delete("/",(req,res)=>{
    SambaIT.connect("mongodb://localhost:27017/miniprojectdb",(err,db)=>{
        if(err) throw err;
        else{
            db.collection("Employees").deleteOne({"EmpId":req.body.EmpId},(err,result)=>{
                if(err) throw err;
                else{
                    res.send({"delete":"success..."})
                }
            })
        }
    })
})
module.exports=deleteEmployees;