
function Jokes(props) {
    return (
        <div className="mt-5">
            {props.setup && <h3>Setup: {props.setup}</h3>}
            <p>Punchline: {props.punchline}</p>
            <hr />
        </div>
    )
}

export default Jokes;


