//this file is the main server file
//node starts the execution from server.js file
//this file used to collabrate the modules  @fetch   @insert     @update     @delete

let express = require("express");
let app = express();
let cors = require("cors");
let bodyparser = require("body-parser");

app.use( cors() );
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));
app.use("/fetch",require("./fetch/fetch"));
app.use("/insert",require("./insert/insert"));
app.use("/update",require("./update/update"));
app.use("/delete", require("./delete/delete"));

app.listen(8080);
console.log("server listening the port no.8080");