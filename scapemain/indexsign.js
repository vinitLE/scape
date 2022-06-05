var express = require("express")
var bodyParser = require("body-parser")
var mongoose = require("mongoose")

const app = express()

app.use(bodyParser.json())
app.use(express.static('public'))
app.use(bodyParser.urlencoded({
    extended:true
}))

mongoose.connect('mongodb://localhost:27017/Scape',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

var db = mongoose.connection;

db.on('error',()=>console.log("Error in Connecting to Database"));
db.once('open',()=>console.log("Connected to Database"));


app.post("/done1",async(req,res)=>{

    try{

    var username = req.body.username;
    var password = req.body.password;
    
  
        const userdetail =await db.collection("register").findOne({username:username});
        if(userdetail.pass==password){
            res.redirect("submitdata.html")
        }else{
            res.send("password in not matching")
        }
    }catch{
        res.status(400).send("invalid email")
    }
})

app.post("/done2",(req,res)=>{

    try{

        
    var name = req.body.name;
    var email = req.body.email;
    var username = req.body.username;
    var pass = req.body.pass;
    var confpass = req.body.confpass;

    

    var data = {
        "name": name,
        "email" : email,
        "username": username,
        "pass" :pass,
        "confpass": confpass
    }
    if(pass==confpass){

    db.collection('register').insertOne(data,(err,collection)=>{
        if(err){
            throw err;
        }
        console.log("Record Inserted Successfully");
    });
    
    return res.redirect('index.html')

    }else{
        res.send("password not matching");
    }
    }catch{
           res.status(400).send(error);
    }
})

// app.post("/done3",(req,res)=>{
//     var name = req.body.name;
//     var email = req.body.email;
//     var subject = req.body.subject;
//     var mess = req.body.mess;
  

    

//     var data = {
//         "name": name,
//         "email" : email,
//         "subject": subject,
//         "mess" : mess
//     }

//     db.collection('contact').insertOne(data,(err,collection)=>{
//         if(err){
//             throw err;
//         }
//         console.log("Record Inserted Successfully");
//     });

//     return res.redirect('submit.html')

// })


app.get("/",(req,res)=>{
    res.set({
        "Allow-access-Allow-Origin": '*'
    })
    // return res.redirect('index.html');
}).listen(3000);


console.log("Listening on PORT 3000");

