import React from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const Contact = () => {
    const {id, token} = useParams();
    return(
        <div>
            <h1>Contact</h1>
            <h2>hi guys go to information {id}</h2>
            <h2>hi guys go to token {token}</h2>
        </div>
    )
}

export default Contact;