import john from "../images/john.jpeg";
import ben from "../images/ben-blanco.jpeg";
import sasha from "../images/sasha-bourne.jpeg";
import betsy from "../images/betsy-black.jpg";


const dataImgs = [
    {
        id: 0,
        image:john,
        name: "Mr John Doe",
        phone:"+234-7091293425",
        email:"johndoe@gmail.com",
        openSpots: 0,
        location: "Offline"
    },
    {
        id: 1,
        image:ben,
        name: "Mr Ben Blanco",
        phone:"+234-7091293425",
        email:"benblanco@gmail.com",
        openSpots: 3,
        location: "Online"
    },
    {
        id: 2,
        image:sasha,
        name:"Miss Sasha Bourne",
        phone:"+234-7091293425",
        email:"sashabourne@gmail.com",
        openSpots: 5,
        location: "Online"
    },
    {
        id: 3,
        image:betsy,
        name:"Miss Betsy Black",
        phone:"+234-7091293425",
        email:"betsyblack@gmail.com",
        openSpots: 6,
        location: "Offline"
    },    
]

export default dataImgs;