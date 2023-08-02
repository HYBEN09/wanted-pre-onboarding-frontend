import { useNavigate } from 'react-router-dom';
import classes from './SignIn.module.css';
import FormControl from '../../components/FormControl/FormControl';
import Button from '../../components/Button/Button';
import {
  useEmailValidation,
  usePasswordValidation,
} from '../../hooks/useFormValidation';
import { signIn } from '../../api/auth';

function SignIn() {
  const { email, setEmail, emailError, isValidEmail } = useEmailValidation();

  const { password, setPassword, passwordError, isValidPassword } =
    usePasswordValidation();

  const navigate = useNavigate();
  const isDisabled = !isValidEmail || !isValidPassword;

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isValidEmail && isValidPassword) {
      const result = await signIn(email, password);
      if (result.success) {
        alert('로그인이 완료되었습니다.');
        navigate('/todo');
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
