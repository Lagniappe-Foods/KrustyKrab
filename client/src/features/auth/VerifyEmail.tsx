import { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { ClipLoader } from 'react-spinners';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { useVerifyEmailMutation } from '../../store/slices/api/templateApi';
import { setUser } from '../../store/slices/authSlice';
import { useAppDispatch } from '../../store/hooks';

const VerifyEmail = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [searchParams] = useSearchParams();

  const [verifyEmail, { isSuccess, isError, isLoading, data: userData }] =
    useVerifyEmailMutation();

  // Grab emailToken from URL
  const emailToken = searchParams.get('emailToken');

  useEffect(() => {
    // Navigate home if no token in url
    if (!emailToken) navigate('/');

    // Attempt to verify email
    verifyEmail({ body: { emailToken } });
  }, []);

  // Handle outcomes of verifying email
  useEffect(() => {
    if (isSuccess) {
      console.log('Successfully verified user');

      // Save user to redux
      dispatch(setUser({ ...userData }));
      navigate('/set-password');
    }

    if (isError) {
      console.log('Failed to verify user');
      navigate('/'); // Navigate home if emailToken was invalid
    }
  }, [isSuccess, isError, isLoading]);

  // TODO: Just put a spinner in the center of the page
  return (
    <Container>
      {isLoading && <ClipLoader size={50} color='blue' loading />}
    </Container>
  );
};

export default VerifyEmail;