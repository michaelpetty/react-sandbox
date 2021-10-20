import { Input, Button } from '../../common/ui/form'

const Login = (props) => {
    return (
        <>
        <h3>Login to your Account</h3>
        <form>
            <Input type='email' name='email' label='Email' id='userEmail'/>
            <Input type='password' name='password' id='userPassword' label='Password' />
            <Button type='submit'>Login</Button>
        </form>
        </>
    )
}

export default Login