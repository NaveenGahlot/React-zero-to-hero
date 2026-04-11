import React, { use, useEffect, useState } from 'react'

const fetchPosts = fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    
    const Post = () => {
      // const  [posts, setPosts] = useState(null);
    const [loading, setLoading] = useState(true);

    // useEffect(()=>{
    //     const fetchPosts = async () => {
    //         try {
    //             const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    //             const data = await response.json();
    //             setPosts(data);
    //             setLoading(false);
    //         } catch (error) {                
    //             console.error('Error fetching posts:', error);
    //             setLoading(false);
    //         }
    //     };
    //     fetchPosts();
    // }, []);

    
    const posts = use(fetchPosts);

    // if(loading) {
    //     return <div>Loading post...</div>;
    // }

  return (
    <div>
      {posts && posts.map(post => (
        <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
        </div>
      ))}
    </div>
  )
}

export default Post