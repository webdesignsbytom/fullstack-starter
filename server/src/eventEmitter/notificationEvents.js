import { myEmitter } from '../utils/eventEmitter.js';
import {
  createGetAllNotificationsEvent,
  createCreateNotificationsEvent,
  createViewedNotificationsEvent,
  createDeleteNotificationsEvent,
} from './utils/notificationUtils.js';

export const myEmitterNotifications = myEmitter;

myEmitterNotifications.on('get-all-notifications', async (user) =>
  createGetAllNotificationsEvent(user)
);

myEmitterNotifications.on('create-notification', async (user) =>
  createCreateNotificationsEvent(user)
);

myEmitterNotifications.on('viewed-notification', async (user) =>
  createViewedNotificationsEvent(user)
);

myEmitterNotifications.on('deleted-notification', async (user) =>
  createDeleteNotificationsEvent(user)
);
