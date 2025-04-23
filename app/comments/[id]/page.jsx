import Link from 'next/link';
import React from 'react'

const Comment = async ({params}) => {

    const { id } = params;
    const res = await fetch(`https://jsonplaceholder.typicode.com/comments/${id}`);
    const data = await res.json();

  return (
    <div className='bg-gray-100 p-3 min-h-[100vh]'>
        <Link href={`/comments`}>
            <button className="w-[200px] rounded-xl text-[20px] mb-3 py-2 px-4 text-white bg-gray-600 hover:bg-gray-900 hover:text-white hover:shadow-lg  duration-300 cursor-pointer">Back</button>    
        </Link>
      <div>
        <p className='text-[18px]'>Comment {data?.id}</p>
        <h2 className='text-[24px] font-bold my-2'>{data?.name}</h2>
        <h3 className='text-[18px]'>{data?.email}</h3>
        <h3 className='text-[18px] mt-2'>{data?.body}</h3>
      </div>
    </div>
  )
}

export default Comment
