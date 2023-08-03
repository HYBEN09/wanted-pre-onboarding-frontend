import axios from 'axios';

export const BASE_URL = 'https://www.pre-onboarding-selection-task.shop/';

export const createApiInstance = (baseURL, headers) => {
  const token = localStorage.getItem('token');
  return axios.create({
    baseURL,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
      ...headers,
    },
  });
};
