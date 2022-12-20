import axios from 'axios';

const getProductsAPI = async () => {
  return await axios.get('/api/inventory/products/');
};

export default getProductsAPI;
