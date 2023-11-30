import React, {useState} from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput/GuessInput';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import GuessResults from '../GuessResults/GuessResults';
import LostBanner from '../LostBanner/LostBanner';
import WonBanner from '../WonBanner/WonBanner';
// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [gameStatus, setGameStatus] = useState('running')

  const [guesses, setGuesses] = useState([]);
  function handleSubmitGuess(guess){
    const nextGuesses = [...guesses, guess]
    setGuesses(nextGuesses)
    setGuesses([
      ...guesses,
      guess
    ]);
    if(guess.toUpperCase() === answer){
      setGameStatus('won')
    } else if(guesses.length >= NUM_OF_GUESSES_ALLOWED){
      setGameStatus('lost')
    }
  }
  return( 
  <>
  <GuessResults guesses={guesses} answer={answer}/>
  <GuessInput gameStatus={gameStatus} handleSubmitGuess={handleSubmitGuess}/>
  {gameStatus === 'won' &&(
  <WonBanner numOfGuesses={guesses.length}
  />)}
    {gameStatus === 'lost' &&(
    <LostBanner answer={answer}
  />)}
  </>);
}

export default Game;
