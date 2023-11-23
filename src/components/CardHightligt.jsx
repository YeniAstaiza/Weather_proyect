import { MdAssistantNavigation } from "react-icons/md";
import { IoMdBarcode } from "react-icons/io";
const CardHighligt = () => {

    return(
        <div className=" bg-red-600">
            <div className='grid grid-cols-2 grid-rows-2 gap-4 p-2 justify-items-center'>
                <div className=" w-60 h-40 p-3 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700  items-center ">
                    <div className="text-center">
                        <h5 className="mb-2 text-1x font-bold tracking-tight text-gray-900 dark:text-white">Wind status</h5>
                    </div>
                    <div className="flex flex-row justify-center p-2">
                        <p className="text-4xl text-gray-700 dark:text-gray-400"> 7</p>
                        <p className="text-2xl text-gray-700 dark:text-gray-400"> mph</p>
                    </div>
                    <div className="flex flex-row justify-center p-2">
                        <MdAssistantNavigation className="w-6 h-6" />
                        <p className="text-xl text-gray-700 dark:text-gray-400 ms-2"> wsw</p>
                    </div>
                </div>

                <div className=" w-60 h-40 p-3 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <div className="text-center">
                        <h5 className=" mb-2 text-1x font-bold tracking-tight text-gray-900 dark:text-white">Humidity</h5>
                    </div>
                    <div className="flex flex-row justify-center p-2">
                        <p className="text-4xl text-gray-700 dark:text-gray-400"> 84</p>
                        <p className="text-2xl text-gray-700 dark:text-gray-400"> %</p>
                    </div>
                    <div className="flex flex-row justify-center p-2">
                        <IoMdBarcode />
                    </div>
                </div>

                <div className=" w-60 h-40 p-3 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <div className="text-center">
                        <h5 className="mb-2 text-1x font-bold tracking-tight text-gray-900 dark:text-white">Visibility</h5>
                    </div>
                    <div className="flex flex-row justify-center p-2">
                        <p className="text-4xl text-gray-700 dark:text-gray-400"> 6,4</p>
                        <p className="text-2xl text-gray-700 dark:text-gray-400 ms-2"> miles</p>
                    </div>
                </div>

                <div className=" w-60 h-40 p-3 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <div className="text-center">
                        <h5 className="mb-2 text-1x font-bold tracking-tight text-gray-900 dark:text-white">Wind status</h5>
                    </div>
                    <div className="flex flex-row justify-center p-2">
                        <p className="text-4xl text-gray-700 dark:text-gray-400"> 998</p>
                        <p className="text-2xl text-gray-700 dark:text-gray-400 ms-2">mb</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CardHighligt