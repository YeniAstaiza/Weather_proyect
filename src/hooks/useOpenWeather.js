import {useState, useEffect} from 'react'

const useOpenWeather = (city) => {
    const [Weather,setWeather] = useState(null)
    const [forecast, setForecast] = useState([])
    const [error,setError] = useState(null)
    const [loading, setLoading] =useState(false)
    
    const APIKEY = '93c10bb547be99bb56c79a1c8b3fcdb0'
//funcion para obtener el clima actual
const getWeather = async () => {
  try{
      let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=metric`)
      res = await res.json()
      setWeather(res);
  }catch(e){
    setError(e);
  }
}

//funcion para obtener el pronostico clima 5 días. cada 3 horas
const getForescast = async () => {
  setForecast(
    [
      {
        dt:1701140400,
        icon:'10n',
        temp_max:15.8,
        temp_min:12
      },
      {
        dt:1701140400,
        icon:'10n',
        temp_max:15.8,
        temp_min:12
      },
      {
        dt:1701140400,
        icon:'10n',
        temp_max:15.8,
        temp_min:12
      },
      {
        dt:1701140400,
        icon:'10n',
        temp_max:15.8,
        temp_min:12
      },
      {
        dt:1701140400,
        icon:'10n',
        temp_max:15.8,
        temp_min:12
      }
    ]
  );
  /*try{
    let res = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${APIKEY}&units=metric`)
    res = await res.json()
    setForecast(res);
  } catch(e){
    setError(e)
  }*/
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
