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


app.post("/done1",(req,res)=>{
    var username = req.body.username;
    var password = req.body.password;
    

    

    var data = {
        "username": username,
        "password" : password,
        
    }

    db.collection('ScapeUsers').insertOne(data,(err,collection)=>{
        if(err){
            throw err;
        }
        console.log("Record Inserted Successfully");
    });

    return res.redirect('index.html')

})

// app.post("/done2",(req,res)=>{
//     var name = req.body.name;
//     var usn = req.body.usn;
//     var college = req.body.college;
//     var dob = req.body.dob;
//     var city = req.body.city;
//     var teachdis = req.body.teachdis;

    

//     var data = {
//         "name": name,
//         "usn" : usn,
//         "college": college,
//         "dob" : dob,
//         "city": city,
//         "teachdis": teachdis
//     }

//     db.collection('teach').insertOne(data,(err,collection)=>{
//         if(err){
//             throw err;
//         }
//         console.log("Record Inserted Successfully");
//     });

//     return res.redirect('submit.html')

// })

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

