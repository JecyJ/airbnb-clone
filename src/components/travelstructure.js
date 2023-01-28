import locate from "../images/location.png"


function Travel(props) {
    return(        
        <div className="flex flex-col md:flex-row lg:flex-row justify-center w-full h-full lg:w-full md:w-full px-5">
            <img className="w-full h-80 md:w-72 md:h-72 lg:w-72 lg:h-72 rounded-3xl" src={props.imageUrl} alt="" />
            <div className="pl-4 pb-3">
                <div className="flex pt-3">
                    <img className="w-5" src={locate} alt="locate" />
                    <h1>{props.location}</h1>
                    <a className="underline underline-offset-1 pl-2 text-gray-500" href={props.googleMapsUrl} alt="">View on Google Maps</a>
                </div>                    
                <h1 className="text-5xl font-semibold mt-5">{props.title}</h1>
                <p className="mt-8">{props.startDate} - {props.endDate}</p>
                <p className="mt-2">{props.description}</p>
            </div>
            <hr className="border-gray-400" />
        </div>
    )
}

export default Travel;