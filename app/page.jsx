"use client"
import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <div className="flex flex-col gap-3 p-2 items-center min-h-screen bg-gray-100 justify-center">
      <Link href={'/posts'}>
        <button className="w-[200px] h-[50px] rounded-2xl text-[20px] text-black bg-white hover:bg-black hover:text-white hover:shadow-lg  duration-300 cursor-pointer">Posts</button>
      </Link>

      <Link href={'/comments'}>
        <button className="w-[200px] h-[50px] rounded-2xl text-[20px] text-black bg-white hover:bg-black hover:text-white hover:shadow-lg  duration-300 cursor-pointer">Comments</button>
      </Link>

      <Link href={'/albums'}>
        <button className="w-[200px] h-[50px] rounded-2xl text-[20px] text-black bg-white hover:bg-black hover:text-white hover:shadow-2xl  duration-300 cursor-pointer">Albums</button>
      </Link>

      <Link href={'/todos'}>
        <button className="w-[200px] h-[50px] rounded-2xl text-[20px] text-black bg-white hover:bg-black hover:text-white hover:shadow-lg  duration-300 cursor-pointer">Todos</button>
      </Link>

      <Link href={'/users'}>
        <button className="w-[200px] h-[50px] rounded-2xl text-[20px] text-black bg-white hover:bg-black hover:text-white hover:shadow-lg  duration-300 cursor-pointer">Users</button>
      </Link>
    </div>
  );
}
