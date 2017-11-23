var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var url = 'mongodb://localhost:27500/people';
mongoose.connect(url, {useMongoClient: true});

var schema = {
    name: String,
    email: String,
    gender: String,
    avatar: String
}

var document_structure = new mongoose.Schema(schema);

var EMPLOYEECLASS = mongoose.model('employees', document_structure);

module.exports = EMPLOYEECLASS;
