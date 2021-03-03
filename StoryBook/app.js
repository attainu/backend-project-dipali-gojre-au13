const express = require('express');
const path = require('path')
const app = express();
const connectDB = require('./config/db')
// const http = require('http');
const morgan = require('morgan')
const finalhandler = require('finalhandler')
const exphbs = require('express-handlebars')
const hostname = 'localhost';
const port = 3000;



// if(process.env.NODE_ENV === 'development'){
//     app.use(morgon('dev'))
// }



//handlebars
app.engine('.hbs', exphbs({defaultLayout:'main',extname: '.hbs'}));
app.set('view engine', '.hbs');

//static folder
app.use(express.static(path.join(__dirname, 'public')))

//routes
app.use('/', require('./routes/index'))

//call database

connectDB();

// create "middleware"
var logger = morgan('combined')



// const server = http.createServer((req, res) => {
 
//     // respond to request
//     res.setHeader('content-type', 'text/plain')
//     res.write('Welcome !!\n')
//     res.end('End')
//     })

app.listen(port, () => {
console.log(`server listening on host: ${hostname} port: ${port}`);
});






    // "dev": "env-cmd -f ./config/dev.env nodemon app.js"
