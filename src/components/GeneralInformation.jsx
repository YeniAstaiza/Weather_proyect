import { FiMapPin } from "react-icons/fi";
import { fecha, conversion, hora, minutos, segundos } from "../helpers/functios";

const GeneralInformation = (props) =>  {
  
    return (
        <div className="p-4 flex flex-col items-center ">
            <div>
                <p className=" text-4xl font-semibold ">
                    {props.weather?.name}
                </p>
            </div>
            <div>
                <img src={`https://openweathermap.org/img/wn/${props.weather?.weather[0].icon}@4x.png`} alt="clima" className="w-25 h-25">
                
                </img>
            </div>
            <div className="flex">
            <p className=" text-6xl font-semibold text-gray-900 pb-2">
                {props.weather?.main.temp && conversion(props.celsius,props.weather?.main.temp)}{/*Puedes hacer este tipo de render condicional para que no te salga el NaN */}
            </p>
            <p className=" text-3xl font-normal text-gray-800"></p>
            </div>
            <p className=" text-xl font-normal text-gray-800 pb-8">
                {props.weather?.weather[0].description} 
            </p>
            <div className="text-center">
            <p className=" text-x1 font-normal text-black-800 pb-1"> {props.weather?.dt && fecha(props.weather?.dt)}</p>
            <p className="text-xs font-normal text-black-800 pb-6"> {props.weather?.dt && hora(props.weather?.dt)} : {props.weather?.dt && minutos(props.weather?.dt)} : {props.weather?.dt && segundos(props.weather?.dt)}</p>
            </div>
            <div className="flex" >
            <FiMapPin /> 
            <p className="text-xs font-normal text-black-800 pb-2">
                {props.weather?.name}

            </p>
            </div>

        </div>
    )

}
export default GeneralInformation