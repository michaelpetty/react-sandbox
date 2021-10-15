import {render, screen} from '@testing-library/react'
import Login from './Login'

describe('Login Comp', () => {
    test('renders login text', () => {
        render(<Login />)
        expect(screen.getByText(/log in/i)).toBeInTheDocument()
    })
})