import Link from 'next/link';
import React from 'react'

const Album = async ({params}) => {
    const { id } = params;
    const res = await fetch(`https://jsonplaceholder.typicode.com/albums/${id}`);
    const data = await res.json();

  return (
    <div className='min-h-[100vh] p-3 bg-gray-100'>
        <Link href={`/albums`}>
            <button className="w-[200px] rounded-xl text-[20px] mb-3 py-2 px-4 text-white bg-gray-600 hover:bg-gray-900 hover:text-white hover:shadow-lg  duration-300 cursor-pointer">Back</button>    
        </Link>
      <div>
        <p className='text-[18px]'>Album {data?.id}</p>
        <h2 className='text-[24px] font-bold my-2'>{data?.title}</h2>
      </div>
    </div>
  )
}

export default Album
