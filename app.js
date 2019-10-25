var express = require('express');
var app = express();
var pool = require('./db/config');
var dbConfig = require('./db/sql');
var bodyParser = require('body-parser');
var state = require('./state');

app.use('/', express.static('dist'))
app.use(bodyParser.urlencoded({ extended: false }));

function isOk(req) {
  var reg = /[`~!@#$%^&*()_+<>?:{},.\/;'[\]]/im;//拦截特殊字符
  var reg2 = /[·！#￥（——）：；“”‘、，|《。》？、【】[\]]/im;
  return !reg.test(req.body.name) && !reg.test(req.body.password) && !reg2.test(req.body.name) && !reg2.test(req.body.password);
}

// function connectionDb(callback) {
//   pool.getConnection(function (err, connection) {
//     if (err) {
//       console.log(err);
//       var data = {
//         code: '03',
//         message: '数据库连接错误'
//       }
//       res.json(data);
//       return;
//     }
//     connection.query()
//     connection.release();
//   })
// }
app.get('/',function(req,res) {
  res.sendFile(__dirname + "/" + "dist/index.html")
})
app.post('/register', function (req, res) {//注册
  if(req.body.name == '' || req.body.password == '') {
    res.json(state.login.noString);
  }
  if (isOk(req)) {
    pool.getConnection(function (err, connection) {
      if (err) {
        console.log(err);
        res.json(state.login.err);
        return;
      }
      var query = [];
      query.push(req.body.name);
      query.push(req.body.password);
      connection.query(dbConfig.insert, query, function (err, result) {
        if (err) {
          console.log(err.message);
          res.json(state.login.faild);
          return
        } else {
          res.json(state.login.success);
        }
      })
      connection.release();
    })
  } else {
    res.json(state.login.err2);
    res.end();
  }
});

app.post('/login', function (req, res) {
  if (isOk(req)) {
    pool.getConnection(function (err, connection) {
      if (err) {
        console.log(err.message);
        res.json(state.login.err);
        return;
      }
      var query = [];
      query.push(req.body.name);
      console.log(query)
      connection.query(dbConfig.getUserById,query,function(err,result) {
    console.log(result)
        if(err) {
          console.log(err.message);
          res.json(state.login.faild);
          return
        }else {
          if(!result.length == 0 && result[0].password == req.body.password) {
            res.json(state.login.logSuccess);
          }else {
            res.json(state.login.err3)
          }
        }
      });
      connection.release();
    })
  } else {
    res.json(state.login.err2);
    res.end();
  }
});

app.listen(8081, function () {
  console.log('success');
});

// connection.connect();


// connection.query(dbConfig.insert,['csy','123456'],function (err,result) {
//     if(err) {
//         console.log(err.message);
//         return;
//     }
//     console.log('----------------SELECT--------------');
//     console.log(result);
//     console.log('-------------------------------------\n\n');
// });

// connection.end();
