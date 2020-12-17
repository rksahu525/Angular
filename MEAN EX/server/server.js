let express=require("express");
let app=express();
let bodyparser=require("body-parser");
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));
let cors=require("cors");
app.use(cors());

app.use("/fetch",require('./Employee/getAllEmployee'));
app.use("/insert",require('./AddEmployee/addEmployees'));
app.use("/update",require('./UpdateEmployee/updateEmployees'));
app.use("/delete",require('./deleteEmployee/deleteEmployees'));
app.listen(8080);
console.log("Server Listening the port 8080");
