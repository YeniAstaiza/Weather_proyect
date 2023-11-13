import { useState } from "react";
import useOpenWeather from "../hooks/useOpenWeather";

const WeatherFrom = () => {
    const [city, setCity] = useState("Medellín")
    const [weatherData, error, loading] = useOpenWeather(city)
    console.log(weatherData)

    return (
        <div>
            <input
            type="text"
            onKeyUp={(e) => {
                if (e.key === 'Enter'){
                    setCity(e.target.value)
                }
            }}

            /*onkeyUp={(e) =>{
                setCity(e.target.value)
            }}
            />
             <button onClick={(e) => {
                setCity(e.target.value)
            }}>
                Consultar
            </button>*/ />

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