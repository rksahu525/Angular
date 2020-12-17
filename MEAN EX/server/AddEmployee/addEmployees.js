let mongodb=require("mongodb");
let SambaIT=mongodb.MongoClient;
let addEmployees=require("express").Router().post("/",(req,res)=>{
    let newRecord={
        "Name":req.body.Name,
        "Age":req.body.Age,
        "EmpId":req.body.EmpId,
        "Salary":req.body.Salary,
        "Department":req.body.Department,
        "DOB":req.body.DOB,
        "Gender":req.body.Gender,
        "Languages":req.body.Languages
    };
    SambaIT.connect("mongodb://localhost:27017/miniprojectdb",(err,db)=>{
        if(err) throw err;
        else{db.collection("Employees").insertOne(newRecord,(err,result)=>{
            if(err)throw err;
            else{
                res.send({insert:"Success..."})
            }
        })}
    })
})

module.exports=addEmployees;