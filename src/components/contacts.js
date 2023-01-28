import phone from "../images/phone.png"
import email from "../images/email.png"


function Contacts(props) {
    let badgeText
    if(props.openSpots === 0) {
        badgeText = "Sold Out"
    } else if(props.location === "Online") {
        badgeText = "Online"
    }
    return (
        <div className="relative mt-5 w-48 border border-slate-400 rounded-xl drop-shadow-lg shadow-inherit">
            {badgeText && <div className="absolute ml-2 mt-1 px-1 border bg-white rounded-md">{badgeText}</div>}
            <img className="rounded-xl w-60 h-60" src={props.image} alt="john" />
            <h3 className="font-semibold text-lg pl-2">{props.name}</h3>
            <div className="flex px-2 pt-2">
                <img className="w-4" src={phone} alt="email" />
                <p className="text-sm">{props.phone}</p>
            </div>
            <div className="flex text-sm px-2 pb-1 space-x-2">
                <img className="w-4" src={email} alt="email" />                
                <p>{props.email}</p>
            </div>            
        </div>        
    )
}

export default Contacts;


