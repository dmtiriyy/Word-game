import React from "react";

import { range} from '../../utils';

function Guess({value}){
return(
    <div class="guess-results">
  <p class="guess">
    {range(5).map((num) => (
      <span key={num} className="cell">{value? value[num]: undefined}</span> 
    ))}
  </p>
  
</div>
)
}

export default Guess;