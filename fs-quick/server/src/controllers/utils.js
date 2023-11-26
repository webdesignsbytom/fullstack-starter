import dbClient from '../utils/dbClient.js';
// Errors
import { ServerErrorEvent } from '../event/utils/errorUtils.js';
import { myEmitterErrors } from '../event/errorEvents.js';

export async function createVerificationInDB(userId, uniqueString) {
  try {
    const newVerification = await dbClient.userVerification.create({
      data: {
        userId,
        uniqueString,
        expiresAt: new Date(Date.now() + 21600000),
      },
    });

    return newVerification;
  } catch (err) {
    throw err;
  }
}

export async function createPasswordResetInDB(userId, uniqueString) {
  try {
    const newPasswordResetRequest = await dbClient.passwordReset.create({
      data: {
        userId,
        uniqueString,
        expiresAt: new Date(Date.now() + 21600000),
      },
    });

    return newPasswordResetRequest;
  } catch (err) {

    const serverError = new ServerErrorEvent(userId, `Reset password`);
    myEmitterErrors.emit('error', serverError);
    throw err;
  }
}
