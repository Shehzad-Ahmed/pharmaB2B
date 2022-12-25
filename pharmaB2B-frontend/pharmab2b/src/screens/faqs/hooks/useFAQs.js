import axios from 'axios';
import { useEffect, useReducer } from 'react';
import apiCallReducer from '../../../utils/apiCallReducer';

const useFAQs = (defaultValue, searchQuery) => {
  const [{ loading, error, data: FAQsData }, dispatch] = useReducer(
    apiCallReducer,
    {
      data: defaultValue,
      loading: true,
      error: '',
    }
  );
  useEffect(() => {
    dispatch({ type: 'FETCH_REQUEST' });
    const getFAQs = async (id) => {
      try {
        const response = await axios.get(
          `/api/customers/faqs/?q=${searchQuery ? searchQuery : ''}`
        );
        dispatch({
          type: 'FETCH_SUCCESS',
          payload: getFAQDetails(response.data),
        });
      } catch (error) {
        dispatch({ type: 'FETCH_FAIL', error: error.message });
      }
    };
    getFAQs();
  }, [searchQuery]);

  const getFAQDetails = (data) => {
    return data.map((item) => {
      return {
        order: item.order,
        question: item.question,
        answer: item.answer,
      };
    });
  };

  return { FAQsData, loading, error };
};

export default useFAQs;
