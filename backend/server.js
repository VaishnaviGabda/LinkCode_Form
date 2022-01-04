const express = require('express') 
const connectdb = require('./db')
const app = express()
const studentroutes = require('./routes/student_routes')
const cors = require('cors')
require("dotenv").config();

app.use(express.json())

app.use(cors());


 connectdb();
 app.use('/student',studentroutes)


app.listen(process.env.PORT || 5000, function(){
   console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
 });
