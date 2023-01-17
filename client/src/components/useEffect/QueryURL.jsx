import React from 'react'

function QueryURL() {

    useEffect(() => {
        console.log('using an effect to get post query');
        fetch(`http://localhost:4000/posts?category=${postCategory.query}`)
          .then((res) => res.json())
          .then((data) => {
            setPosts(data.data);
          })
          .catch((error) => {
            console.log('error', error);
          });
      }, [postCategory, creatingPost]);
      
  return (
    <div>QueryURL</div>
  )
}

export default QueryURL