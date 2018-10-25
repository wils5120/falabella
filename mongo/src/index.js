const express = require ('express');
const cors = require('cors');
const path = require('path');
const app = express();


const taskRoutes = require('./routes/task');

// settings 

app.set('port', process.env.PORT || 3000);
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');



app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: 'false'}));


// routes

app.use(taskRoutes);


// files

app.use(express.static(path.join(__dirname, 'dist')));


app.listen(app.get('port'), () =>{
    console.log('servidor nuevo en el puerto', app.get('port'));
});