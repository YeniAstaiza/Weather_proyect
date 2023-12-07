import { fecha, conversion } from '../helpers/functios'
import Spinner from './Spinner'

const CardDays = (props) => {

    return (
        <div className='grid grid-cols-2  xl:grid-cols-5 lg:grid-cols-3 md:grid-cols-2 gap-3 gap-3 justify-items-center'>  
            {props.loading && <Spinner />}
            {!props.loading && props.forecast.map(day => (
                <div className=" w-40 p-3  bg-blue-200 bg-opacity-50 border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <div className="text-center">
                        <h5 className="mb-2 text-xs font-bold tracking-tight text-gray-900 dark:text-white">{fecha(day.dt)}</h5>
                    </div>
                    <div className='flex flex-row justify-center'>
                        <img src={`https://openweathermap.org/img/wn/${day.icon}@2x.png`} alt="clima" className='w-16' />
                    </div>
                    <div className="flex flex-row justify-center p-1">
                        <p className="font-normal text-gray-800 dark:text-gray-400"> {conversion(props.celsius,day.temp_max)}</p>
                        <p className="font-normal text-gray-600 dark:text-gray-400 ms-4"> {conversion(props.celsius,day.temp_min)}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default CardDays
