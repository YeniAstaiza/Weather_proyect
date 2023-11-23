import { useState } from 'react'
import './App.css'
import WeatherFrom from './components/WeatherFrom'
import Search from './components/Search'
import GeneralInformation from './components/GeneralInformation'
import Units from './components/Units'
import BackgroundCondition from './components/BackgroundCondition'
import CardDays from './components/CardDays'
import CardHighligt from './components/CardHightligt'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='bg-blue-200 mx-auto'>
      <div className='flex  p-4 space-x-4'>
        <div className=' bg-green-600  flex-none w-80 mx-auto '>
          <div >
          <Search/>
          </div>
          <div className='infoGeneral'>
         
          <GeneralInformation/>
          </div>
        </div>
        <div className=' bg-pink-300 flex-auto w- mx-auto px-4'>
          <div className='iconos c. fra'>
            <Units/>
          </div>
          <div className='contenedorcards'>
          <div>
            <CardDays/>
          </div>
          <div className='contenedorinteres'>
            <div>
              <CardHighligt/>
            </div>
          </div>
          <div className=" bg-red-200 p-2 text-center">
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
