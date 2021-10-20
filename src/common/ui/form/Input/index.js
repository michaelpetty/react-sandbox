const Input = props => {
    const { type, label, id, ...other } = props

    return (
        <>
            <label htmlFor={id}>{label}:</label>
            <input type={type} id={id} {...other}/>
        </>
    )
}

export default Input