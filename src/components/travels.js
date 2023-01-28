import travelData from "./traveldata";
import Travel from "./travelstructure";
import globe from "../images/globe.png";

function Travels() {
    const travelJournal = travelData.map(item => {
        return (
            <Travel
                key={item.id}
                {...item}
             />
        )
    })
    return (
        <div className="mt-10 border border-gray-400 rounded-3xl space-y-4 pb-7">           
            <div className="flex items-center justify-center text-xl font-medium m-1 rounded-t-3xl bg-red-400 py-2 mb-8">
                <img src={globe} alt="" />
                <h1>My Travel Journal</h1>
            </div>   
            {travelJournal}
        </div>
    )
}

export default Travels;