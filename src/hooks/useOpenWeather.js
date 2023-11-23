import {useState, useEffect} from 'react'

const useOpenWeather = (city) => {
    const [Weather,setWeather] = useState(null)
    const [forecast, setForecast] = useState(null)
    const [error,setError] = useState(null)
    const [loading, setLoading] =useState(false)
    
    const APIKEY = '93c10bb547be99bb56c79a1c8b3fcdb0'
//funcion para obtener el clima actual
const getWeather = () => {
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=metric`)
    .then((response) => response.json())
    .then((data) => setWeather(data))
    .catch((error) => setError (error))
}

//funcion para obtener el pronostico clima 5 días. cada 3 horas
const getForescast = () => {
  fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${APIKEY}&units=metric`)
    .then((response) => response.json())
    .then((data) => setForecast(data))
    .catch((error) => setError(error))
}
 
useEffect(() =>{
  if (city){
    setLoading(true)
    getWeather()
    getForescast()
    setLoading(false)
  }
}, [city]) 
   
return {Weather,forecast,error,loading}
}
export default useOpenWeather
