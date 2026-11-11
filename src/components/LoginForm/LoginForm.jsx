// import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/operations';
// import { register } from '../../redux/auth/operations';
import { Formik } from 'formik';
import * as Yup from 'yup';

import { TextField, Button, Box } from '@mui/material';

const loginSchema = Yup.object({
  email: Yup.string()
    .email("That doesn't look like a valid email")
    .required('Required'),
  password: Yup.string().required('Required'),
});

export const LoginForm = () => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={loginSchema}
      onSubmit={(values, { resetForm }) => {
        dispatch(login(values));
        resetForm();
      }}
    >
      {({ values, errors, touched, handleChange, handleSubmit }) => (
        <Box
          component="form"
          sx={{
            display: 'flex',
            gap: '20px',
            flexDirection: 'column',
            padding: '50px',
          }}
          onSubmit={handleSubmit}
        >
          <TextField
            error={errors.email && touched.email}
            helperText={errors.email}
            variant="standard"
            label="Email"
            type="email"
            name="email"
            onChange={handleChange}
            value={values.email}
          />

          <TextField
            error={errors.password && touched.password}
            helperText={errors.password}
            variant="standard"
            label="Password"
            type="text"
            name="password"
            onChange={handleChange}
            value={values.password}
          />

          <Button variant="contained" type="submit">
            Log In
          </Button>
        </Box>
      )}
    </Formik>
  );
};
