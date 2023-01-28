import air from "../images/Airbnb.png"

function Navbar() {
    return (
        <nav className="flex items-center bg-pink-200 py-4 px-2 drop-shadow-lg shadow-inherit w-full">
            <img className="w-8" src={air} alt="airbnb" />
             <h1 className="text-xl font-bold font-mono text-red-500">airbnb</h1>
        </nav>       
    )
}

export default Navbar;