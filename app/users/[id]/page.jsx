import Link from 'next/link'
import React from 'react'

const User = async ({params}) => {
    const {id} = params;

    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const data = await res.json();

  return (
    <div className='bg-gray-100 p-3 min-h-[100vh]'>
        <Link href={`/users`}>
            <button className="w-[200px] rounded-xl text-[20px] mb-3 py-2 px-4 text-white bg-gray-600 hover:bg-gray-900 hover:text-white hover:shadow-lg  duration-300 cursor-pointer">Back</button>    
        </Link>
        <div>
            <p className='text-[18px]'>User {data?.id}</p>
            <h2 className='text-[24px] font-bold mt-2'>{data?.name}</h2>
            <h3 className='text-[18px] mt-1'><span className='font-semibold'>Username: </span>{data?.username}</h3>
            <h3 className='text-[18px] mt-1'><span className='font-semibold'>Email:</span> {data?.email}</h3>
            <h3 className='text-[18px] mt-1'><span className='font-semibold'>Address:</span> {data?.address?.street}, {data?.address?.suite}, {data?.address?.city}, {data?.address?.zipcode}</h3>
            <h3 className='text-[18px] mt-1'><span className='font-semibold'>Phone:</span> {data?.phone}</h3>
            <h3 className='text-[18px] mt-1'><span className='font-semibold'>Website:</span> {data?.website}</h3>
            
            <h3 className='text-[18px] mt-1'><span className='font-semibold'>Company Informations: <br /> </span>{data?.company?.name}</h3>
            <h3 className='text-[18px] mt-1'>{data?.company?.catchPhrase}</h3>
            <h3 className='text-[18px] mt-1'>{data?.company?.bs}</h3>
        </div>
    </div>
  )
}

export default User
