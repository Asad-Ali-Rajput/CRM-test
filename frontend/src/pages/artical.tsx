import { useRouter } from 'next/router';

const ArticlePage = () => {
  const router = useRouter();

  return (
    <div>
      <h1>Article Page</h1>
      <button onClick={() => router.push('/')}>Home</button>
    </div>
  );
};

export default ArticlePage;
