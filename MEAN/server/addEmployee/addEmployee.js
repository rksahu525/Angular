const { response } = require("express");
let mongodb = require("mongodb");
let sambaIT = mongodb.MongoClient;
let addEmployee = require("express").Router().post("/",(req,res)=>{
        let newRecord = {
            "Name":req.body.Name,
            "Age":req.body.Age,
            "empId":req.body.empId,
            "Salary":req.body.Salary,
            "Department":req.body.Department,
            "DOB":req.body.DOB,
            "Gender":req.body.Gender,
            "languages":req.body.languages
        };
        sambaIT.connect("mongodb://localhost:27017/miniprojectdb",(err,db)=>{
            if(err) throw err;
            else {
                db.collection("employees").insertOne(newRecord,(err,result)=>{
                    if (err) throw err;
                    else{
                        res.send({insert : "success"});
                    }
                })
            }
        });
});
module.exports= addEmployee;