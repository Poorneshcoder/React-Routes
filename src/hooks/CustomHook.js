import React, { useState } from "react";

// const CustomHook = () =>{
//     const [name, setName] = useState('sanjay');

//     const handleClick = () => {
//         setName('poornesh');
//     }
//     return(
//         <div>
//             <h1>{name}</h1>
//             <button onClick={handleClick} >change</button>
//         </div>
//     )
// }

// custom hook 

const CustomHook = () =>{
    const [userName, edu] = useMyHook("poornesh", "B.tech");

    return(
        <div>
            <h1>{userName}</h1>
            <h1>{edu}</h1>

        </div>
    )
}

function useMyHook(name, education) {
    let userName = "name of student is " + name;
    let edu = "education qualification is " + education;
    return [userName, edu];
}

export default CustomHook;