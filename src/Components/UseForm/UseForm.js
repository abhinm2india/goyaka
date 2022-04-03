import React, { useState } from 'react'

const UseForm = (initialValues) => {

    const [formValues, setFormValues] = useState(initialValues);

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
        handleInputChange
    }
}

export default UseForm

