import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const SignUpPage = () => {
    const history = useHistory();
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [datas, setDatas] = useState("");

 // unique user authentication

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

    const handleCheck = (e) => {
        e.preventDefault();
        const check = datas.find(elm=> elm.name === name);
        if(!check) {
            handleRegister();
        } else {
            setError("username already existed");
        }
    }

    // creating functionality
    const handleRegister = async () => {
        
        try {
            const response = await fetch("https://6583e35c4d1ee97c6bce7a90.mockapi.io/userList",{
                method : "POST",
                body : JSON.stringify({
                    name,
                    password,
                }),
                headers : {
                    "Content-Type" : "application/json"
                },
            });
            const data = await response.json();
            if(data) {
                setError("");
                localStorage.setItem("user-name", name);
                history.push("/home");
            }
        } catch (error) {
            setError("Sorry some error occured");
        }
    }




  return (
    <div>
       <div className="login-page">
        <form onSubmit={handleCheck}>
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
                <button type='submit'>Signup</button>
            </form>
            </div>

            {error && <div className='error' ><h2>{error}</h2></div>}

            <h3>name is : {name} </h3>
            <h3>password is : {password} </h3>
            <h2>If already registered please login</h2>
            <button
            onClick={()=>history.push("/login")}
            >Login</button>
    </div>
  )
}

export default SignUpPage;
