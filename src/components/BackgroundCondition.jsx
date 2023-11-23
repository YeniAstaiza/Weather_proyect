import { useEffect, useState } from "react";

import Clear from '../assets/images/Clear.jpg'
import Fog from '../assets/images/fog.png'
import Cloudy from '../assets/images/Cloudy.jpg'
import Rainy from '../assets/images/Rainy.jpg'
import Snow from '../assets/images/snow.jpg'
import Stormy from '../assets/images/Stormy.jpg'
import Sunny from '../assets/images/Sunny.jpg'

const BackgroundCondition = () => {
    const {weather} = useState()
    const [image, setImage] = useState(Clear)

useEffect(() => {
   
  }, [weather])
return (
    <img src={image} alt="weather_image"></img>
    )
}
export default BackgroundCondition