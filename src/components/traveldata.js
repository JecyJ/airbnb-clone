import mountFuji from "../images/mount-fuji.jpeg"
import operaHouse from "../images/sydney-opera-house.jpeg"
import museum from "../images/dubai-museum.jpeg"

const travelData = [
    {
        id: "2",
        title: "Mount Fuji",
        location: "JAPAN",
        googleMapsUrl:"https://www.google.com/maps/place/Sydney+Opera+House/@-33.8567844,151.2152967,15z/data=!4m6!3m5!1s0x6b12ae665e892fdd:0x3133f8d75a1ac251!8m2!3d-33.8567844!4d151.2152967!16zL20vMDZfbm0?hl=en",
        startDate: "12 Jan, 2021",
        endDate: "24 Jan, 2021",
        description: "Mount Fuji, or Fugaku, located on the island of Honshū, is the highest mountain in Japan, with a summit elevation of 3,776.24 m (12,389 ft 3 in). It is the second-highest volcano located on an island in Asia (after Mount Kerinci on the island of Sumatra), and seventh-highest peak of an island on Earth.",
        imageUrl:mountFuji
    },
    {
        id: "3",
        title: "Sydney Opera House",
        location: "SYDNEY",
        googleMapsUrl:"https://www.google.com/maps/place/Sydney+Opera+House/@-33.8567844,151.2152967,15z/data=!4m6!3m5!1s0x6b12ae665e892fdd:0x3133f8d75a1ac251!8m2!3d-33.8567844!4d151.2152967!16zL20vMDZfbm0?hl=en",
        startDate: "30 Jan, 2021",
        endDate: "10 Feb, 2021",
        description: "The Sydney Opera House is a multi-venue performing arts centre located on the foreshore of Sydney Harbour, it is widely regarded as one of the world's most famous and distinctive buildings and a masterpiece of 20th-century architecture.",
        imageUrl:operaHouse
    },
    {
        id: "4",
        title: "Museum of the Future",
        location: "DUBAI",
        googleMapsUrl:"https://www.google.com/maps/place/Museum+of+The+Future/@25.2192034,55.2819328,15z/data=!4m6!3m5!1s0x3e5f434ba1c34fa9:0x2bfd06ff9c202fc4!8m2!3d25.2192034!4d55.2819328!16s%2Fg%2F11nynbjfm1?hl=en",
        startDate: "12 Feb, 2021",
        endDate: "24 Feb, 2021",
        description: "The Museum of the Future is an exhibition space for innovative and futuristic ideologies, services, and products. Located in the Financial District of Dubai, UAE, the Museum of the Future has three main elements: green hill, building, and void.",
        imageUrl:museum
    }
]

export default travelData;