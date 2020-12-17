//import mongodb module
let mongodb = require("mongodb");

//create the client
let nareshIT = mongodb.MongoClient;

//create the module  (fetch)
let fetch = require("express").Router().get("/",(req,res)=>{
    //connect to online database
    nareshIT.connect("mongodb://localhost:27017/online",(err,db)=>{
        if(err) throw err;
        else{
            db.collection("products").find().toArray((err,array)=>{
                if(err) throw err;
                else{
                    res.send(array);
                }
            });
        }
    });
});

//export the module
module.exports = fetch;