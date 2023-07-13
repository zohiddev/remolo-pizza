import axios from "axios";
import { BASE_URL } from '../utils'

export const Axios = (method, url, data = {}) => {
  return axios({
    method: method,
    url: `${BASE_URL}/${url}`,
    data: data,
  })
    .then((response) => response)
    .catch((error) => error.response);
};
