import Contacts from "./contacts";
import dataImgs from "./data"


function Card() {
    const cards = dataImgs.map(item => {
        return (
            <Contacts
                key={item.id}
                {...item}
                // item={item}
            />
        )
    })
    return (       
        <div className="flex space-x-4 pl-4 overflow-x-scroll md:overflow-x-hidden lg:overflow-x-hidden">            
            {cards}
        </div>

    )
}

export default Card;