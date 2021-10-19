import {render, screen} from '@testing-library/react'
import Login from './Login'

describe('Login Comp', () => {
    test('displays login header', () => {
        render(<Login />)
        const h3 = screen.getByRole('heading', {level: 3})
        expect(h3).toBeInTheDocument()
        expect(h3).toHaveTextContent(/login/i)
    })

    test('displays login fields', () => {
        render(<Login />)
        const emailField = screen.getByRole('textbox', {name: /email/i})
        expect(emailField).toHaveValue('')
        const passwordField = screen.getByLabelText(/password/i)
        expect(passwordField).toHaveValue('')
    })

    test('displays button', () => {
        render(<Login />)
        const submitButton = screen.getByRole('button', {name: /login/i})
        expect(submitButton).toBeInTheDocument()
    })
})