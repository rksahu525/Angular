//import mongodb module
let mongodb = require("mongodb");


//mongodb follows the client server architecture
//we need to create the client
let sambaIT = mongodb.MongoClient;


//create the module(custom module)
let employees = require("express").Router().get("/",(req,res)=>{
    sambaIT.connect("mongodb://localhost:27017/miniprojectdb",(err,db)=>{
        if(err) throw err;
        else{
            db.collection("employees").find().toArray((err,array)=>{
                if(err) throw err;
                else{
                    res.send(array);
                }
            });
        }
    });
});

//export the module
module.exports = employees;

