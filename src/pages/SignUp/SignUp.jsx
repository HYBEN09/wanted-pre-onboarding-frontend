import {
  useEmailValidation,
  usePasswordValidation,
} from '../../hooks/useFormValidation';
import { signUp } from '../../api/auth';
import { useNavigate } from 'react-router-dom';
import classes from '../SignIn/SignIn.module.css';
import Button from '../../components/Button/Button';
import FormControl from '../../components/FormControl/FormControl';

function SignUp() {
  const navigate = useNavigate();
  const { email, setEmail, emailError, isValidEmail, validateEmail } =
    useEmailValidation();
  const {
    password,
    setPassword,
    passwordError,
    isValidPassword,
    validatePassword,
  } = usePasswordValidation();

  const isDisabled = !(isValidEmail && isValidPassword);

  const handleEmailChange = (e) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);
    validateEmail(inputEmail);
  };

  const handlePasswordChange = (e) => {
    const inputPassword = e.target.value;
    setPassword(inputPassword);
    validatePassword(inputPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isValidEmail && isValidPassword) {
      const result = await signUp(email, password);
      if (result.success) {
        alert('회원가입이 완료되었습니다.');
        navigate('/signin');
      } else {
        console.error('회원가입 중 오류가 발생:', result.error);
      }
    }
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
