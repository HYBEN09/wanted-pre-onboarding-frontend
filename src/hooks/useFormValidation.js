import { useState } from 'react';

const useFormValidation = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validateEmail = (inputEmail) => {
    if (!inputEmail.includes('@')) {
      setEmailError('이메일 형식이 올바르지 않습니다.');
      return false;
    } else {
      setEmailError('');
      return true;
    }
  };

  const validatePassword = (inputPassword) => {
    if (inputPassword.length < 8) {
      setPasswordError('비밀번호는 8자 이상이어야 합니다.');
      return false;
    } else {
      setPasswordError('');
      return true;
    }
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    emailError,
    passwordError,
    validateEmail,
    validatePassword,
  };
};

export default useFormValidation;
