// Status responses
const STATUS_MESSAGES = {
  200: 'success',
  201: 'success',
  400: 'fail',
  401: 'fail',
  403: 'fail',
  404: 'fail',
  500: 'error',
};

export const EVENT_MESSAGES = {
  badRequest: `Bad Request`,
  notFound: `Not Found`,
  missingUserIdentifier: `Missing User identifier`,
  missingFields: `Missing fields in request`,
  // Complaints
  complaintTag: `Complaint database`,
  complaintNotFound: `Failed to find complaint/s`,
  userComplaintsNotFound: `Failed to find user complaints`,
  createComplaintFail: `Failed to create complaint`,
  markComplaintViewedFailed: `Failed to mark complaint as viewed`,
  // Components
  componentTag: `Component database`,
  componentNotFound: `Failed to find component/s`,
  createComponentFail: `Failed to create component`,
  // Contacts
  contactTag: `Contact database`,
  contactNotFound: `Failed to find contact/s`,
  createContactFail: `Failed to create contact`,
  // Designs
  designTag: `Design database`,
  designNotFound: `Failed to find design/s`,
  createDesignFail: `Failed to create design`,
  // Events
  eventTag: `Event database`,
  eventNotFound: `Failed to find event`,
  createEventFail: `Failed to create event`,
  // Messages
  messageTag: `Message database`,
  messageNotFound: `Failed to find message/s`,
  userMessagesNotFound: `Failed to find user messages`,
  createMessageFail: `Failed to create message`,
  markMessageViewedFailed: `Failed to mark message as viewed`,
  // Notifications
  notificationTag: `Notification database`,
  notificationIdNotFound: `Failed find notification/s`,
  userNotificationsNotFound: `Failed to find user notifications`,
  createNotificationFail: `Failed to create notification`,
  markNotificationViewedFailed: `Failed to mark notification as viewed`,
  // Palettes
  paletteTag: `Palette database`,
  paletteNotFound: `Failed to find palette/s`,
  createPaletteFail: `Failed to create palette`,
  // Projects
  projectTag: `Project database`,
  projectNotFound: `Failed to find project/s`,
  createProjectFail: `Failed to create project`,
  // Reviews
  reviewsTag: `Review database`,
  notFoundReview: `Failed to find review/s`,
  userReviewsNotFound: `Failed to find user reviews`,
  createReviewFail: `Failed to create review`,
  markReviewViewedFailed: `Failed to mark review as viewed`,
  // Users
  userTag: `User databased`,
  userNotFound: `Failed to find user/s`,
  emailInUse: `Email already in use`,
  emailNotFound: `Email not found in database`,
  createUserFail: `Failed to create new user`,
  passwordMatchError: `Password match error for reset Password - New passwords do not match`,
  passwordResetError: `Account record doesn't exist or has been reset already.`,
  // Verification
  verificationTag: `Verification database`,
  verificationNotFound: `Failed to find verification`,
  verificationNotFoundReturnMessage: `Account record doesn't exist or has been verified already. Please sign up or log in.`,
  expiredLinkMessage: `Links has expired, please sign up or log in and check your account`,
  invalidVerificationMessage: `Invalid verification details passed. Check your inbox, or contact support`,
};
// Error responses for eventEmitter/errors
export const RESPONSE_MESSAGES = {
  ConfictEvent: 'Request conflicts with data on server',
  DeactivatedUserEvent: 'The target user account has been deactivated',
  ServerErrorEvent: 'Internal Server Error',
  CreateEventError: 'Failed to create an event log',
  NotFoundEvent: 'was not found',
  NoPermissionEvent: 'You are not authorized to perform this action',
  NoValidationEvent: 'Unable to verify user',
  BadRequestEvent: 'Incorrect request syntax or malformed request',
  MissingFieldEvent: 'Missing fields in body',
};

// Data responses
export function sendDataResponse(res, statusCode, payload) {
  return res.status(statusCode).json({
    status: STATUS_MESSAGES[statusCode],
    data: payload,
  });
}

// Error responses
export function sendMessageResponse(res, statusCode, message) {
  return res.status(statusCode).json({
    status: STATUS_MESSAGES[statusCode],
    message,
  });
}
