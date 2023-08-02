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
