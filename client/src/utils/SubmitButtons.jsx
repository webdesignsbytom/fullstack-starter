import React from 'react';
import LoadingSpinner from './LoadingSpinner';

export function SubmitButton({
  loadingAnimation,
  mainButtonContent,
  responseMessage,
  buttonMessage,
  spinnerHeight,
  spinnerWidth,
  action,
}) {
  return (
    <button
      onClick={action}
      type='submit'
      className='submit__button'
      data-mdb-ripple='true'
      data-mdb-ripple-color='light'
    >
      {loadingAnimation ? (
        <div className='grid'>
          <LoadingSpinner height={spinnerHeight} width={spinnerWidth} />
        </div>
      ) : (
        mainButtonContent && <span>{buttonMessage}</span>
      )}
      {responseMessage.status && responseMessage.result === 'failed' && (
        <span>{responseMessage.message}</span>
      )}
      {responseMessage.status && responseMessage.result === 'success' && (
        <span>{responseMessage.message}</span>
      )}
    </button>
  );
}

export function DeleteButton({
  loadingAnimation,
  mainButtonContent,
  responseMessage,
  buttonMessage,
  spinnerHeight,
  spinnerWidth,
  action,
}) {
  return (
    <button
      onClick={action}
      type='submit'
      className='delete__button'
      data-mdb-ripple='true'
      data-mdb-ripple-color='light'
    >
      {loadingAnimation ? (
        <div className='grid'>
          <LoadingSpinner height={spinnerHeight} width={spinnerWidth} />
        </div>
      ) : (
        mainButtonContent && <span>{buttonMessage}</span>
      )}
      {responseMessage.status && responseMessage.result === 'failed' && (
        <span>{responseMessage.message}</span>
      )}
      {responseMessage.status && responseMessage.result === 'success' && (
        <span>{responseMessage.message}</span>
      )}
    </button>
  );
}
