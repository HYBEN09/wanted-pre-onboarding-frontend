import { useState } from 'react';
import classes from '../SignIn/SignIn.module.css';
import Button from '../../components/Button/Button';
import FormControl from '../../components/FormControl/FormControl';

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // 이메일 유효성 검사 (@ 포함)
    if (!email.includes('@')) {
      setEmailError('이메일 형식이 올바르지 않습니다.');
      return;
    } else {
      setEmailError('');
    }

    // 비밀번호 유효성 검사 (8자 이상)
    if (password.length < 8) {
      setPasswordError('비밀번호는 8자 이상이어야 합니다.');
      return;
    } else {
      setPasswordError('');
    }

    console.log('submitted', { email, password });
    // 회원가입 처리 로직 구현
  };

  return (
    <div className={classes.container}>
      <div className={classes.formWrapper}>
        <h2>회원가입</h2>
        <form onSubmit={handleSubmit}>
          <FormControl
            label="이메일"
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            errorMessage={emailError}
          />
          <FormControl
            label="비밀번호"
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            errorMessage={passwordError}
          />
          <Button type="submit" testId="signup-button">
            회원가입
          </Button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;