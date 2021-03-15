import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import Header from './Header';

function Register() {

    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const history = useHistory()

    useEffect(() => {
        if (localStorage.getItem('user-info')) {
            history.push("/add")
        }
    })

    async function signUp() {
        let item = { name, password, email }
        console.warn(item)

        let result = await fetch("http://127.0.0.1:8000/api/register", {
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

                <h1>Register</h1>
                <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} className="form-control mb-2" />
                <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control mb-2" />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control mb-2" />

                <br />
                <button onClick={signUp} className="btn btn-primary">Sign In</button>

            </div>
        </div>
    )
}

export default Register;