const express= require("express");
const path= require('path');

//initializing express
const app = express();

//Port to run server on
const PORT = 5000;


//middleware
app.use("/asserts", express.static(path.resolve(__dirname, "public")));


// route
app.get("/", function (req, res){
    return res.sendFile(path.resolve(__dirname, "index.html")); 
});

app.get("/person/:name", function(req, res){
    console.log(req.params);
     console.log(req.query);
return res.send(`<h1>Hi, ${req.params.name}</h1>`);
});

// To make server go live

//TO MAKE YOUR SERVER GO LIVE ON THE PORT
app.listen(PORT, function(){
    console.log(`server running on port ${5000}`);
});


