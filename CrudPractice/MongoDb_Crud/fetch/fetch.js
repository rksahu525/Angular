let mongodb=require("mongodb");
let nareshIT=mongodb.MongoClient;
 var url="mongodb://localhost:27017/crud";
 let fetch=require("express").Router().get("/",(req,res)=>{
     nareshIT.connect(url,(err,db)=>{
           if(err) throw err;
           else{
               db.collection("products").find().toArray((err,array)=>{
                   if(err) throw err;
                   else{
                       res.send(array);
                   }
               })
           }
     })
 });
 module.exports=fetch;