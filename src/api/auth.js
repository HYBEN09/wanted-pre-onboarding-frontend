import axios from 'axios';
import { BASE_URL } from './api';

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// signUp
export const signUp = async (email, password) => {
  try {
    const response = await api.post('auth/signup', {
      email,
      password,
    });

    if (response.status === 201) {
      return { success: true };
    } else {
      console.error('회원가입 실패:', response);
      return { success: false, error: response };
    }
  } catch (error) {
    console.error('회원가입 중 오류가 발생:', error);
    return { success: false, error };
  }
};

// signIn
export const signIn = async (email, password) => {
  try {
    const response = await api.post('auth/signin', {
      email,
      password,
    });

    if (response.status === 200) {
      const token = response.data.access_token;
      window.localStorage.setItem('token', token);
      return { success: true };
    } else {
      console.error('로그인 실패:', response);
      return { success: false, error: response };
    }
  } catch (error) {
    console.error('로그인 중 오류가 발생:', error);
    return { success: false, error };
  }
};
