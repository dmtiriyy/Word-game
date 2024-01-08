import React from "react";

import { range} from '../../utils';
import { checkGuess } from "../../game-helpers";

function Cell({letter, status}) {
  const className = status 
    ? `cell ${status}`
    : 'cell'
  return(
    <span className={className}>
      {letter}</span> 
  )
}


function Guess({value, answer}){
  const result = checkGuess(value, answer)
 
  React.useEffect(() => {
    const values = [];
    if(values.contains(value)){
      console.log(value)
    }
  })
return(
    <div class="guess-results">
  <p class="guess">
    {range(5).map((num) => (
      <Cell key={num}
      letter={result ? result[num].letter : undefined}
      status={result ? result[num].status : undefined}/>
    ))}
  </p>
  
</div>
)
}

export default Guess;