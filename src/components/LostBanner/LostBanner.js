import React from "react";

import Banner from "../Banner/Banner";



function LostBanner({answer}){
    const [answers,setAnswers] = React.useState('')
    async function handleWrong(){
        const url = `wrongTerm/id`;
        const response = await fetch(url);
        const json = await response.json();
    
        if(json.ok){
            setAnswers(answers)
        }
    }
    return <Banner status="sad">
<p> Sorry, the correct answer is <strong>{answer}</strong>
            </p>
    </Banner>
}
export default LostBanner