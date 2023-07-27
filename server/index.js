
import Routes from './Routers/route.js'
const express = require('express')
const app = express()
const db =require('./Database/db')
const cors = require('cors')
const fs = require("fs")
const multer = require("multer")
app.use(express.json())
app.use(cors({
    origin:'http://localhost:4200'
    
    }))
    // app.use(function(req, res, next) {
    //     res.header("Access-Control-Allow-Origin", "*");
    //     res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
    //     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    //     next();
    //   });

    app.listen(process.env.PORT || 3000,()=>{
        console.log('sucess');
        })
   

        
        var storage = multer.diskStorage({
            destination: function (req, file, cb) {
              cb(null, 'uploads')
            },
            filename: function (req, file, cb) {
              cb(null, file.fieldname + '-' + Date.now())
              console.log('file.fieldname: ', file.fieldname);
            }
          })
          var upload = multer({ storage: storage })
          

//admin
app.post('/add',verify,upload.single('file'),(req,res)=>{
    console.log('  req.body: ',   req.body);    
    var img = fs.readFileSync(req.file.path);
     var encode_img = img.toString('base64');
    var final_img = {
        data:new Buffer.from(encode_img,'base64'),
        contentType:req.file.mimetype,
    };
    console.log('req.body.instituteId: ', req.body.instituteId);
    ds.add(req.body.firstname,req.body.lastname,req.body.email,req.body.password,req.body.address,req.body.gender,final_img,req.body.course, req.body.instituteId)
    .then(result=>{
     res.status(result.statuscode).json(result)}) })
