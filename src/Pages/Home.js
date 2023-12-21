import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Home = () => {
    const [students, setStudents] = useState([]);
    const [userName, setUserName] = useState("");
    const history = useHistory();
    useEffect(()=>{
        const getUserDetails = async () => {
            const response = await fetch('https://63f9eb78897af748dcc59d23.mockapi.io/students',{
                method: "GET"
            });
            const data = await response.json(); 
            setUserName(localStorage.getItem("user-name"));
            setStudents(data);
        }
        // authentiaction of your application...
        // if(!localStorage.getItem("user-name")){
        //     history.replace("/");
        // }
        // getUserDetails(); 
        // or
        localStorage.getItem("user-name") ? getUserDetails() : history.replace("/");
    },[])

    const handleLogout = () => {
        localStorage.removeItem("user-name");
        history.push("/");
    }

    return(
        <div >
             <h2>Browser Router Application</h2>
             <h2>welcome back {userName} </h2>
             <button onClick={handleLogout} >Logout</button>
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
