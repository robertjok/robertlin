//var mysql = require('mysql');
//�إ߳s�u
//var connection = mysql.createConnection({
//host: 'localhost',
//user: 'team11',
//password: 'vvzVeyLp6x7e88xD',
//database: 'team11'
//});

//�}�l�s��
//connection.connect();

//���۴N�i�H�}�l�i��d��
//connection.query('SELECT 1 + 1 AS solution',function(error, rows, fields){
//�ˬd�O�_�����~
//if(error){
//throw error;
//}
//console.log(rows[0].solution); //2
//});
//����˴��J��ƩO�H���]�ܮe�����C�ݬݥH�U���Ҥl�G
//���J���
//var data = {
//rows: 'columns',
//strings: 'integers'
//};

//connection.query('INSERT INTO `table` SET ?', data, function(error){
//if(error){
//console.log('�g�J��ƥ��ѡI');
//throw error;
//}
//});

//connection.end();

var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// Create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(express.static('public'));

app.get('/login', function (req, res) {
  // do what ever account.js should do
   res.end('hello');
   //console.log(req.query);
   //res.end('<h1>'+JSON.stringify(req.query)+'</h1>');
})


/*app.get('/index.htm', function (req, res) {
   res.sendFile( __dirname + "/" + "index.htm" );
})

app.post('/process_post', urlencodedParser, function (req, res) {

   // Prepare output in JSON format
   response = {
       first_name:req.body.first_name,
       last_name:req.body.last_name
   };
   console.log(response);
   res.end(JSON.stringify(response));
})*/

var server = app.listen(8145, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Run the Server ", host, port)

})


