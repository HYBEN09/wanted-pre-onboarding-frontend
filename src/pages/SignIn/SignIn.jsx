import {
  useEmailValidation,
  usePasswordValidation,
} from '../../hooks/useFormValidation';
import { signIn } from '../../api/auth';
import classes from './SignIn.module.css';
import Button from '../../components/Button/Button';
import FormControl from '../../components/FormControl/FormControl';
import { useNavigate } from 'react-router-dom';

function SignIn() {
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

  const isDisabled = !isValidEmail || !isValidPassword;

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    validateEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    validatePassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isValidEmail && isValidPassword) {
      const result = await signIn(email, password);
      if (result.success) {
        alert('로그인이 완료되었습니다.');
        window.location.reload();
        return navigate('/todo');
      } else {
        alert('로그인 실패');
      }
    }
  };

  return (
    <div className={classes.container}>
      <div className={classes.formWrapper}>
        <h2>로그인</h2>
        <form onSubmit={handleSubmit}>
          <FormControl
            label="이메일"
            type="email"
            id="email"
            value={email}
            required
            onChange={handleEmailChange}
            data-testid="email-input"
            errorMessage={emailError}
          />
          <FormControl
            label="비밀번호"
            type="password"
            id="password"
            value={password}
            required
            onChange={handlePasswordChange}
            data-testid="password-input"
            errorMessage={passwordError}
          />
          <Button type="submit" testId="signin-button" disabled={isDisabled}>
            로그인
          </Button>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
