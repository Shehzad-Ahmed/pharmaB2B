import axios from 'axios';
import jwt_decode from 'jwt-decode';
import dayjs from 'dayjs';
import { useContext } from 'react';
import { Store } from '../store/StoreProvider';

const baseURL = 'http://localhost:8008';

const useAxios = () => {
  const { state, dispatch: contextDispatch } = useContext(Store);
  const userDetails = state.userDetails;
  const axiosInstance = axios.create({
    baseURL,
    headers: { Authorization: `Bearer ${userDetails?.authTokens.access}` },
  });

  axiosInstance.interceptors.request.use(async (req) => {
    const isExpired = dayjs.unix(userDetails.exp).diff(dayjs()) < 1;

    if (!isExpired) return req;

    const response = await axios.post(`${baseURL}/api/token/refresh/`, {
      refresh: userDetails.authTokens.refresh,
    });

    const updatedUserDetails = jwt_decode(response.data.access);
    contextDispatch({
      type: 'USER_SIGN_IN',
      payload: { authTokens: response.data, ...updatedUserDetails },
    });
    //setUser(jwt_decode(response.data.access));

    req.headers.Authorization = `Bearer ${response.data.access}`;
    return req;
  });

  return axiosInstance;
};

export default useAxios;
