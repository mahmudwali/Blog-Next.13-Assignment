import Link from 'next/link';

const Home = () => {
  return (
    <div className='shadow-md p-4'>
    <h1 className="text-lg font-bold mb-5">Welcome & conglatulation!</h1>
    <Link  className="text-white hover:text-black bg-green-400 p-3 rounded-lg hover:border hover:bg-transparent hover:border-l-4 hover:border-lime-600" href="/blog">Go to Blog</Link>
  </div>
  );
};

export default Home;

