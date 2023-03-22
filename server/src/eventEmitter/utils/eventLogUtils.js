import dbClient from '../../utils/dbClient.js';
// Error events
import { myEmitterErrors } from '../errorEvents.js';
import { CreateEventError } from './errorUtils.js';

export const createGetAllEventsEvent = async (user) => {
  if (user.role === 'ADMIN') {
    type = 'ADMIN';
  }
  if (user.role === 'DEVELOPER') {
    type = 'DEVELOPER';
  }
  if (user.role === 'USER') {
    const notAuthorized = new NoPermissionEvent(user.id, 'Get all events not authorized');
    myEmitterErrors.emit('error', notAuthorized);
    return;
  }

  try {
    await dbClient.event.create({
      data: {
        type: type,
        topic: 'Get all events',
        content: `Get all events successful for ${user.email}`,
        createdById: user.id,
        code: 200
      },
    });
  } catch (err) {
    const error = new CreateEventError(user, 'Get all events');
    myEmitterErrors.emit('error', error);
    throw err;
  }
};


export const createDeleteEventEvent = async (user) => {
  if (user.role === 'ADMIN') {
    type = 'ADMIN';
  }
  if (user.role === 'DEVELOPER') {
    type = 'DEVELOPER';
  }
  if (user.role === 'USER') {
    const notAuthorized = new NoPermissionEvent(user.id, 'Delete event not authorized');
    myEmitterErrors.emit('error', notAuthorized);
    return;
  }

  try {
    await dbClient.event.create({
      data: {
        type: type,
        topic: 'Delete event',
        content: `Delete event successful for ${user.email}`,
        createdById: user.id,
        code: 204,
      },
    });
  } catch (err) {
    const error = new CreateEventError(user.id, 'Delete event');
    myEmitterErrors.emit('error', error);
    throw err;
  }
};