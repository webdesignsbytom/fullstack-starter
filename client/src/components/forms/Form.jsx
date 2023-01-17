import React from 'react'

function Form() {
    const [postCategory, setPostCategory] = useState(startingCategory);
    const [posts, setPosts] = useState([]);
    const [creatingPost, setCreatingPost] = useState(false);

    const toggleCategory = (event) => {
        const categories = categoryInfomation;
        const newCategory = categories.filter((cat) => cat.id === event.target.id);
        const categoryState = newCategory[0];
    
        setPostCategory(categoryState);
      };
  return (
    <div>
        <div className='categories__container'>
              <span
                name='general'
                id='general'
                onClick={(event) => toggleCategory(event)}
              >
                General
              </span>
              <span
                name='events'
                id='events'
                onClick={(event) => toggleCategory(event)}
              >
                Events
              </span>
              <span
                name='newbies'
                id='newbies'
                onClick={(event) => toggleCategory(event)}
              >
                Newbies
              </span>
            </div>
    </div>
  )
}

export default Form