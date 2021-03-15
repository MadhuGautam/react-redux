import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

function Login(pros) {
    let Cmp = pros.Cmp
    const history = useHistory()

    useEffect(() => {
        if (!localStorage.getItem('user-info')) {
            history.push("/login")
        }
    })

    return (

        <div>
            <Cmp />
        </div>
    )
}

export default Login;