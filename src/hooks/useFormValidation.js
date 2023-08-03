import { useState } from 'react';

// Email Validation
export function useEmailValidation() {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(false);

  const validateEmail = (inputEmail) => {
    if (!inputEmail.includes('@')) {
      setEmailError('이메일 형식이 올바르지 않습니다.');
      setIsValidEmail(false);
    } else {
      setEmailError('');
      setIsValidEmail(true);
    }
  };

  return { email, setEmail, emailError, isValidEmail, validateEmail };
}

// Password Validation
export function usePasswordValidation() {
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isValidPassword, setIsValidPassword] = useState(false);

  const validatePassword = (inputPassword) => {
    const minLength = 8;
    if (inputPassword.length >= minLength) {
      setPasswordError('');
      setIsValidPassword(true);
    } else {
      setPasswordError(`비밀번호는 최소 ${minLength}자 이상이어야 합니다.`);
      setIsValidPassword(false);
    }
  };

  return {
    password,
    setPassword,
    passwordError,
    isValidPassword,
    validatePassword,
  };
}
