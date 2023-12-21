import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const LogInPage = () => {
    const history = useHistory();
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [datas, setDatas] = useState([]);
    const [error, setError] = useState("");

    useEffect(()=>{
        const getUserList = async () => {
            const response = await fetch("https://6583e35c4d1ee97c6bce7a90.mockapi.io/userList",{
                method : "GET",
            });
            const data = await response.json();
            setDatas(data);
        }
        getUserList();
    },[])

    // login functionality

    const handleLogin = (e) => {
        e.preventDefault();
        console.log(datas);
        const check = datas.find(element => element.name === name && element.password === password);
        if(!check) {
            setError("Sorry you have entered invalid credentials")
        } else {
            setError("");
            localStorage.setItem("user-name",name);
            history.push("/home");
        }
    }

    return(
        <div>
            <div className="login-page">
                <form onSubmit={handleLogin}>
            <input
                value={name}
                type='text'
                onChange={(e)=>setName(e.target.value)}
                placeholder="Name" />

                <input
                value={password}
                type='text'
                onChange={(e)=>setPassword(e.target.value)}
                placeholder="Password" />

                <button type="submit" >Login</button>
                </form>
            </div>

            {error && <div className="error"><h2>{error}</h2></div>}

            <h3>name is : {name} </h3>
            <h3>password is : {password} </h3>

            <h2>If not register please signup</h2>
            <button
            onClick={()=>history.push("/register")}
            >Signup</button>
        </div>
    )
}

export default LogInPage;