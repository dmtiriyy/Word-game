import React, {useState} from "react";

function GuessInput({handleSubmitGuess}){
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
    return(
    <form 
        onSubmit={handleSubmit}
        className="guess-input-wrapper">
        <label htmlFor="guess-input">Enter guess:</label>
        <input 
        required
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