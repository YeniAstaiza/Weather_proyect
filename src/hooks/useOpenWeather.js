import {useState, useEffect} from 'react'

const useOpenWeather = (city) => {
    const [weatherData,setWeatherData] = useState(null)
    const [error,setError] = useState(null)
    const [loading, setLoadin] =useState(true)
    const apikey = '93c10bb547be99bb56c79a1c8b3fcdb0'
    
    useEffect(()=> {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`)
            .then(response => response.json())
            .then(json => {
                setLoadin(false)
                setError(null)
                setWeatherData(json)
            })
            .catch(error => {
                    setWeatherData(null)
                    setError(error)
                })
    },[city])
    return[weatherData,error,loading]
}

export default useOpenWeather