const express= require('express');
const bodyParser=require('body-parser');
const app = express();
const port = 3001;
var morgan=require('morgan');
var cors=require('cors');

//parser aplikasi

app.use(bodyParser.urlencoded({extended:true})) ;
app.use(bodyParser.json())  ;
app.use(morgan('dev'));
app.use(cors());
// panggil routes
var routes = require('./routes')
routes(app);

// daftarkan menu router dari index
app.use('/auth',require('./middleware'));


app.listen(port,()=> {
    console.log (" server running ",port);
});