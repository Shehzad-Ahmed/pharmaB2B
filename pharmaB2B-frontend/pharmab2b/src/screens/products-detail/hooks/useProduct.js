import { useEffect, useReducer } from 'react';
import apiCallReducer from '../../../utils/apiCallReducer';
import getProductDetails from '../api/productDetails';

const useProduct = (defaultValue, id) => {
  const [{ loading, error, data }, dispatch] = useReducer(apiCallReducer, {
    data: defaultValue,
    loading: true,
    error: '',
  });

  useEffect(() => {
    dispatch({ type: 'FETCH_REQUEST' });
    const getProduct = async (id) => {
      try {
        const results = await getProductDetails(id);
        dispatch({ type: 'FETCH_SUCCESS', payload: results.data });
      } catch (error) {
        dispatch({ type: 'FETCH_FAIL', error: error.message });
      }
    };
    getProduct(id);
  }, [id]);

  return data;
};

export default useProduct;
