import { useState, useEffect } from 'react';

// Email Validation
export function useEmailValidation() {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(false);

  useEffect(() => {
    setIsValidEmail(validateEmail(email));
  }, [email]);

  const validateEmail = (inputEmail) => {
    if (!inputEmail.includes('@')) {
      setEmailError('이메일 형식이 올바르지 않습니다.');
      return false;
    } else {
      setEmailError('');
      return true;
    }
  };

  return { email, setEmail, emailError, isValidEmail };
}

// Password Validation
export function usePasswordValidation() {
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isValidPassword, setIsValidPassword] = useState(false);

  useEffect(() => {
    setIsValidPassword(validatePassword(password));
  }, [password]);

  const validatePassword = (inputPassword) => {
    if (inputPassword.length < 8) {
      setPasswordError('비밀번호는 8자 이상이어야 합니다.');
      return false;
    } else {
      setPasswordError('');
      return true;
    }
  };

  return { password, setPassword, passwordError, isValidPassword };
}
