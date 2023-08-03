import { createApiInstance, BASE_URL } from './api';

const api = createApiInstance(BASE_URL);

const makeRequest = async (url, data) => {
  try {
    const response = await api.post(url, data);
    return {
      success: response.status === 201 || response.status === 200,
      data: response.data,
    };
  } catch (error) {
    console.error('오류가 발생:', error);
    return { success: false, error };
  }
};

// signUp
export const signUp = async (email, password) => {
  const data = {
    email,
    password,
  };
  return makeRequest('auth/signup', data);
};

// signIn
export const signIn = async (email, password) => {
  const data = {
    email,
    password,
  };

  const result = await makeRequest('auth/signin', data);
  if (result.success) {
    const token = result.data.access_token;
    window.localStorage.setItem('token', token);
  }
  return result;
};
