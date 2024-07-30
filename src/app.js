const express=require("express")
// var_require('express')();
const app=express()

const port= process.env.port || 3000


// app.get('/',(req,res)=>{
//     res.send("hello home page")
// })



app.get('/prices',(req,res)=>{
    res.send("pricesss")
})


// app.get('/about',(req,res)=>{
//     res.send("about pageeeeeeeee")
// })

app.get('/page1',(req,res)=>{
    res.send({
        name:"eman",
        age:22,
        city:"damietta"
    })
})

app.get('/page2',(req,res)=>{
    res.send({
        name:"mariam",
        age:22,
        city:"kafr elsheikh"
    })
})

const path =require("path")
// console.log(__dirname)
// console.log(path.join(__dirname,'../public'))
const x=path.join(__dirname,'../public')

app.use(express.static(x))


///////////////////////////////////////////

app.set('view engine','hbs')

app.get('/',(req,res)=>{
    res.render('index',{
        // title:"home page content",
        desc:"this is home page",
        weatherImge:"images/weather.jpeg"
        
    })
})

/////////////////////////
///service dynamic page 

app.get('/service',(req,res)=>{
    res.render('service',{
        title:"service",
        name:"eman",
        city:"damietta",
        age:22,
        
        img1: "images/img1.jpg"
    })
})

///////////////team dynamic page

app.get('/team',(req,res)=>{
    res.render('team',{
        title:"team page",
        name:"mariam",
        city :"kafr elsheikh",
        age:22,
        img2:"images/img2.jpg"
    })
})


app.get('/about',(req,res)=>{
    res.render('about',{
        title:" about page",
        name:"aya",
        city :"kafr elsheikh",
        age:22
    })
})

app.get('/products',(req,res)=>{
    console.log(req.query)
    console.log(req.query.year)
    res.send({
        product:"bmw 520 i"
    })
})


// app.get('/weather',(req,res)=>{
//     if(!req.query.address){
//        return res.send({
//             error:"you must enter an address"
//         })
//     }
//     res.send({
//         location:req.query.address,
//         forecast:"cold"
//     })
// })

const geocode=require('../data1/geocode')
const forecast =require('../data1/forecast')

app.get('/weather',(req,res)=>{
    if(!req.query.address){
       return res.send({
            error:"you must enter an address"
        })
    }
   geocode(req.query.address,(error,data)=>{
    if(error){
        return res.send({error})
       }
       forecast(data.longtitude,data.latitude,(error,forecastData)=>{
        if(error){
          return res.send({error})
        }
        res.send({
            forecast:forecastData,
         location:req.query.address,
         longtitude: data.longtitude, 
        latitude: data.latitude    

         
        })
       })
   })
   
})









app.get('*',(req,res)=>{
    res.send('404 page not found')
})



///////////////////
const viewsDirectory=path.join(__dirname,"../temp1/views")
app.set("views",viewsDirectory)


var hbs= require('hbs')
const partialsPath =path.join(__dirname,"../temp1/partials")
hbs.registerPartials(partialsPath)


// var hbs = require('hbs');
// const partialsPath = path.join(__dirname , "../Temp1/partials")
// hbs.registerPartials(partialsPath)



app.listen(port,()=>{
    // console.log(`app listening on port ${port}`)
    console.log("app listening on port 3000")
})

