


let form = document.getElementById('form1')
form.addEventListener('submit',(e)=>{
    e.preventDefault()
    console.log(document.getElementById('address').value)
    weatherFun()
    form.reset()
})
const errorF = document.getElementById('error')
const locationF = document.getElementById('location')
const forecastF = document.getElementById('forecast')
const latitudeF = document.getElementById('latitude')
const longitudeF = document.getElementById('longitude')
const tempF = document.getElementById('longitude')


// async --> function return promise
let weatherFun = async() =>{
    try{
        const address = document.getElementById('address').value
        const res = await fetch('http://localhost:3000/weather?address='+address)
        const data = await res.json()
        console.log(data)
        if(data.error){
            errorF.innerText = data.error
            locationF.innerText = ''
            forecastF.innerText = ''
            latitudeF.innerText = ''
            longitudeF.innerText = ''
            tempF.innerText = ''

        }
        else {

           
                // Set the location and forecast text
                locationF.innerText =  " country is "+data.location;
                forecastF.innerText = "forecast is " + data.forecast;
                 latitudeF.innerText ="latitude is "+ data.latitude;
                  longitudeF.innerText = "longititude is "+ data.longtitude;

                errorF.innerText = '';
            
                // Hide the location and forecast elements initially
                locationF.style.display = 'none';
                forecastF.style.display = 'none';
                latitudeF.style.display = 'none';
                longitudeF.style.display = 'none';
            
                // Show the location after 1 second
                setTimeout(() => {
                    locationF.style.display = 'block';
            
                    // Show the forecast 0.5 seconds after the location
                   
                    setTimeout(() => {
                        latitudeF.style.display = 'block';
                    }, 1500);
                    setTimeout(() => {
                        longitudeF.style.display = 'block';
                    }, 2000);
                    setTimeout(() => {
                        forecastF.style.display = 'block';
                    }, 2500);
                   
                }, 1000);
            
            
        }
        
    }
    catch(e){
        console.log(e)
    }
}