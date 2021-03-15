import Header from './Header';
import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

function Login() {

    const history = useHistory()
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")

    useEffect(() => {
        if (localStorage.getItem('user-info')) {
            history.push("/add")
        }
    })

    // const logIn = () => {
    //     let item = { email, password }
    //     console.warn("vbcvbcvn", item);


    // };

    async function logIn() {
        let item = { password, email }
        // console.warn(item)

        let result = await fetch("http://127.0.0.1:8000/api/login", {
            method: 'POST',
            body: JSON.stringify(item),
            headers: {
                "Content-Type": 'application/json',
                "Accept": 'application/json'
            }
        })

        result = await result.json()
        //console.warn("result", result)
        localStorage.setItem("user-info", JSON.stringify(result))
        history.push("/add")

    }

    return (

        <div>
            <Header />
            <div className="col-sm-6 offset-sm-3">

                <h1>Login</h1>
                <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control mb-2" />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control mb-2" />

                <br />
                <button onClick={logIn} className="btn btn-primary">Log In</button>

            </div>
        </div>
    )
}

export default Login;