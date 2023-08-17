import LoginUI from '@/components/Login';
import { useRouter } from 'next/router';

const LoginPage = () => {
  const router = useRouter();

  const handleSignUpClick = () => {
    router.push('/signup');
  };

  return (
    <div>
      {/* <h1>Login Page</h1> */}
      <LoginUI />
      {/* <button onClick={handleSignUpClick}>Sign Up</button>
      <button onClick={() => router.push('/')}>Login</button> */}
    </div>
  );
};

export default LoginPage;
