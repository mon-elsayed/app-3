
const request=require("request")



const forecast=(latitude,longtitude,callback)=>{

    const url="https://api.weatherapi.com/v1/current.json?key=7f97e74ef23b418c97a155211230503&q=" +latitude+ ","+longtitude
    
    request({url,json:true},(error,response)=>{
    
        // console.log(response.body)
    
        // const data1=JSON.parse(response.body)
    
    
    // console.log(data1)
    // console.log(response.body.location.name)
    // console.log(response.body.current.condition.text)
    
    if (error){
        callback("ERROR HAS OCCURED",undefined)
    }
    else if(response.body.error){
       callback(response.body.error.message,undefined)
    }
    else{
        callback(undefined,response.body.location.name+" is "+response.body.current.condition.text + ' and temp is ' + response.body.current.temp_c )
    }
    
    
        
    }
    
    )
    }
    
    module.exports= forecast