import React, {useState} from 'react'
import {useSelector} from "react-redux";

export default function EmailSubmit() {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");

    const song = useSelector((state) => state.currentID.value);

    function onSubmit(e) {
        e.preventDefault();

        const user = {
            name: fullName,
            email: email
        }

        fetch(`http://localhost:3000/users/`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user),
        });

    }
    return (
        <form className="login-form" onSubmit={onSubmit}>
            <h4>Receive this info via email</h4>
            <input type="text" placeholder="Write Your Email"  value={email} onChange={(e) => setEmail(e.target.value)}/>
            <input type="text" placeholder="Name" value={[fullName]} onChange={(e) => setFullName(e.target.value)}/>
            <input type="submit" />
        </form>
    )
}