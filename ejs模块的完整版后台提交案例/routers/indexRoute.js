var express = require('express');
var indexRouter = express.Router();

/**
 * 登录界面
 * http://ip:port/login
 */
indexRouter.get('/login',function (req,res) {
    res.render('login');
});

/**
 * 登录提交
 * @type {Router|router}
 */
indexRouter.post('/loginSubmit',function (req,res) {
    console.log(req.body);

    var userName = req.body.username;
    var passWord = req.body.password;

    console.log("userName :"+userName + " passWord :"+passWord);

    if(userName === 'admin' && passWord === '123'){
        res.render('main');
    }else{
        res.render('login');
    }

});


module.exports = indexRouter;