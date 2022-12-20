import axios from 'axios';

const getProductDetails = async (id) => {
  return await axios.get(`/api/inventory/products/${id}`);
};

export default getProductDetails;
