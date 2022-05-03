var express = require('express');
var app = express();
var fs = require("fs");
var bodyParser = require('body-parser');
 
 

app.use(express.static('public'));

var router = express.Router();

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/", router);


var mysql = require('mysql');
var pool = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'company'
});


app.get('/', function (req, res) {
  res.send('Hello World');
})




// User login data
router.post('/userdata', function (req , res){
  var data = req.body.data1;
  var Fname = req.body.fullname;
  var uname = req.body.username;
  var pass = req.body.passkey;

  console.log(pass);

  pool.query("insert into user_data(Mn_Email , F_Name , User_Name , Password) values(?,?,?,md5(?))",[data,Fname,uname,pass], function(error,results,fields){
    if (error) throw error;
    console.log(results);
    res.json(results);
  });
});





var server = app.listen(3000, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("Example app listening at http://%s:%s", host, port)
});








