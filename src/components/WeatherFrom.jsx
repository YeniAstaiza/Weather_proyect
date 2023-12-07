import { useState } from "react";
import useOpenWeather from "../hooks/useOpenWeather";

const WeatherFrom = () => {
    const [city, setCity] = useState("city")
    const [weatherData, error, loading] = useOpenWeather(city)


    const onSubmit = (e) => {
        e.preventDefault();
        console.log({city});
        if(city === "" || !city) return;

        
    }

    return (

        
        <div className="container">
             
           

            {loading && <p>Cargando...</p>}
            {error && <p>Hubo un error en la consulta</p>}
            {weatherData && (
                <div>
                    <h1> El clima en: {city}</h1>
                    <p>Temperatura: {weatherData.main.temp}</p>
                </div>
            )}

        </div>
    )
}

export default WeatherFrom