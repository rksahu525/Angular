let mongodb=require("mongodb");
let nareshIT=mongodb.MongoClient;
var url="mongodb://localhost:27017/crud";
let update=require("express").Router().put("/",(req,res)=>{
    nareshIT.connect(url,(err,db)=>{
        if(err) throw err;
        else{
            db.collection("products").updateOne({"p_id":req.body.p_id},
                                                   {$set:{"p_name":req.body.p_name,"p_cost":req.body.p_cost}},(err,result)=>{
                                                       if(err) throw err;
                                                       else{
                                                           res.send({update:"successfull"})
                                                       }
                                                   } )
        }
    })
});
module.exports=update;