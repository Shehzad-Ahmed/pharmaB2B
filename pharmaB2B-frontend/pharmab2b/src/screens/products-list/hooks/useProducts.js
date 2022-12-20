import { useEffect, useReducer } from 'react';
import apiCallReducer from '../../../utils/apiCallReducer';
import getProductsAPI from '../api/productsList';

const useProducts = (defaultValue) => {
  const [{ loading, error, data }, dispatch] = useReducer(apiCallReducer, {
    data: [],
    loading: true,
    error: '',
  });
  useEffect(() => {
    dispatch({ type: 'FETCH_REQUEST' });
    const getProducts = async () => {
      try {
        const results = await getProductsAPI();
        dispatch({ type: 'FETCH_SUCCESS', payload: results.data });
      } catch (error) {
        dispatch({ type: 'FETCH_FAIL', error: error.message });
      }
    };
    getProducts();
  }, []);

  return data;
};

export default useProducts;
