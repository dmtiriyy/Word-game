import React, {useState, useId, useRef, useEffect} from "react";
import GuessResults from "../GuessResults/GuessResults";

function GuessInput({gameStatus,handleSubmitGuess}){
    const id = useId();
    const guessRef = useRef()
    const guessId = `${id}-guess`
    const [guess, setGuess] = useState('');
   
    const allGuesses = React.memo(GuessResults)
    return(
    <form
        ref={guessRef}
        onSubmit={handleSubmitGuess}
        className="guess-input-wrapper">
        <label htmlFor={guessId}
        onChange={(event) => {
           setGuess(event.target.value)
        }}>Enter guess:</label>
        <input 
        required
        disabled={gameStatus !== 'running'}
        minLength={5}
        maxLength={5}
        id="guess-input"
        type="text"
        value={guess}
        onChange={(event) => {
            const nextGuess= event.target.value.toUpperCase()
            setGuess(nextGuess);
        }}
         />
    </form>
    )
}
export default GuessInput;