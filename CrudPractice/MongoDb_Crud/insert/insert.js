let mongodb=require("mongodb");
let nareshIT=mongodb.MongoClient;
var url="mongodb://localhost:27017/crud";
let insert=require("express").Router().post("/",(req,res)=>{
    nareshIT.connect(url,(err,db)=>{
        if(err) throw err;
        else{
            db.collection("products").insertOne({
                                                 "p_id":req.body.p_id,
                                                 "p_name":req.body.p_name,
                                                 "p_cost":req.body.p_cost 

                                                    },(err,result)=>{
                                                        if(err) throw err;
                                                        else{
                                                            res.send({insert:"successfull"})
                                                        }
                                                    })
        }
    })
});
module.exports=insert;