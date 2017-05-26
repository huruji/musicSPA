var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var request = require('request');
var fs = require('fs');
var fsExtra = require('fs-extra');
var index = require('./routes/index');
var users = require('./routes/users');
var baseUrl = 'http://tingapi.ting.baidu.com';
var app = express();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', function(req,res,next){
  console.log(req.url);
	var url = baseUrl + req.url;
	/*console.log(req.headers);*/
	var option = Object.assign({}, req.headers, {url: url, referer:''});
	if(url.indexOf('mp3') >= 0){
	  var dir = './public' + req.url.match(/(^\/(\w*\/)*)/g)[0].replace(/\/$/,'');
	  var file = dir + '/' + req.url.match(/\w*\.mp3/)[0];
    fsExtra.mkdirsSync(dir);
	  request(url).pipe(fs.createWriteStream(file, {flags: 'w+'}));
  } else{
    request(url, function(error, response, body){
      res.set(response.headers);
      console.log(body);
      res.send(body);
    })
  }
	/*if(url.include('mp3')){
	  request(url).pipe(res);
  }*/
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

/*module.exports = app;*/
app.listen(4000,function(){
  console.log('port 4000')
});
