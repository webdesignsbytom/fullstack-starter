import jwt_decode from 'jwt-decode';


export default function LoggedInUser() {    
    const loadedToken = localStorage.getItem('token');
    if (loadedToken === null || loadedToken === '') {
        return null;
      }

      const decoded = jwt_decode(loadedToken);

      return decoded;
  }