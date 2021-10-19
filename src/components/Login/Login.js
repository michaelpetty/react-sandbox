const Login = (props) => {
    return (
        <>
        <h3>Login to your Account</h3>
        <form>
            <label htmlFor='userEmail'>Email:</label>
            <input type='email' name='email' id='userEmail' />
            <label htmlFor='userPassword'>Password:</label>
            <input type='password' name='password' id='userPassword'/>
            <button type='submit'>Login</button>
        </form>
        </>
    )
}

export default Login;