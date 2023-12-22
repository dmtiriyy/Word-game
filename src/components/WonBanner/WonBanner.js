import React from "react";

import Banner from "../Banner/Banner";
function useWon(res) {
    React.useEffect(() => {
        console.log(res)
    })
}
function WonBanner({numOfGuesses}){
    const won = useWon(numOfGuesses)

    const [happyImg, setHappyImg] = React.useState('');
    if(happyImg){
        setHappyImg(won)
    }
    React.useEffect(() => {
        console.log(`count ${happyImg}`);
       
        
    })
    return <Banner status="happy">
 <p>
            <strong>Congratulations!</strong> Got in in {' '}
            <strong> {numOfGuesses === 1 ? '1 guess' : `${numOfGuesses} guesses`} </strong>
            </p>
    </Banner>
}
export default WonBanner