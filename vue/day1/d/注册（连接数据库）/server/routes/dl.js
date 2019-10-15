var express = require('express')
var router = express.Router()
var mysql = require('mysql');
let name;
let pass;
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    port: "3306",
    password: '',
    database: 'ms'
});

connection.connect();

connection.query('SELECT * FROM user', function(error, results, fields) {
    if (error) throw error;
    // console.log(results);
    name = results[0].name;
    pass = results[0].pass;
    console.log(name, pass);


    // console.log('The solution is: ', results[0].solution);
});

router.post('/', function(req, res, next) {
    // let tou = req.body;
    // let username = tou.username;
    // let password = tou.password;
    let {
        username,
        password
    } = req.body
    if (username == name && password == pass) {
        res.json({
            status: 1,
            msg: "登陆成功"
        });
    } else {
        res.json({
            status: 0,
            msg: "登陆失败"
        })
    }
})
module.exports = router;