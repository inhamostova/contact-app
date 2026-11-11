import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import { Formik } from 'formik';
import * as Yup from 'yup';
import YupPassword from 'yup-password';
import Container from '@mui/material/Container';

import { TextField, Button, Box } from '@mui/material';

YupPassword(Yup);

const registrationSchema = Yup.object({
  name: Yup.string().required('Required'),
  email: Yup.string()
    .email("That doesn't look like a valid email")
    .required('Required'),
  password: Yup.string()
    .min(
      8,
      'password must contain 8 or more characters with at least one number'
    )
    .minNumbers(1, 'password must contain at least 1 number')
    .required('Required'),
});

export const RegisterForm = () => {
  const dispatch = useDispatch();

  return (
    <Container maxWidth="sm">
      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
        }}
        validationSchema={registrationSchema}
        onSubmit={async (values, { resetForm }) => {
          await dispatch(register(values)).unwrap();
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
              error={errors.name && touched.name}
              helperText={errors.name}
              variant="standard"
              label="Name"
              type="text"
              name="name"
              onChange={handleChange}
              value={values.name}
            />

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
              Register
            </Button>
          </Box>
        )}
      </Formik>
    </Container>
  );
};
