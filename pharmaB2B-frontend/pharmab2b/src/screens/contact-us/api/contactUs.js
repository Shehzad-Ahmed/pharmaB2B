import axios from 'axios';

const contactUs = async (name, email, question, phoneNumber) => {
  const payload = {
    name: name,
    email: email,
    question: question,
    contact_no: phoneNumber ? phoneNumber : '',
  };
  return await axios.post('api/customers/contact_us/', payload);
};

export default contactUs;
