import React, { useState, useEffect } from 'react'
import {
    Container, Grid, Typography, Box,
    List, ListItem, ListItemText, ListItemIcon, Stack, TextField, Button, TextareaAutosize,
} from '@mui/material'
import emailjs from '@emailjs/browser'
import PhoneIcon from '@mui/icons-material/Phone';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MuiPhoneNumber from 'material-ui-phone-number';
import { UseForm, Form } from '../../UseForm/UseForm';
import { useNavigate } from 'react-router-dom';
import { LoadingButton } from '@mui/lab';

const ContactForm = () => {
    let navigate = useNavigate();
    // const [value, setValue] = React.useState(null);
    const [loading, setLoading] = useState(false);
    const [phnum, setPhnum] = useState('');
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
        userMessage: '',
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
        temp.userMessage = formValues.userMessage ? "" : "This field is required."
        temp.userEmail = (/$^|.+@.+..+/).test(formValues.userEmail) ? "" : "Email is not valid."
        // temp.userPhone = formValues.userPhone.length >= 9 ? "" : "Mobile number not valid."
        // temp.paymentMode = formValues.paymentMode.length != 0 ? "" : "This field is required"
        setErrors({
            ...temp
        })

        return Object.values(temp).every(x => x === "")
    }

    useEffect(() => {
        if (emailResponse) {
            setLoading(false)
        }

    }, [emailResponse])


    const handleSubmit = (e) => {
        e.preventDefault()
        if (validate()) {
            setLoading(true)
            const templateParams = {
                name: formValues.userName,
                email: formValues.userEmail,
                phoneNumber: phnum,
                userMessage: formValues.userMessage,
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

    const handleOnChange = (val) => {
        setPhnum(val)
    }


    return (
        <Container>
            <Box>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    <Grid item xs={6}>
                        <Box container sx={{
                            paddingRight: '50px',
                            display: 'flex',
                            alignItems: 'flex-start',
                            justifyContent: 'center',
                            flexDirection: 'column',
                            '@media screen and (max-width:678px)': {
                                alignItems: 'center',
                                justifyContent: 'center',
                                padding: 0,
                            },
                        }}>
                            <Box>
                                <Typography variant='h6' color='primary' component='h6'>
                                    GET IN TOUCH
                                </Typography>
                            </Box>
                            <Box>

                                <Typography variant='h4' component='h3'
                                    sx={{
                                        color: 'primary.black',
                                        fontWeight: 'bold',

                                    }}
                                >
                                    Find Us Here
                                </Typography>
                            </Box>
                            <Box container>
                                <List spacing={10}>
                                    <ListItem>

                                        <ListItemIcon>
                                            <LocationOnIcon color='primary' />
                                        </ListItemIcon>
                                        <ListItemText primary="Deira, Dubai" />

                                    </ListItem>
                                    <ListItem >

                                        <ListItemIcon>
                                            <PhoneIcon color='primary' />
                                        </ListItemIcon>
                                        <ListItemText primary="+971 45914066" />

                                    </ListItem>
                                    <ListItem>

                                        <ListItemIcon>
                                            <AlternateEmailIcon color='primary' />
                                        </ListItemIcon>
                                        <ListItemText primary="booking@goyakatravels.com" />

                                    </ListItem>
                                </List>
                            </Box>

                        </Box>
                    </Grid>
                    <Grid item xs={6}>

                        <Stack spacing={3} component='form' onSubmit={handleSubmit}
                            padding={{ xs: 3, md: 5 }}
                        >
                            <Typography variant='h6'>Submit your query</Typography>

                            <Stack alignItems='center' justifyContent='center'
                                direction={{ xs: 'column', sm: 'row', md: 'column' }}
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

                                <MuiPhoneNumber defaultCountry={'ae'} variant='outlined' size='small'
                                    fullWidth
                                    label='Phone Number'
                                    name='userPhone'

                                    onChange={handleOnChange}
                                    // helperText={errors.userPhone}
                                    required
                                />

                                <TextField variant='outlined' size='small' fullWidth color='primary'
                                    label='Message'
                                    name='userMessage'
                                    value={formValues.userMessage}
                                    onChange={handleInputChange}
                                    helperText={errors.userMessage}
                                    minRows={3}
                                    multiline
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



                    </Grid>
                </Grid>
                <Box>
                    <Box container component='div' sx={{
                        borderRadius: '10px',
                        marginBottom: 10,
                        marginTop: 10
                    }}>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57728.70667430926!2d55.29058389576944!3d25.269099638041716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f434f37cdae93%3A0xde756363a1b78491!2sDeira%20-%20Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sin!4v1651079362687!5m2!1sen!2sin" width={"100%"} height={"350px"} sx={{
                            border600px: 'none'
                        }} style={{ borderRadius: 10, border: 0 }}></iframe>
                        {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462560.30119263526!2d54.947553063214514!3d25.076381469525977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sin!4v1646677833497!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe> */}
                    </Box>
                </Box>
            </Box>

        </Container>
    )
}

export default ContactForm