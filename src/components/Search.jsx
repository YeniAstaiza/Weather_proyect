import { useState } from "react";
import useOpenWeather from "../hooks/useOpenWeather";
import { GoSearch } from "react-icons/go";
import { MdMyLocation } from "react-icons/md";

const Search = () => {
    const [city, setCity] = useState('')
    const [Weather,forecast,error,loading] = useOpenWeather(city)
    console.log(weather)
return(
    <div className="search flex space-x-10 p-4">
        <div className="search city ">
            <form>
                <div className=" flex space-x-1">
                    <input
                    type="text" 
                    placeholder='Enter city name'
                    onBlur={(e) => setCity(e.target.value)}
                    className=" w-40 h-10 text-center text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                    <button onClick={getWeather} className=" h-10 w-10 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 flex justify-center items-center text-center">
                     <GoSearch/>
                    </button>
                </div>
            </form>
        </div>
        <div className="p-4 ">
        <MdMyLocation />
        </div>
    </div>
    )
}

    export default Search

    /* <form onSubmit={onSubmit}>
                <div className="">
            <input
            type="text"
            placeholder="Ciudad"
            

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
            </button>
            <button onClick={(e) => {
                if (e.key === 'Enter'){
                    setCity(e.target.value)
                }
                }}>
                Consultar</button>
                />
              </div>
            </form> 
        */