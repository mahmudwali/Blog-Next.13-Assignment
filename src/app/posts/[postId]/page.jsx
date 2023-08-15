import getSinglePost from "@/lib/getSinglePost";
import Link from "next/link";




export default async function singleBlog({params}){
  const id = params.postId;
  const post = await getSinglePost(id);

  return (

    <>

      <div className="p-4 shadow-md">
      
      <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
      <p className=" mb-4 text-gray-500">{post.content}</p>
      <p className="text-md font-bold text-right">Posted on: <span className="mb-4 text-gray-600 text-sm">{post.date}</span></p>
      <Link  className="text-white hover:text-black bg-green-400 p-3 rounded-lg hover:border hover:bg-transparent hover:border-l-4 hover:border-lime-700" href="/blog">Go to Blog</Link>
    </div>
    </>
  )
}