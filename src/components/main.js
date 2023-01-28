import grid from "../images/photo-grid.webp"
import Card from "./card"
import Jokes from "./jokes"
import jokesdata from "./jokesdata"
import Travels from "./travels"


function Main() {
    const jokeElements = jokesdata.map(joke => {
        return <Jokes 
                    setup={joke.setup} 
                    punchline={joke.punchline}
                />
    })
    return (          
        <div className="Main bg-pink-300 h-full px-5 py-8">
            <img src={grid} alt="grid" />
            <h1 className="pt-12 text-4xl font-semibold">Online Experiences</h1>
            <p className="py-3 text-lg">Join unique interactive activites lead by one-of-a kind hosts-all without leaving home.</p>
            <Card />
            {jokeElements}
            <Travels />
        </div>
        
    )
}

export default Main;