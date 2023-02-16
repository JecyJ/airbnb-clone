import {useState} from 'react'


function Jokes(props) {
    const [isShown, setIsShown] = useState(false)
    function toggleShown() {
        console.log(isShown)
        return setIsShown(prevIsShown => !prevIsShown)
    }
    return (        
        <div className="mt-5">
            {props.setup && <h3>Setup: {props.setup}</h3>}
            {isShown && <p>Punchline: {props.punchline}</p>}
            {/* <p>Punchline: {props.punchline}</p> */}
            <button className="border rounded-lg p-2 mb-2 bg-zinc-400" onClick={toggleShown}>Toggle</button>
            <hr />
        </div>
    )
}

export default Jokes;


