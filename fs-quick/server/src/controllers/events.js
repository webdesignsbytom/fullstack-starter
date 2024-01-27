// Emitters
import { myEmitterErrors } from '../event/errorEvents.js';
import { myEmitterEvents } from '../event/eventsLog.js';
// Domain
import { deleteEventById, findAllEvents, findEventById } from '../domain/events.js';
// Response messages
import { EVENT_MESSAGES, sendDataResponse, sendMessageResponse } from '../utils/responses.js';
import {
  BadRequestEvent,
  NotFoundEvent,
  ServerErrorEvent,
} from '../event/utils/errorUtils.js';

export const getAllEvents = async (req, res) => {
  console.log('get all events');

  try {
    const foundEvents = await findAllEvents();
    console.log('found events:', foundEvents);

    if (!foundEvents) {
      const notFound = new NotFoundEvent(
        req.user,
        EVENT_MESSAGES.notFound,
        EVENT_MESSAGES.eventTag
      );
      myEmitterErrors.emit('error', notFound);
      return sendMessageResponse(res, notFound.code, notFound.message);
    }

    foundEvents.forEach((event) => {
      const createdDate = event.createdAt.toLocaleString();
      const updatedDate = event.updatedAt.toLocaleString();
      event.createdAt = createdDate;
      event.updatedAt = updatedDate;
    });
    // // myEmitterEvents.emit('get-all-events', req.user);
    return sendDataResponse(res, 200, { events: foundEvents });
  } catch (err) {
    //
    const serverError = new ServerErrorEvent(req.user, `Get all events`);
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};

// Get event by id
export const getEventById = async (req, res) => {
  console.log('getEventById');
  const { eventId } = req.params
  console.log('eventId', eventId);

  try {
    const foundEvent = await findEventById(eventId);
    console.log('found event', foundEvent);

    if (!foundEvent) {
      const notFound = new NotFoundEvent(
        req.user,
        EVENT_MESSAGES.notFound,
        EVENT_MESSAGES.notFoundEvents
      );
      myEmitterErrors.emit('error', notFound);
      return sendMessageResponse(res, notFound.code, notFound.message);
    }

    return sendDataResponse(res, 200, { event: foundEvent });
  } catch (err) {
    // Error
    const serverError = new ServerErrorEvent(req.user, `Get all events`);
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};

// delete event
export const deleteEvent = async (req, res) => {
  console.log('deleteOpenEvent');
  console.log('req', req.params);
  const eventId = req.params.eventId;
  console.log('eventId', eventId);

  try {
    const foundEvent = await findEventById(eventId);
    console.log('foundEvent card', foundEvent);

    if (!foundEvent) {
      const notFound = new NotFoundEvent(
        req.user,
        EVENT_MESSAGES.notFound,
        EVENT_MESSAGES.eventNotFound
      );
      myEmitterErrors.emit('error', notFound);
      return sendMessageResponse(res, notFound.code, notFound.message);
    }

    const deletedEvent = await deleteEventById(eventId);
    if (!deletedEvent) {
      const notDeleted = new BadRequestEvent(
        req.user,
        EVENT_MESSAGES.badRequest,
        EVENT_MESSAGES.eventNotDeleted
      );
      myEmitterErrors.emit('error', notDeleted);
      return sendMessageResponse(res, notDeleted.code, notDeleted.message);
    }
    
    return sendDataResponse(res, 201, { deletedEvent: deletedEvent });
  } catch (err) {
    // Error
    const serverError = new ServerErrorEvent(req.user, `Create event`);
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};
