const e = require("express");
let mongodb=require("mongodb");
let SambaIT=mongodb.MongoClient;
let updateEmployees=require("express").Router().put("/",(req,res)=>{
    let basedonProperty={"EmpId":req.body.EmpId};
    let newProperties={$set:{
        "Name":req.body.Name,
        "Age":req.body.Age,
        "Salary":req.body.Salary,
        "DOB":req.body.DOB,
        "Gender":req.body.Gender,
        "Languages":req.body.Languages

    }};
    SambaIT.connect("mongodb://localhost:27017/miniprojectdb",(err,db)=>{
        if(err) throw err;
        else{
            db.collection("Employees").updateOne(basedonProperty,newProperties,(err,result)=>{
                if(err) throw err;
                else{
                    res.send({update:"Success....."})
                }
            })
        }
    })
})
module.export=updateEmployees;