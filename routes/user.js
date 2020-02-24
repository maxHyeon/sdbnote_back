var express = require('express');
var router = express.Router();

router.get('/',function(req,res){
    res.send('he llo')
});

router.get('/:id', function(req, res) {
    res.send('Received a GET request, param:' + req.params.id);
});

router.post('/', function(req, res) {
    console.log('here ')
    console.log(JSON.stringify(req.json,null,1))

    res.json({ 
        success: true ,
        user: req.body.username
    }).end();
});

router.put('/', function(req, res) {
    res.status(400).json({ message: 'Hey, you. Bad Request!' });
});

router.delete('/', function(req, res) {
    res.send('Received a DELETE request');
});

module.exports = router;