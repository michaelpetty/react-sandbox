import React from "react"

const Input = React.forwardRef((props, ref) => {
    const { type, label, id, ...other } = props

    return (
        <>
            <label htmlFor={id}>{label}:</label>
            <input type={type} id={id} {...other} ref={ref} />
        </>
    )
})

export default Input