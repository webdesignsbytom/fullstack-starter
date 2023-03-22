import dbClient from '../../utils/dbClient.js';
// Error events
import { myEmitterErrors } from '../errorEvents.js';
import { CreateEventError } from './errorUtils.js';

export const createGetAllNotificationsEvent = async (user) => {
  if (user.role === 'ADMIN') {
    type = 'ADMIN';
  }
  if (user.role === 'DEVELOPER') {
    type = 'DEVELOPER';
  }
  if (user.role === 'USER') {
    const notAuthorized = new NoPermissionEvent(
      user.id,
      'Get all notifications not authorized'
    );
    myEmitterErrors.emit('error', notAuthorized);
    return;
  }

  try {
    await dbClient.event.create({
      data: {
        type: type,
        topic: 'Get all notifications',
        content: `Get all notifications successful for ${user.email}`,
        createdById: user.id,
        code: 200,
      },
    });
  } catch (err) {
    const error = new CreateEventError(user.id, 'Get all notifications');
    myEmitterErrors.emit('error', error);
    throw err;
  }
};

export const createCreateNotificationsEvent = async (user) => {
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
        topic: 'Create notification',
        content: `Create notification successful for ${user.email}`,
        createdById: user.id,
        code: 201
      },
    });
  } catch (err) {
    const error = new CreateEventError(user.id, 'Create notification');
    myEmitterErrors.emit('error', error);
    throw err;
  }
};

export const createViewedNotificationsEvent = async (user) => {
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
        topic: 'Viewed notification',
        content: `Set notification to viewed successful for ${user.email}`,
        createdById: user.id,
        code: 200
      },
    });
  } catch (err) {
    const error = new CreateEventError(user.id, 'Viewed notification');
    myEmitterErrors.emit('error', error);
    throw err;
  }
};

export const createDeleteNotificationsEvent = async (user) => {
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
        topic: 'Delete notifications',
        content: `Delete notification successful for ${user.email}`,
        createdById: user.id,
        code: 204
      },
    });
  } catch (err) {
    const error = new CreateEventError(user.id, 'Delete notification');
    myEmitterErrors.emit('error', error);
    throw err;
  }
};
