const express = require("express");
const mongoose = require("mongoose");
const multer = require('multer');
const cors = require("cors");
const path = require('path');
const axios = require('axios');
const app = express();


// var fs = require('fs');
const PORT = process.env.PORT || 3709;
const Schema = mongoose.Schema;

const binary = mongoose.Binary
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db = require("./config/keys").MongoURI;
app.use("/CSS", express.static(__dirname + "/CSS"));
app.use("/views", express.static(__dirname + "/views"));
app.use("/Form", express.static(__dirname + "/Form"));
app.use(express.static(__dirname));

mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));
var imgstorage = multer.diskStorage({
  //upload the text, audio and 

  destination: (req, file, cb) => {
    var dest;
    if (file.fieldname == 'file2' || file.fieldname == 'file3')
      dest = 'TEXT'
    else if (file.fieldname == 'file7' || file.fieldname == 'file8' || file.fieldname == 'file9')
      dest = 'AUDIO'
    else
      dest = 'IMAGE_DIR'
    cb(null, dest)
  },

  filename: (req, file, cb) => {
    let name_of_file = file.fieldname + '_' + Date.now() + path.extname(file.originalname)
    cb(null, name_of_file)
  }

}

)

var img_upload = multer({ storage: imgstorage });
var imageUpload = img_upload.fields([
  { name: 'file1', maxCount: 1 },
  { name: 'file2', maxCount: 1 },
  { name: 'file3', maxCount: 1 },
  { name: 'file4', maxCount: 1 },
  { name: 'file5', maxCount: 1 },
  { name: 'file6', maxCount: 1 },
  { name: 'file7', maxCount: 1 },
  { name: 'file8', maxCount: 1 },
  { name: 'file9', maxCount: 1 }
])



var BookSchema = mongoose.Schema({
  img: Buffer,
});


var Book = mongoose.model('Book', BookSchema, 'bookstore');



app.get("/", (req, res) => {
  res.sendFile("./index.html");
});
app.post('/uploadfile', imageUpload, (req, res) => {
  allfiles = req.files;

  Book.collection.findOneAndUpdate({ data: 'filenames' }, { $push: { filenames: makeFileNames() } }).then((data) => {
    console.log("inserted");
  }).catch(err => {
    console.error(err);
  })
  console.log(allfiles);
  //senfile
  res.redirect('in.html');
})

app.get("/get",(req,res)=>{
  //findone
Book.collection.findOne({data:'filenames'},(err,result)=>{
  if (err) {
    console.log(err);
  }
  res.send(result);
});
})
 


function makeFileNames() {
  let files = []
  let fileName = "file";
  for (let i = 0; i < 9; i++) {
    fileName += i + 1;
    // files[i] = { [fileName]: allfiles[fileName][0].filename }
    files[i] =  allfiles[fileName][0].filename ;
    fileName = "file"
  }
  return files;
}

app.listen(PORT, () => {
  console.log("Nodesjs server running on PORT: " + PORT);
});