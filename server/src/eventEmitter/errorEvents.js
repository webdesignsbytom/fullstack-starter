import { myEmitter } from '../utils/eventEmitter.js';
import { createErrorEvent, createLoginErrorEvent, createResendVerifyErrorEvent } from './utils/errorUtils.js'

export const myEmitterErrors = myEmitter

myEmitterErrors.on('error', async (error) => {
  console.log('ERROR EVENT', error);
  createErrorEvent(error)
});

myEmitterErrors.on('error-login', async (error) => {
  console.log('ERROR EVENT LOGIN', error);
  createLoginErrorEvent(error)
});

myEmitterErrors.on('verification-not-found', async (error) => {
  console.log('ERROR EVENT VERIFY', error);
  createResendVerifyErrorEvent(error)
});
