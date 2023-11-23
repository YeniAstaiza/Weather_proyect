import { FiMapPin } from "react-icons/fi";
import windy from '../../public/icons/windy.png'
const GeneralInformation = () =>  {

    return (
        <div className="p-4 flex flex-col items-center ">
            <div>
                <p className=" text-4xl font-semibold pb-16 ">
                    Ciudad
                </p>
            </div>
            <div>
                <img src={windy} alt="windy" className="w-20 h-20 pb-2"/>
            </div>
            <div className="flex">
            <p className=" text-7xl font-semibold text-gray-900 pb-16">15</p>
            <p className=" text-3xl font-normal text-gray-800">°c</p>
            </div>
            <p className=" text-xl font-normal text-gray-800 pb-10">Windy</p>
            <div>
            <p className=" text-xs font-normal text-black-800 pb-8"> Today - Mie 22 Nov</p>
            </div>
            <div className="flex">
            <FiMapPin />
            <p className=" ms-3">Medellín</p>
            </div>

        </div>
    )

}
export default GeneralInformation