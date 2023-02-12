import { JWT_SECRET } from '../utils/config.js' // so no .env

// Called by the auth function to check tokens
function validateToken(token) {
    if (!token) {
      return false
    }
  
    return jwt.verify(token, JWT_SECRET, (error) => {
      if (error) {
        return error
      }
  
      return !error
    })
  }
  
  function validateTokenType(type) {
    if (!type) {
      return false
    }
  
    if (type.toUpperCase() !== 'BEARER') {
      return false
    }
  
    return true
  }
  