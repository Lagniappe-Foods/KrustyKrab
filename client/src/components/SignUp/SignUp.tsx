import * as Yup from 'yup';
import { Formik } from 'formik';
import { Link } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import { Root, InputGroup, SignUpForm } from './SignUp.styled';

// Validation object for new sign ups
const signupSchema = Yup.object({
  email: Yup.string().email('Invalid email address').required('Required'),
});

const SignUp = () => {
  return (
    <Root>
      <h1 className='mb-4'>Sign Up Page</h1>

      <Formik
        validationSchema={signupSchema}
        onSubmit={console.log} // TODO: replace with RTK signup
        initialValues={{
          email: '',
        }}
      >
        {({
          handleSubmit,
          handleChange,
          handleBlur,
          values,
          isValid,
          touched,
          errors,
          dirty,
        }) => (
          <SignUpForm noValidate onSubmit={handleSubmit}>
            <InputGroup controlId='email'>
              <Form.Control
                type='email'
                placeholder='Email'
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                name='email'
                size='lg'
                isInvalid={!!errors.email && !!touched.email}
              />
              <Form.Control.Feedback className='FeedBack' type='invalid'>
                {errors.email?.toString()}
              </Form.Control.Feedback>
            </InputGroup>

            <Button
              // Start out disabled on initial load and until all fields valid
              disabled={!(isValid && dirty)}
              variant='primary'
              className='SignUpButton'
              type='submit'
            >
              Sign Up
            </Button>
            <Form.Text>
              Already a User? <Link to='/login'>Log In</Link>
            </Form.Text>
          </SignUpForm>
        )}
      </Formik>
    </Root>
  );
};

export default SignUp;
