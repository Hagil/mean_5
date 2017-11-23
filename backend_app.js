var express = require('express');
var backend_app = express();
var routes = require('./routes/main_routes');
var bodyParser = require('body-parser');
var port = 3500;

backend_app.set('view engine', 'ejs');
backend_app.use(express.static('public'));
backend_app.use(bodyParser.urlencoded({extended: true}));
backend_app.use(bodyParser.json());
backend_app.use(routes);


backend_app.listen(port, listening);
function listening(){
    console.log('broadcasting on localhost:' + port);
}
