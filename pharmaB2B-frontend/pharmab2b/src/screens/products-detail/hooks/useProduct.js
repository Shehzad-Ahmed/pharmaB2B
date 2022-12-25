import { useEffect, useReducer } from 'react';
import apiCallReducer from '../../../utils/apiCallReducer';
import useAxios from '../../../utils/useAxios';

const useProduct = (defaultValue, id) => {
  const [{ loading, error, data: product }, dispatch] = useReducer(
    apiCallReducer,
    {
      data: defaultValue,
      loading: true,
      error: '',
    }
  );
  const api = useAxios();
  useEffect(() => {
    dispatch({ type: 'FETCH_REQUEST' });
    const getProduct = async (id) => {
      try {
        const response = await api.get(`/api/inventory/products/${id}`);
        dispatch({
          type: 'FETCH_SUCCESS',
          payload: getProductDetails(response.data),
        });
      } catch (error) {
        dispatch({ type: 'FETCH_FAIL', error: error.message });
      }
    };
    getProduct(id);
  }, [id]);

  const getProductDetails = (data) => {
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

  return { product, loading, error };
};

export default useProduct;
