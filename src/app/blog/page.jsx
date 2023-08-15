import getAllPosts from '@/lib/getAllpost';
import Link from 'next/link';


export default async function Blog(){
  const posts = await getAllPosts();
 
  return (

    <>

    <div className="py-4 shadow-md p-4">
      <h2 className="text-2xl font-bold mb-4">Blog Posts</h2>
      <ul className="space-y-3">
        {posts.map((post) => (
          <li key={post.id} className="shadow-md w-96 rounded-lg p-2 hover:bg-gray-300 hover:rounded-lg">
          <Link href={`/posts/${post.id}`}>{post.id}-{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
    </>
  )
}
