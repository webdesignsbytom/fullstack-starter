import jwt from 'jsonwebtoken'
import { JWT_SECRET } from '../utils/config.js'
// Components
import { findUserByEmail } from '../domain/users.js';
// Emitters
import { myEmitterErrors } from '../event/errorEvents.js';
// Errors
import { NoPermissionEvent, NoValidationEvent } from '../event/utils/errorUtils.js';
// Responses 
import { sendDataResponse, sendMessageResponse } from '../utils/responses.js';

export async function validateAdminRole(req, res, next) {
  console.log('ADMIN_ROLE', req.user);
  const { role } = req.user
  console.log('role', role);

  if (!req.user) {
    const error = new NoValidationEvent(
      'Unable to verify user',
      'perform-admin-action'
    )
    myEmitterErrors.emit('error', error)
    return sendMessageResponse(res, error.code, error.message)
  }

  if (role !== 'ADMIN' && role !== 'DEVELOPER') {
    console.log('XXXXX', role);
    const noPermission = new NoPermissionEvent(req.user, 'perform-admin-action')
    myEmitterErrors.emit('error', noPermission)
    return sendDataResponse(res, noPermission.code, {
      authorization: noPermission.message
    })
  }

  console.log('WIN');
  next()
}

export async function validateDeveloperRole(req, res, next) {
  if (!req.user) {
    const error = new NoValidationEvent(
      'Unable to verify user',
      'perform-developer-action'
    )
    myEmitterErrors.emit('error', error)
    return sendMessageResponse(res, error.code, error.message)
  }

  if (req.user.role !== 'DEVELOPER') {
    const noPermission = new NoPermissionEvent(req.user, 'perform-developer-action')
    myEmitterErrors.emit('error', noPermission)
    return sendDataResponse(res, noPermission.code, {
      authorization: noPermission.message
    })
  }
  next()
}

export const validateAuthentication = async (req, res, next) => {
  const header = req.header('authorization');

  if (!header) {
    const error = new NoValidationEvent('Missing Authorization header')
    myEmitterErrors.emit('error', error)
    return sendMessageResponse(res, error.code, {
      authorization: error.message
    })
  }

  const [type, token] = header.split(' ')

  const isTypeValid = validateTokenType(type)
  if (!isTypeValid) {
    const error = new NoValidationEvent(
      `Invalid token type, expected Bearer but got ${type}`
    )
    myEmitterErrors.emit('error', error)
    return sendMessageResponse(res, error.code, {
      authorization: error.message
    })
  }

  const isTokenValid = validateToken(token)
  if (!isTokenValid) {
    const error = new NoValidationEvent('Missing access token')
    myEmitterErrors.emit('error', error)
    return sendMessageResponse(res, error.code, {
      authorization: error.message
    })
  }
  if (isTokenValid.name === 'TokenExpiredError') {
    const error = new NoValidationEvent('Token has expired')
    myEmitterErrors.emit('error', error)
    return sendMessageResponse(res, error.code, {
      authorization: error.message
    })
  }
  if (isTokenValid.name) {
    const error = new NoValidationEvent('Invalid access token')
    myEmitterErrors.emit('error', error)
    return sendMessageResponse(res, error.code, {
      authorization: error.message
    })
  }

  try {
    //
    const decodedToken = jwt.verify(token, JWT_SECRET);

    const foundUser = await findUserByEmail(decodedToken.email);
    delete foundUser.password

    req.user = foundUser;
    next();

  } catch (error) {
    //
    return res.status(500).json({
      error: error.message,
      message: `Internal server error`,
      code: `500`,
    });
  }
};

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
  