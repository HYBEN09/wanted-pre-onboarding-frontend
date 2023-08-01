import { useNavigate } from 'react-router-dom';
import classes from '../SignIn/SignIn.module.css';
import Button from '../../components/Button/Button';
import FormControl from '../../components/FormControl/FormControl';
import useFormValidation from '../../hooks/useFormValidation';

function SignUp() {
  const navigate = useNavigate();
  const {
    email,
    setEmail,
    password,
    setPassword,
    emailError,
    passwordError,
    validateEmail,
    validatePassword,
  } = useFormValidation();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    validateEmail(); // 실시간 검사 추가
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    validatePassword(); // 실시간 검사 추가
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();

    if (isEmailValid && isPasswordValid) {
      console.log('submitted', { email, password });

      navigate('/signin');
    }
  };

  const isDisabled = !email.includes('@') || password.length < 8;

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
            onChange={handleEmailChange}
            required
            errorMessage={emailError}
          />
          <FormControl
            label="비밀번호"
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
            errorMessage={passwordError}
          />
          <Button type="submit" testId="signup-button" disabled={isDisabled}>
            회원가입
          </Button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
