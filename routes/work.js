var express = require('express');
var router = express.Router();

router.get('/',function(req,res){
    res.send(console.log(JSON.stringify(req.query.id)))
    res.send('work')
});
router.get('/:id',function(req,res){
    let date = new Date('2014-08-18T21:11:54');
    if(req.params.id==="1"){
        res.json({id:'1',title:'텍사스 메소드 2주차 월요일',note:'스쿼트 120 5x5, 데드리프트 130 5x5',date:{date}});
    }
});
//set header json
router.post('/', function(req, res) {
    console.log('here ')
    console.log(JSON.stringify(req.body.id))
    res.json({ 
        id: req.body.id
    })
});

router.put('/', function(req, res) {
    res.status(400).json({ message: 'Hey, you. Bad Request!' });
});

router.delete('/', function(req, res) {
    res.send('Received a DELETE request');
});
module.exports = router;