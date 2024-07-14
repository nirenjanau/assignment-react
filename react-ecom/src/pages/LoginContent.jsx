
import { useState } from 'react'

import  '../assets/style.css'

export default function LoginContent() {
    const [data, setData] = useState(null)

    const showtoken = () => {
        fetch('https://fakestoreapi.com/auth/login', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json' 
            },
            body: JSON.stringify({
                username: "mor_2314",
                password: "83r5^_"
            })
        })
        .then(response => response.json())
        .then(data => {
            setData(data)
        })
    }
    return (
        <div className="login"> 
            <div className="token">
                <h3>
                    {data ? data.token:" "}
                </h3>
            </div> 
            <p>Punch in your username and password to access your account</p>
            <input className="input" type="text" placeholder="USERNAME"></input>
            <input className="input" type="password" placeholder="PASSWORD"></input>
            <button onClick={showtoken}> Zap Here</button>
        </div>
    )
}