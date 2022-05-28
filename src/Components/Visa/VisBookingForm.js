import React, { useEffect, useState } from 'react'
import {
    Typography, Modal, Box, Stack, TextField,
    Paper, FormControl, InputLabel, Select, MenuItem, Button,
} from '@mui/material'

import { LoadingButton } from '@mui/lab';
import { UseForm } from '../UseForm/UseForm';
// import emailjs from 'emailjs-com'
import emailjs from '@emailjs/browser'
// import SendIcon from '@mui/icons-material/Send';
import { useNavigate } from 'react-router-dom';


const VisBookingForm = () => {

    let navigate = useNavigate();

    const [loading, setLoading] = useState(false);

    const [userCountry, setUserCountry] = useState('');
    const [visaType, setVisaType] = useState('');
    const [visaDuration, setVisaDuration] = useState('');
    const [emailResponse, setEmailResponse] = useState(null);

    const [openSecM, setOpenSecM] = useState(false);
    const handleCloseSecM = () => {
        setOpenSecM(false)
        navigate("/");
    };

    const initialValues = {
        userName: '',
        userEmail: '',
        userPhone: '',

    }

    const {
        formValues,
        setFormValues,
        errors,
        setErrors,
        handleInputChange
    } = UseForm(initialValues);

    const validate = () => {
        let temp = {}
        temp.userName = formValues.userName ? "" : "This field is required."
        temp.userEmail = (/$^|.+@.+..+/).test(formValues.userEmail) ? "" : "Email is not valid."
        temp.userPhone = formValues.userPhone.length >= 9 ? "" : "Mobile number not valid."
        // temp.paymentMode = formValues.paymentMode.length != 0 ? "" : "This field is required"
        setErrors({
            ...temp
        })

        return Object.values(temp).every(x => x === "")
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        if (validate()) {
            setLoading(true)
            const templateParams = {
                name: formValues.userName,
                email: formValues.userEmail,
                phoneNumber: formValues.userPhone,
                userCountry,
                visaType,
                visaDuration

            };


            emailjs.send('service_dn309pg', 'template_rg94ei7', templateParams, 'S3F5_MUBsi9MJbGzU')
                .then(function (response) {
                    setEmailResponse(response.status)
                    setOpenSecM(true);
                    console.log('SUCCESS!', response.status, response.text);

                }, function (error) {
                    setEmailResponse('failed')
                    console.log('FAILED...', error);
                });
        }
    }
    useEffect(() => {
        if (emailResponse) {
            setLoading(false)
        }

    }, [emailResponse])


    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: { xs: 285, md: 400 },
        bgcolor: 'background.paper',
        border: '0px solid #000',
        boxShadow: 24,
        p: 4,
        borderRadius: 2,

    };

    return (
        <>
            <Paper
                sx={{
                    border: '0px solid #000',
                    borderRadius: '10px',
                    boxShadow: 'rgb(0 0 0 / 17%) 0px 6px 29px -4px',
                backgroundColor:'#fff5f7',
                    marginBottom: 10,

                }}

            >
                <Stack spacing={3} component='form' onSubmit={handleSubmit}
                    padding={{ xs: 3, md: 5 }}
                >
                    <Typography variant='h5'>Book Your VISA</Typography>
                    <Stack alignItems='center' justifyContent='center'
                        direction={{ xs: 'column', sm: 'row', md:'column' }}
                        spacing={{ xs: 2, sm: 2, md: 2 }}
                    >

                        <FormControl fullWidth size='small'>
                            <InputLabel id="demo-simple-select-label" >Select Your Country</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="country"
                                value={userCountry}
                                label="Select Your Country"
                                onChange={(e) => setUserCountry(e.target.value)}
                                displayEmpty
                                required
                                
                            >
                                <MenuItem value={'India'}>India</MenuItem>
                                <MenuItem value={'USA'}>USA</MenuItem>
                                <MenuItem value={'UK'}>UK</MenuItem>
                                <MenuItem value={'China'}>China</MenuItem>
                                <MenuItem value={'Nepal'}>Nepal</MenuItem>
                                <MenuItem value={'Indonasia'}>Indonasia</MenuItem>
                                <MenuItem value={'Pakistan'}>Pakistan</MenuItem>
                                <MenuItem value={'Russia'}>Russia</MenuItem>

                            </Select>
                        </FormControl>
                        <FormControl fullWidth size='small'>
                            <InputLabel id="demo-simple-select-label" >Visa Type</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="visa"
                                value={visaType}
                                label="Visa Type"
                                onChange={(e) => setVisaType(e.target.value)}
                                displayEmpty
                                required
                            >
                                <MenuItem value={'visiting visa'}>Visiting Visa</MenuItem>
                                <MenuItem value={'Work Visa'}>Work Visa</MenuItem>

                            </Select>
                        </FormControl>
                        <FormControl fullWidth size='small'>
                            <InputLabel id="demo-simple-select-label" >Visa Duration</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="visa-duration"
                                value={visaDuration}
                                label="Visa Duration"
                                onChange={(e) => setVisaDuration(e.target.value)}
                                displayEmpty
                                required
                            >
                                <MenuItem value={'One Month'}>One Month</MenuItem>
                                <MenuItem value={'Three Months'}>Three Months</MenuItem>

                            </Select>
                        </FormControl>


                    </Stack>
                    <Stack alignItems='center' justifyContent='center'
                        direction={{ xs: 'column', sm: 'row', md:'column' }}
                        spacing={{ xs: 2, sm: 2, md: 2 }}
                    >
                        <TextField variant='outlined' fullWidth size='small'
                            label='Your Name'
                            name='userName'
                            value={formValues.userName}
                            onChange={handleInputChange}
                            helperText={errors.userName}

                        />
                        <TextField variant='outlined' fullWidth size='small'
                            label='Email Id'
                            name='userEmail'
                            value={formValues.userEmail}
                            onChange={handleInputChange}
                            helperText={errors.userEmail}
                        />
                        <TextField variant='outlined' size='small' fullWidth color='primary'
                            label='Phone Number'
                            name='userPhone'
                            value={formValues.userPhone}
                            onChange={handleInputChange}
                            helperText={errors.userPhone}
                        />
                    </Stack>
                    <Stack direction={{ xs: 'column', sm: 'row' }}
                        spacing={{ xs: 2, sm: 2, md: 4 }} alignItems='center' justifyContent='center'>

                        {
                            loading ? <LoadingButton
                                disabled
                                loading={loading}
                                loadingPosition="end"
                                variant="contained"
                                fullWidth
                            >
                                Sending...
                            </LoadingButton> : (<Button type='submit' fullWidth variant='contained'>Book Now</Button>)
                        }



                        {/* <Button type='submit' fullWidth variant='contained'>Book Now</Button> */}
                    </Stack>
                </Stack>
            </Paper>
            <div>
                <Modal
                    open={openSecM}
                    onClose={handleCloseSecM}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Stack spacing={2} alignItems='center' justifyContent='center'>

                            {emailResponse === 200 ? (
                                <>

                                    <Typography variant='h6'>
                                        Message send successfully.
                                    </Typography>
                                    <Typography variant='subtitle1'>
                                        Our executive will contact you shortly!
                                    </Typography>
                                </>
                            )

                                : (<Typography variant='h6'>
                                    Message sending Failed.
                                </Typography>)}



                            <Button variant='outlined' onClick={handleCloseSecM}>Thank You</Button>
                        </Stack>


                    </Box>

                </Modal>
            </div>
        </>
    )
}

export default VisBookingForm