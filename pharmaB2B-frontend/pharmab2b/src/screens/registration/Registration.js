import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Store } from '../../store/StoreProvider';
import RegistrationForm from './components/RegistrationForm';
import RegistrationMessage from './components/RegistrationMessage';

const Registration = () => {
  const { state } = useContext(Store);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const onSuccessHandler = () => {
    setSuccess(true);
  };

  useEffect(() => {
    //if already logged in.
    console.log(state.userDetails);
    if (state.userDetails) {
      navigate('/');
    }
  }, []);

  return success ? (
    <RegistrationMessage></RegistrationMessage>
  ) : (
    <RegistrationForm onSuccess={onSuccessHandler}></RegistrationForm>
  );
};

export default Registration;
