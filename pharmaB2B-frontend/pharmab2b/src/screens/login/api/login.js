import axios from 'axios';

const login = async (email, password) => {
  return await axios.post('http://localhost:8001/api/token/', {
    email: email,
    password: password,
  });
};

export default login;
