import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


function FetchAPI() {
  const [posts, setPosts] = useState([]);

  // this stops unwanted data in memory from loading if cancelled
  useEffect(() => {
    let isCancelled = false;
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((data) => {
        if (!isCancelled) {
          alert('posts are ready updating state');
          setPosts(data);
          console.log('res', data);
        }
      });

      return () => {
        isCancelled = true
      }
  }, []);

//   useEffect(() => {
//     let viewposts = true;
//     fetch('https://jsonplaceholder.typicode.com/posts')
//       .then((res) => res.json())
//       .then((data) => {
//         if (viewposts) {
//           alert('posts are ready updating state');
//           setPosts(data);
//           console.log('res', data);
//         }
//       });

//       return () => {
//         viewposts = false
//       }
//   }, []);
  return (
    <div>
      <h2>FetchAPI</h2>
      {posts?.map((post, index) => {
        return <p key={index}>{post.title}</p>;
      })}
    </div>
  );
}

export default FetchAPI;
