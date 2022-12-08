const express=require("express")
const AWS = require('aws-sdk');


const router=express.Router()

AWS.config.update({ region: 'us-east-1' });


const client = new AWS.DynamoDB.DocumentClient();
const tableName = 'usvisitorybycountry';

//AWS.config.update({ region: 'us-east-1' });



router.get("/",(req,res,next)=>{
    console.log("Start DB..");
    var params = {
        TableName: tableName
    };

    var items= [];
    client.scan(params, (err, data) => {
        console.log("Reading DB....");
       
        if(err){
            console.log("Error : " + err)
            res.send("Error Connecting to DB");
        }else{

           
            
            for(var i in data.Items){
                console.log("Pushing Item DB...." + i);
                console.log(data.Items[i]);
                items.push(data.Items[i]);
               
            }
            res.contentType('application/json');
            res.send(items);
        }

    });

// Handling request using router
console.log("Send the response")

    //res.send("This is from ROuter for Visit by Country...."+items)
    //
});
  
// Importing the router
module.exports=router