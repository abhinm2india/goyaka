import React, { useState } from 'react'


export function UseForm(initialValues) {
    const [formValues, setFormValues] = useState(initialValues);
    const [errors, setErrors] = useState({});

    const handleInputChange = e => {
        const { name, value } = e.target
        setFormValues({
            ...formValues,
            [name]: value
        })
    }


    return {
        formValues,
        setFormValues,
        errors,
        setErrors,
        handleInputChange
    }
}



export default UseForm

export function Form(props) {


    const { children, ...other } = props;
    return (
        <form autoComplete="off" {...other}>
            {props.children}
        </form>
    )
}