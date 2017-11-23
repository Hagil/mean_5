var router = require('express').Router();
var EMPLOYEECLASS = require('../mongodb/mongoose_connection');
module.exports = router;

router.get('/', do_homepage);

function do_homepage(req, res) {
    console.log('doing homepage');
    res.render('index');
}

//api

router.get('/api/v5/read', do_read);
router.post('/api/v5/create', do_create);
router.put('/api/v5/update', do_update);
router.delete('/api/v5/delete/:_id', do_delete);

function do_read(req, res) {
    console.log('finding all data');
    EMPLOYEECLASS.find().then(function (results) {
        console.log(results);
        res.json(results);
    });
}

function do_create(req, res) {
    console.log('creating employee');
    console.log(req.body);
    var data = {
        name: req.body.name,
        email: req.body.email,
        gender: req.body.gender,
        avatar: req.body.avatar
    }
    var employee = new EMPLOYEECLASS(data);
    employee.save().then(function (result) {
        console.log(result);
        res.json({
            message: 'saved!'
        })
    });
}

function do_update(req, res) {
    console.log('updating employee');
    console.log(req.body);
    var update = {
        $set: {
            _id: req.body._id,
            name: req.body.name,
            email: req.body.email,
            gender: req.body.gender,
            avatar: req.body.avatar
        }
    }
    EMPLOYEECLASS.findByIdAndUpdate(req.body_id, update).then(function (result){
        console.log(result);
        res.json({message: 'updated!'})
    });
}

function do_delete(req, res) {
    console.log('deleting employee');
    console.log(req.params._id);

    EMPLOYEECLASS.findByIdAndRemove(req.params._id).then(function (result){
        console.log(result);
        res.json({message: 'deleted!'})
    });

}