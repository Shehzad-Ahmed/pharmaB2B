import axios from 'axios';

const register = async (customerDetails) => {
  const payload = {
    users: {
      first_name: customerDetails.firstName,
      last_name: customerDetails.lastName,
      email: customerDetails.email,
    },
    shop_name: customerDetails.shopName,
    address: customerDetails.address,
    postal_code: customerDetails.postalCode,
    city: customerDetails.city,
    license_number: customerDetails.licenseNumber,
  };
  return await axios.post('/api/customers/register/', payload);
};

export default register;
