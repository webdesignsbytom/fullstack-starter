import { Router } from 'express';
import {
  getAllEvents,
  deleteEvent,
  getEventById,
} from '../controllers/events.js';
import {
  validateAuthentication,
  validateDeveloperRole,
} from '../middleware/auth.js';

const router = Router();

router.get('/all-events', getAllEvents);
router.get('/event/:eventId', getEventById);
router.delete('/delete-event-by-id/:eventId', deleteEvent);

export default router;
