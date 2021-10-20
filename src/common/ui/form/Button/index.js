const Button = props => {
    const { type, children, ...other } = props

    return (    
        <button type={type}>
            {children}
        </button>
    )
}

export default Button