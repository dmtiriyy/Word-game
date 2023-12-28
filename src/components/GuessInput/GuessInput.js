import React, {useState, useId, useRef, useEffect} from "react";

function GuessInput({gameStatus,handleSubmitGuess}){
    const id = useId();
    const guessRef = useRef()
    const guessId = `${id}-guess`
    const [guess, setGuess] = useState('');
   
    const allGuesses = React.useMemo(() => {
        const result = [];
        for(let i = 1; i<= guess; i++){
            result.push(i)
        }
        return result
    }, [guess])
    return(
    <form
        ref={guessRef}
        onSubmit={handleSubmit}
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