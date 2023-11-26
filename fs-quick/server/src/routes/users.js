import { Router } from 'express';
import {
  getAllUsers,
  postNewScore,
} from '../controllers/users.js';
import {
  validateAuthentication,
  validateAdminRole,
} from '../middleware/auth.js';

const router = Router();

router.get('/all-users', getAllUsers);
router.post('/post-score', postNewScore);

export default router;
