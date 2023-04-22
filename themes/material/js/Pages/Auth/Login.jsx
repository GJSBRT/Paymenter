import React from 'react';
import { Form, Formik } from 'formik';
import { useLoginUserMutation } from '../../API';
import { useNavigate } from "react-router-dom";
import Input from '../../Components/Input';
import Button from '../../Components/Button';
import Checkbox from '../../Components/Checkbox';

export default function Login() {
    const [loginUser] = useLoginUserMutation();
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
        <div className='mx-auto max-w-screen-xl my-auto w-1/4'>
            <Formik
                initialValues={{ email: '', password: '' }}
                onSubmit={handleSubmit}
            >
                {({
                    values,
                    handleChange,
                    handleBlur,
                    isSubmitting,
                }) => (
                    <Form>
                        <h2 class="text-4xl font-bold dark:text-white">Login</h2>
                        <div className='mt-6'>
                            <div class="mb-6">
                                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                <Input
                                    name='email'
                                    type='email'
                                    placeholder='j.doe@example.com'
                                    autoComplete="email"
                                    disabled={isSubmitting}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                />
                            </div>
                            <div class="mb-6">
                                <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                                <Input
                                    name='password'
                                    type='password'
                                    placeholder='**********'
                                    autoComplete="password"
                                    disabled={isSubmitting}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password}
                                />
                            </div>
                            
                            <div class="flex items-start mb-6">
                                <div class="flex items-center h-5">
                                    <Checkbox
                                        disabled={isSubmitting}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.password}
                                    />
                                </div>
                                <label for="remember" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                            </div>

                            <Button type="submit">Submit</Button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    )
}