import { useEffect, useReducer } from 'react';
import apiCallReducer from '../../../utils/apiCallReducer';
import useAxios from '../../../utils/useAxios';

const useProducts = (defaultValue) => {
  const [{ loading, error, data: products }, dispatch] = useReducer(
    apiCallReducer,
    {
      data: [],
      loading: true,
      error: '',
    }
  );
  const api = useAxios();
  useEffect(() => {
    dispatch({ type: 'FETCH_REQUEST' });
    const getProducts = async () => {
      try {
        const results = await api.get('api/inventory/products/');
        dispatch({ type: 'FETCH_SUCCESS', payload: results.data });
      } catch (error) {
        dispatch({ type: 'FETCH_FAIL', error: error.message });
      }
    };
    getProducts();
  }, []);

  return { products, loading, error };
};

export default useProducts;
