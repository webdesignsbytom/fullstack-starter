import dbClient from '../utils/dbClient.js';

export const findAllEvents = () =>
  dbClient.event.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });

export const findEventById = (eventId) =>
  dbClient.event.findFirst({
    where: {
      id: eventId,
    },
  });

export const deleteEventById = (eventId) =>
  dbClient.event.delete({
    where: {
      id: eventId,
    },
  });
