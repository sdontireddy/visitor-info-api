const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');


const visitoryByCountryroute=require("./routes/visitorsByCountry.js")


const config = {
    name: 'visitor-info-api',
    port: 3000,
    host: '0.0.0.0',
};

const app = express();


app.use(bodyParser.json());
app.use(cors());


app.use("/visitors/bycountry",visitoryByCountryroute)



app.get('/', (req, res) => {
    res.status(200).send('THis is the home REquest... ,,,/visitors/bycountry');

});



app.listen(config.port, config.host, (e)=> {
    if(e) {
        throw new Error('Internal Server Error');
    }
    
   
});
