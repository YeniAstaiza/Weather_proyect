import { useState, useEffect } from 'react'

const useOpenWeather = (city, lat, lon) => {
  const [Weather, setWeather] = useState(null)
  const [forecast, setForecast] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const APIKEY = '93c10bb547be99bb56c79a1c8b3fcdb0'
  //funcion para obtener el clima actual

  const formatUrl = (info) => {
    let url = `https://api.openweathermap.org/data/2.5/${info}?appid=${APIKEY}&units=metric`
    if (city === '') {
      url = `${url}&lat=${lat}&lon=${lon}`
    } else if(lon === '' && lat === '') {
      url = `${url}&q=${city}`
    } 
    return url
  } 
  const getWeather = async () => {
    try {
      let res = await fetch(formatUrl('weather'))
      res = await res.json()
      setWeather(res);
    } catch (e) {
      setError(e);
    }
  }

  const parseData = (fore) => {
    let cont = 1
    const data = []
    let tempMax = []
    let tempMin = []
    fore.forEach((current, index) => {
      if (cont === 8) {
        data.push(
          {
            dt: current.dt,
            icon: current.weather[0].icon,
            temp_max: Math.max(...tempMax),
            temp_min: Math.min(...tempMin)
          }
        )
        cont = 1
        tempMax = []
        tempMin = []
      } else {
        cont++
        tempMax.push(current.main.temp_max)
        tempMin.push(current.main.temp_min)
      }
    })
    return data
  }


  //funcion para obtener el pronostico clima 5 días. cada 3 horas
  const getForescast = async () => {
    try {
      let res = await fetch(formatUrl('forecast'))
      res = await res.json()
      setForecast(parseData(res.list));
    } catch (e) {
      setError(e)
      console.error(e)
    }
  }

  useEffect(() => {
    if (city || lat || lon) {
      setLoading(true)
      getWeather()
      getForescast()
      setLoading(false)
    }
  }, [city, lat, lon])

  return { Weather, forecast, error, loading }
}
export default useOpenWeather


