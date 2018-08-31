'use strict';
let request = require('request');


module.exports = (app)=>{
    app.get("/distance",function(requ,response){
        //this.res = res;
        //"https://legacy.cafebonappetit.com/api/2/menus?format=jsonp&cafe=247&date=2018-08-29"
        //https://maps.googleapis.com/maps/api/distancematrix/json?origins=Epic%20way%20San%20Jose%20California&destinations=3450%20Hillview%20Avenue%20Palto%20Alto%20California&mode=driving&language=en
        let source = "";
        let destination = ""
        if(requ.query.src){
            source = requ.query.src;

        }
        if(requ.query.dest){
            destination = requ.query.dest;
            
        }
        if (source && destination) {
            let appURL ="https://maps.googleapis.com/maps/api/distancematrix/json?origins="+source+"&destinations="+destination+"&mode=driving&language=en" 
            request.get(appURL,(req,res,body)=>{
                console.log(JSON.parse(body));
                response.json(JSON.parse(body));
                //response.json({"message":"PAL Menu App Up - Unfortunately not functional yet !!"});
            });
            
        }else{
            response.json({"Error":"Error Source and Destination Missing"});
        }
      
    })
}
