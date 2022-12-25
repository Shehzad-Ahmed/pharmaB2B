import React, { useState } from 'react';
import SuccessMessage from '../../components/SuccessMessage';
import ContactUsForm from './components/ContactUsForm';

const ContactUs = () => {
  const [success, onSuccess] = useState(false);

  return success ? (
    <SuccessMessage message="We have received your query, our support staff will get back to you soon."></SuccessMessage>
  ) : (
    <ContactUsForm onSuccess={onSuccess}></ContactUsForm>
  );
};

export default ContactUs;
