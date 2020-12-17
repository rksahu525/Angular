let mongodb=require("mongodb");
let nareshIT=mongodb.MongoClient;
var url="mongodb://localhost:27017/crud";
let remove=require("express").Router().delete("/",(req,res)=>{
    nareshIT.connect(url,(err,db)=>{
        if(err) throw err;
        else{
            db.collection("products").deleteOne({"p_id":req.body.p_id},(err,result)=>{
                if(err) throw err;
                else{
                    res.send({delete:"successfull"})
                }
            })
        }
    })
});
module.exports=remove;