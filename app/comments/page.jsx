import Link from 'next/link'
import React from 'react'

const Comments = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/comments`);
  const data = await res.json();
  
  return (
    <div className='bg-gray-100 p-3'>
      <Link href={`../`}>
        <button className="w-[200px] rounded-xl text-[20px] mb-3 py-2 px-4 text-white bg-gray-600 hover:bg-gray-900 hover:text-white hover:shadow-lg  duration-300 cursor-pointer">Back</button>    
      </Link>
      <div>
        {data?.map(({name, id}) => (
          <div key={id} className="rounded-xl text-[20px] mb-3 py-2 px-4 text-black bg-white hover:bg-black hover:text-white hover:shadow-lg  duration-300 cursor-pointer">
            <Link href={`/comments/${id}`}>
              <h2>{name}</h2>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Comments
