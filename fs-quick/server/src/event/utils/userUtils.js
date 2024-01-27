import dbClient from '../../utils/dbClient.js';
// Error events
import { myEmitterErrors } from '../errorEvents.js';
import { CreateEventError } from './errorUtils.js';

export const createGetAllEvent = async (user) => {
  try {
    await dbClient.event.create({
      data: {
        type: 'ADMIN',
        topic: 'Get all users',
        content: `Success getting all users for ${user.email}`,
        createdById: user.id,
        code: 200
      },
    });
  } catch (err) {
    const error = new CreateEventError(user.id, 'Get all users');
    myEmitterErrors.emit('error', error);
    throw err;
  }
};

export const createRegisterEvent = async (user) => {
  let type = 'USER';
  if (user.role === 'ADMIN') {
    type = 'ADMIN';
  }
  if (user.role === 'DEVELOPER') {
    type = 'DEVELOPER';
  }

  try {
    await dbClient.event.create({
      data: {
        type: type,
        topic: 'Register',
        content: `Register successful for ${user.email} as a ${user.role}`,
        createdById: user.id,
        code: 201
      },
    });
  } catch (err) {
    const error = new CreateEventError(user.id, 'register');
    myEmitterErrors.emit('error', error);
    throw err;
  }
};

export const createVerifyEvent = async (user) => {
  let type = 'USER';
  if (user.role === 'ADMIN') {
    type = 'ADMIN';
  }
  if (user.role === 'DEVELOPER') {
    type = 'DEVELOPER';
  }

  try {
    await dbClient.event.create({
      data: {
        type: type,
        topic: 'Verify User',
        content: `Verification successful for ${user.email} as a ${user.role}`,
        createdById: user.id,
        code: 201
      },
    });
  } catch (err) {
    const error = new CreateEventError(user.id, 'Verification failed');
    myEmitterErrors.emit('error', error);
    throw err;
  }
};

export const createNewVerifyEvent = async (user) => {
  let type = 'USER';
  if (user.role === 'ADMIN') {
    type = 'ADMIN';
  }
  if (user.role === 'DEVELOPER') {
    type = 'DEVELOPER';
  }

  try {
    await dbClient.event.create({
      data: {
        type: type,
        topic: 'Verifyification email resend creation',
        content: `Resend verification successful for ${user.email}`,
        createdById: user.id,
        code: 201
      },
    });
  } catch (err) {
    const error = new CreateEventError(user.id, 'Verificaton resend failed');
    myEmitterErrors.emit('error', error);
    throw err;
  }
};

export const createPasswordResetEvent = async (user) => {
  let type = 'USER';
  if (user.role === 'ADMIN') {
    type = 'ADMIN';
  }
  if (user.role === 'DEVELOPER') {
    type = 'DEVELOPER';
  }

  try {
    await dbClient.event.create({
      data: {
        type: type,
        topic: 'Password Reset',
        content: `Reset password successful for ${user.email}`,
        createdById: user.id,
        code: 200
      },
    });
  } catch (err) {
    const error = new CreateEventError(user.id, 'Reset password failed');
    myEmitterErrors.emit('error', error);
    throw err;
  }
};

export const createUpdateUserEvent = async (user) => {
  let type = 'USER';
  if (user.role === 'ADMIN') {
    type = 'ADMIN';
  }
  if (user.role === 'DEVELOPER') {
    type = 'DEVELOPER';
  }

  try {
    await dbClient.event.create({
      data: {
        type: type,
        topic: 'Updated User',
        content: `Updated user account successful for ${user.email}`,
        createdById: user.id,
        code: 200
      },
    });
  } catch (err) {
    const error = new CreateEventError(user.id, 'Update user');
    myEmitterErrors.emit('error', error);
    throw err;
  }
};

export const createDeleteUserEvent = async (user) => {
  let type = 'USER';
  if (user.role === 'ADMIN') {
    type = 'ADMIN';
  }
  if (user.role === 'DEVELOPER') {
    type = 'DEVELOPER';
  }

  try {
    await dbClient.event.create({
      data: {
        type: type,
        topic: 'Deleted User',
        content: `Account deleted successfully for ${user.email}`,
        createdById: user.id,
        code: 204
      },
    });
  } catch (err) {
    const error = new CreateEventError(user.id, 'Delete user');
    myEmitterErrors.emit('error', error);
    throw err;
  }
};
