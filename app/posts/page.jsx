import Link from 'next/link';
import React from 'react'

const Posts = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const data = await res.json();
    console.log(data);
    
  return (
    <div className='bg-gray-100 p-3'>
        <Link href={`../`}>
            <button className="w-[200px] rounded-xl text-[20px] mb-3 py-2 px-4 text-white bg-gray-600 hover:bg-gray-900 hover:text-white hover:shadow-lg  duration-300 cursor-pointer">Back</button>    
        </Link>
      {data?.map(({title, id}) => (
        <div key={id} className="rounded-xl text-[20px] mb-3 py-2 px-4 text-black bg-white hover:bg-black hover:text-white hover:shadow-lg  duration-300 cursor-pointer">
            <Link href={`/posts/${id}`}>
                <h2>{title}</h2>
            </Link>
        </div>
      ))}
    </div>
  )
}

export default Posts
