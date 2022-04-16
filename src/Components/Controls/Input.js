import React from 'react'
import { TextField } from '@mui/material';

const Input = (props) => {

    const { name, label, value,error=null, onChange } = props;

    return (
        <TextField
        size='small'
            variant='outlined'
            label={label}
            value={value}
            name={name}
            onChange={onChange}
            {...(error && {error:true,helperText:error})}
        />
    )
}

export default Input