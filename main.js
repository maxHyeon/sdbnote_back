var express = require('express');
var app = express();
var morgan = require('morgan')
var user = require('./routes/user')
var work = require('./routes/work')
var cors = require('cors')
var bodyParser =require('body-parser')

// var myLogger = function (req,res,next){
//     console.log(req.url);
//     next();
// };

// app.use(myLogger)

const corsOptions = {
    origin: 'http://localhost:3000', // 허락하고자 하는 요청 주소
    credentials: true, // true로 하면 설정한 내용을 response 헤더에 추가 해줍니다.
};

app.use(cors(corsOptions)); // config 추가
app.use(morgan('dev'))
app.use(express.json())
app.use('/',express.static('public'))
app.use('/work',work)
app.use('/user',user)

app.listen(3030,function(){
    console.log('listen on 3030')
});

