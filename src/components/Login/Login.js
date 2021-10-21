import { useState, useRef } from 'react'

import { Input, Button } from '../../common/ui/form'

const Login = (props) => {
    // using state for email and ref for password
    // to illustrate the two options 
    const [userInput, setUserInput] = useState({email: ''})
    const passwordRef = useRef()

    const changeHandler = e => {
        setUserInput((prevState) => {
            return { ...prevState, [e.target.name]: e.target.value }
        })
    }

    const submitHandler = e => {
        e.preventDefault()
        console.log('password: ', passwordRef.current.value)
        passwordRef.current.value = ''
        setUserInput({email: ''})
    }
    return (
        <>
        <h3>Login to your Account</h3>
        <form onSubmit={submitHandler}>
            <Input 
                type='email' 
                name='email' 
                label='Email' 
                id='userEmail' 
                value={userInput.email}
                onChange={changeHandler} 
            />
            <Input 
                type='password' 
                name='password' 
                id='userPassword' 
                label='Password' 
                ref={passwordRef}
            />
            <Button type='submit'>Login</Button>
        </form>
        </>
    )
}

export default Login