import React, {useState, useId, useRef, useEffect} from "react";

function GuessInput({gameStatus,handleSubmitGuess}){
    const id = useId();
    const guessRef = useRef()
    const guessId = `${id}-guess`
    const [guess, setGuess] = useState('');
    function handleSubmit(event){
        event.preventDefault();
        if(guess.length !==5){
            window.alert('Please enter 5 characters')
            return
        }
        handleSubmitGuess(guess)
        setGuess('')
    } 
    useEffect(() => {
        console.log(`${guess} value`)
    })
    return(
    <form
        ref={guessRef}
        onSubmit={handleSubmit}
        className="guess-input-wrapper">
        <label htmlFor={guessId}
        onChange={(event) => {
            guessRef= event.target.value
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