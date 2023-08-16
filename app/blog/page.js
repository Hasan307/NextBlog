import Link from 'next/link';
import blogData from '../data/blogData.json';

const Blog = () => {
  return (
    <div className='h-[100vh] bg-indigo-950'>
      <h1 className="font-bold text-6xl flex justify-center items-center py-10 text-white">Blog Posts</h1>
      <ul>
      
                <tr className="flex mt-20  text-teal-400 font-bold text-3xl">
                  <td className="px-56 ">Post ID</td>
                  <td className="px-56" >Title</td>
                </tr>
        {blogData.map((post) => (
          <li key={post.id}>
            <div>
              
             <tr className="flex  mt-20 font-bold text-2xl text-white">
              <td className="px-56">
              <h1>{post.id}</h1>
                </td>
                <td className="px-56  hover:text-blue-500" >
                <Link href={`/post/${post.id}`}>{post.title}</Link>
                </td>
                </tr> 
            </div>
            
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blog;
