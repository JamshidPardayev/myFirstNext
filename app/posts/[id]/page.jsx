const Post = async ({params}) => {
    const { id } = params;

    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = await res.json();

  return (
    <div>
       Post
        <h2>{data?.title}</h2>
        <h3>{data?.body}</h3>
        
    </div>
  )
}

export default Post
