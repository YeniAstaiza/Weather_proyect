import { useEffect, useState } from "react";

import clear from '../../public/images/Clear.jpg'
import fewClouds from '../../public/images/fewClouds.png'
import scarettedCloudy from '../../public/images/scarettedCloudy.jpg'
import brokenClouds from '../../public/images/brokenClouds.jpg'
import showerRain from '../../public/images/showerRain.jpg'
import rainy from '../../public/images/rainy.jpg'
import thunderstorm from '../../public/images/thunderstorm.jpg'
import snow from '../../public/images/snow.jpg'
import mist from '../../public/images/mist.jpg'

const BackgroundLayout = (props) => {

  
  return (
    <img src={image} alt="weather_image" />
  )
}

export default BackgroundLayout