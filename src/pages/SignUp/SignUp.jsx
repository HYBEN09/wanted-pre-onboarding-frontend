import { useState } from 'react';
import classes from '../SignIn/SignIn.module.css';
import FormControl from '../../components/FormControl/FormControl';
import Button from '../../components/Button/Button';

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
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
          />
          <FormControl
            label="비밀번호"
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
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
