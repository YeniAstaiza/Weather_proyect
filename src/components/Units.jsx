const Units = (props) => {
   
   
    return(
        <div className=" flex justify-end p-1 space-x-4">
            <button onClick= {() => props.setCelsius(true)} className={`w-10 h-10 ${props.celsius? 'bg-teal-600' : 'bg-teal-400'} rounded-full flex justify-center items-center text-center`}> 
                <p>°C</p>
            </button>
            <button onClick= {() => props.setCelsius(false)} className={`w-10 h-10 ${!props.celsius? 'bg-teal-600' : 'bg-teal-400'} rounded-full flex justify-center items-center text-center`}>
                <p>°F</p>
            </button>
        </div>
    )
} 

export default Units