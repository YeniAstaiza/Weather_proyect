import { useState, useEffect } from 'react'
import './App.css'
import Search from './components/Search'
import GeneralInformation from './components/GeneralInformation'
import Units from './components/Units'
import CardDays from './components/CardDays'
import CardHighligt from './components/CardHightligt'
import useOpenWeather from './hooks/useOpenWeather'
import clear from '../public/images/clear.jpg'
import fewClouds from '../public/images/fewClouds.jpg'
import scarettedCloudy from '../public/images/scatteredCloudy.jpg'
import brokenClouds from '../public/images/brokenClouds.jpg'
import showerRain from '../public/images/showerRain.jpg'
import rainy from '../public/images/rainy.jpg'
import thunrderstorm from '../public/images/thunrderstorm.jpg'
import snow from '../public/images/snow.jpg'
import mist from '../public/images/mist.png'
function App() {
  const [city, setCity] = useState('')
  const [lat, setLat] = useState('')
  const [lon, setLon] = useState('')
  const[celsius, setCelsius] = useState(true)
  const {Weather,forecast, error,loading} = useOpenWeather(city,lat,lon)
  const [image, setImage] = useState(clear)

  useEffect(() => {
    if (Weather?.weather[0]?.description) {
      let background = Weather.weather[0].description
      if (background.includes('clear sky')) {
        setImage(clear)
      } else if (background.includes('few clouds')) {
        setImage(fewClouds)
      } else if (background.includes('scattered clouds')) {
        setImage(scarettedCloudy)
      } else if (background.includes('overcast clouds')|| background.includes('broken clouds')) {
        setImage(brokenClouds)
      } else if (background.includes('shower rain')) {
        setImage(showerRain)
      } else if (background.includes('rain') || background.includes('drizzle')) {
        setImage(rainy)
      } else if (background.includes('thunrderstorm')) {
        setImage(thunrderstorm)
      } else if (background.includes('snow') || background.includes('light snow')) {
        setImage(snow)
      } else if (background.includes('mist')) {
        setImage(mist)
      } 
    }
  }, [JSON.stringify(Weather)])
  
  return (
    <>
    <div 
      className="mx-auto bg-cover"
      style={{backgroundImage:`url("${image}")`}}
      >

      <div className='flex  flex-wrap p-4 space-x-4 '>
        <div className=' bg-blue-200 bg-opacity-50  flex-none w-80  mx-auto '>
          <div >
            <Search setCity={setCity} setLat={setLat} setLon={setLon}/>
          </div>
          <div className='infoGeneral'>
          <GeneralInformation weather={Weather} error={error} loading={loading} celsius={celsius} />
          </div>
        </div>
        <div className=' bg-blue-200 bg-opacity-50 flex-auto mx-auto px-4 sm:w-40'>
          <div className='iconos c. fra'>
            <Units weather={Weather} error={error} loading={loading} celsius={celsius} setCelsius={setCelsius}/>
          </div>
          <div className='contenedorcards'>
          <div>
            <CardDays forecast={forecast} error={error} loading={loading} celsius={celsius}/>
          </div>
          <div className='contenedorinteres'>
            <div>
              <CardHighligt weather={Weather} error={error} loading={loading}/>
            </div>
          </div>
          <div className="  p-2 text-center">
            <p className='text-xs text-gray-700 dark:text-gray-400 aline-items-center '>
              Create by Yeni Andrea Astaiza-React
            </p>
          </div>
        </div>
        </div>
      </div>
    </div>
      
    </>
  )
}

export default App
