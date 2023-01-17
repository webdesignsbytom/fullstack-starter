import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function User() {
  const [user, setUser] = useState({});
  const id = useLocation().pathname.split('/')[2];

  // override request
  useEffect(() => {
    let unsubscribed = false;
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (!unsubscribed) {
          setUser(data);
        }
      });

    return () => {
        console.log('unsubscribbed means cancelled request at the last minute');
        unsubscribed = true
    };
  }, [id]);

  // Cancel request 
//   useEffect(() => {
//     const controller = new AbortController();
//     const signal = controller.signal
//     fetch(`https://jsonplaceholder.typicode.com/users/${id}`, { signal })
//       .then((res) => res.json())
//       .then((data) => {
//           setUser(data);
//       });

//     return () => {
//         console.log('Cancelled');
//         controller.abort()
//     };
//   }, [id]);


  return (
    <div>
      <p>Name: {user.name}</p>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>

      <Link to={'/users/1'}>Fetch User 1</Link>
      <Link to={'/users/2'}>Fetch User 2</Link>
      <Link to={'/users/3'}>Fetch User 3</Link>
    </div>
  );
}

export default User;
