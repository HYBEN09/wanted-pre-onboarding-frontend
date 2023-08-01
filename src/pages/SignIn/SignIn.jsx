import classes from './SignIn.module.css';
import Button from '../../components/Button/Button';
import useFormValidation from '../../hooks/useFormValidation';
import FormControl from '../../components/FormControl/FormControl';

function SignIn() {
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
    validateEmail();
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    validatePassword();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 이메일 유효성 검사
    const isEmailValid = validateEmail();
    // 비밀번호 유효성 검사
    const isPasswordValid = validatePassword();

    if (isEmailValid && isPasswordValid) {
      console.log('submitted', { email, password });
      // 로그인 처리 로직 구현
    }
  };

  const isDisabled = !email.includes('@') || password.length < 8;

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
            onChange={handleEmailChange}
            required
            errorMessage={emailError}
            data-testid="email-input"
          />
          <FormControl
            label="비밀번호"
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
            errorMessage={passwordError}
            data-testid="password-input"
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
