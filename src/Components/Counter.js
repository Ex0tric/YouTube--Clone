import { useState } from "react";

function Counter(){

    const [number, setNumber] = useState(0);
    console.log('RENDER START')

    function handleClick(event) {
        event.stopPropagation();
        setTimeout(()=>{
            setNumber(number+1);
        },2000)
        console.log(number)
    }

    return(
        <>
        <h1>{number}</h1>
        <button onClick={handleClick}>Add</button>
        </>
    )
}

export default Counter;