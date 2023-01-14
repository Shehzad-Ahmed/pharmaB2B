import axios from 'axios';

const login = async (email, password) => {
  return await axios.post('http://localhost:8008/api/token/', {
    email: email,
    password: password,
  });
};

export default login;
