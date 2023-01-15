import React from 'react';
import { Box, Typography, Button, TextField, Grid, Link } from '@mui/material';
import { Formik } from 'formik';
import { useGetUserQuery, useLoginUserMutation } from '../../API';
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [ loginUser ] = useLoginUserMutation();
    const navigate = useNavigate();

    const handleSubmit = (values, { setSubmitting }) => {
        loginUser(values).then(() => {
            navigate('/dashboard');
            setSubmitting(false);
        }).catch((error) => {
            console.log(error);
            setSubmitting(false);
        });
    }

    return (
        <Box
            sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <Formik
                initialValues={{ email: '', password: '' }}
                onSubmit={handleSubmit}
            >
                {({
                    values,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                }) => (
                    <>
                        <Typography component="h1" variant="h5">
                            Login
                        </Typography>
                        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                type="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                disabled={isSubmitting}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                                autoFocus
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                autoComplete="current-password"
                                disabled={isSubmitting}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.password}
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                disabled={isSubmitting}
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Login
                            </Button>
                            <Grid container>
                                <Grid item xs>
                                    <Link href="#" variant="body2">
                                        Forgot password?
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link href="#" variant="body2">
                                        {"Don't have an account? Sign Up"}
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </>
                )}
            </Formik>
        </Box>
    )
}