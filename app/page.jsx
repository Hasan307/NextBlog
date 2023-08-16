import Link from 'next/link';

const Home = () => {
  return (
    <div className='bg-black text-white h-[100vh] py-60 '>
      <h1 className='font-bold text-6xl flex justify-center items-center'>Welcome to My Next.js Blog</h1>
      <br />
      <br />
      <Link className='flex justify-center items-center ' href="/blog">
        
        <div class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
          Go to Blog
          </div>
        
        </Link>
    </div>
  );
};

export default Home;
