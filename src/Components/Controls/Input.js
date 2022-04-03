import React from 'react'
import { TextField } from '@mui/material';

const Input = (props) => {

    const { name, label, value, onChange } = props;

    return (
        <TextField
            variant='outlined'
            label={label}
            value={value}
            name={name}
            onChange={onChange}
        />
    )
}

export default Input