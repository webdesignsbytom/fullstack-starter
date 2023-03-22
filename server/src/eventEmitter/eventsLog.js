import { myEmitter } from '../utils/eventEmitter.js';
import {
    createGetAllEventsEvent,
} from './utils/eventLogUtils.js';

export const myEmitterEvents = myEmitter;

myEmitterEvents.on('get-all-events', async (user) => createGetAllEventsEvent(user));
