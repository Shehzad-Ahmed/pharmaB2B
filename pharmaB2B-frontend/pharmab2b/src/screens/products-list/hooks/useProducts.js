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

        dispatch({
          type: 'FETCH_SUCCESS',
          payload: results.data.map((data) => transformData(data)),
        });
      } catch (error) {
        dispatch({ type: 'FETCH_FAIL', error: error.message });
      }
    };
    const transformData = (data) => {
      return {
        id: data.id,
        name: data.name,
        manufacturer: {
          name: data.manufacturer.name,
          description: data.manufacturer.description,
        },
        type: data.type,
        packagingType: data.packaging_type,
        unitsPerPackage: data.units_per_package,
        availablePackages: data.available_packages,
        price: data.price,
        gstApplicable: data.gst_applicable,
        gst: data.gst,
        imageUrl: data.image_url,
      };
    };
    getProducts();
  }, []);

  return { products, loading, error };
};

export default useProducts;
