import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Home = () => {
    const [students, setStudents] = useState([]);
    const history = useHistory();
    useEffect(()=>{
        const getUserDetails = async () => {
            const response = await fetch('https://63f9eb78897af748dcc59d23.mockapi.io/students',{
                method: "GET"
            });
            const data = await response.json(); 
            setStudents(data);
        }
        getUserDetails();
    },[])
    return(
        <div >
             <h2>Browser Router Application</h2>
             
            {students.map((stud, idx)=>
                <div key={idx}>
                    <h1>{stud.name}</h1>
                    <button
                    onClick={()=>history.push(`/user/${stud.id}/${stud.name}`)}
                    >Details</button>
                </div>
            )}
        </div>
    )
}

export default Home;
