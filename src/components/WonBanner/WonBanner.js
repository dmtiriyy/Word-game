import React from "react";

import Banner from "../Banner/Banner";

function WonBanner({numOfGuesses}){
    const [happyImg, setHappyImg] = React.useState('');
    if(happyImg){
        setHappyImg(true)
    }
    React.useEffect(() => {
        console.log(happyImg);
    })
    return <Banner status="happy">
 <p>
            <strong>Congratulations!</strong> Got in in {' '}
            <strong> {numOfGuesses === 1 ? '1 guess' : `${numOfGuesses} guesses`} </strong>
            </p>
    </Banner>
}
export default WonBanner