import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";


const UserDetails = () => {

    const {id} = useParams();
    const [student, setStudent] = useState([]);
    const history = useHistory();

    useEffect(()=>{
        const getUserDetails = async () =>{
            const response = await fetch(`https://63f9eb78897af748dcc59d23.mockapi.io/students/${id}`,{
                method: "GET"
            });
            const data = await response.json();
            setStudent(data);
        }
        getUserDetails();
    },[id])

    return(
        <div>
            <h1>UserDetails</h1>
            <div>
                <h1>Name : {student.name} </h1>
                <h2>City : {student.city} </h2>
                <h2>State : {student.state} </h2>
                <h2>Salary : {student.expected} </h2>
            </div>

            <div>
                <button
                onClick={()=>history.push("/")}
                >Back to home</button>
            </div>
            
           
            
        </div>
    )
}

export default UserDetails;