import SignupUI from '@/components/Signup';
import { useRouter } from 'next/router';

const SignupPage = () => {
  const router = useRouter();

  const handleSubmit = () => {
    router.push('/login');
  };

  return (
    <div>
      <SignupUI />
    </div>
  );
};

export default SignupPage;
