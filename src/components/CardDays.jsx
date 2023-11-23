import windy from '../../public/icons/windy.png'
const CardDays = () => {

    return (
        <div className='grid grid-cols-5 gap-3 p-1 justify-items-center'>
            <div className=" w-40 p-3  border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <div className="text-center">
                    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Tomorrow</h5>
                </div>
                <div className='flex flex-row justify-center'>
                <img src={windy} alt="windy" className='w-11' />
                </div>
                <div className="flex flex-row justify-center p-1">
                    <p className="font-normal text-gray-700 dark:text-gray-400"> 16°</p>
                    <p className="font-normal text-gray-700 dark:text-gray-400 ms-4"> 11°</p>
                </div>
            </div>
            
            <div className=" w-40 p-3  border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <div className="text-center">
                    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Tomorrow</h5>
                </div>
                <div className='flex flex-row justify-center'>
                <img src={windy} alt="windy" className='w-11' />
                </div>
                <div className="flex flex-row justify-center p-1">
                    <p className="font-normal text-gray-700 dark:text-gray-400"> 16°</p>
                    <p className="font-normal text-gray-700 dark:text-gray-400 ms-4"> 11°</p>
                </div>
            </div>
            <div className=" w-40 p-3  border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <div className="text-center">
                    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Tomorrow</h5>
                </div>
                <div className='flex flex-row justify-center'>
                <img src={windy} alt="windy" className='w-11' />
                </div>
                <div className="flex flex-row justify-center p-1">
                    <p className="font-normal text-gray-700 dark:text-gray-400"> 16°</p>
                    <p className="font-normal text-gray-700 dark:text-gray-400 ms-4"> 11°</p>
                </div>
            </div>
            <div className=" w-40 p-3  border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <div className="text-center">
                    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Tomorrow</h5>
                </div>
                <div className='flex flex-row justify-center'>
                <img src={windy} alt="windy" className='w-11' />
                </div>
                <div className="flex flex-row justify-center p-1">
                    <p className="font-normal text-gray-700 dark:text-gray-400"> 16°</p>
                    <p className="font-normal text-gray-700 dark:text-gray-400 ms-4"> 11°</p>
                </div>
            </div>
            <div className=" w-40 p-3  border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <div className="text-center">
                    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Tomorrow</h5>
                </div>
                <div className='flex flex-row justify-center'>
                <img src={windy} alt="windy" className='w-11' />
                </div>
                <div className="flex flex-row justify-center p-1">
                    <p className="font-normal text-gray-700 dark:text-gray-400"> 16°</p>
                    <p className="font-normal text-gray-700 dark:text-gray-400 ms-4"> 11°</p>
                </div>
            </div>
        </div>
    )
}

export default CardDays