import dbClient from '../utils/dbClient.js'
import { myEmitter } from './index.js'

export const createRegisterEvent = async (user) => {
  let type = 'USER'
  if (user.role === 'ADMIN') {
    type = 'ADMIN'
  }

  try {
    await dbClient.event.create({
      data: {
        type: type,
        topic: 'register',
        content: user.role,
        receivedById: user.id,
        createdAt: user.createdAt
      }
    })
  } catch (err) {
    const error = new CreateEventError(user, 'register')
    myEmitter.emit('error', error)
    throw err
  }
}

export const createUpdateEmailEvent = async (user, oldEmail) => {
  let type = 'USER'
  if (user.role === 'ADMIN') {
    type = 'ADMIN'
  }

  try {
    await dbClient.event.create({
      data: {
        type: type,
        topic: 'update-email-address',
        content: `from ${oldEmail} to ${user.email}`,
        receivedById: user.id,
        createdAt: user.updatedAt
      }
    })
  } catch (err) {
    const error = new CreateEventError(user, 'update-email')
    myEmitter.emit('error', error)
    throw err
  }
}

export const createUpdatePrivacyEvent = async (user, oldPref) => {
  const topic = 'set-post-privacy-preference-to-' + user.postPrivacyPref
  let type = 'USER'
  if (user.role === 'ADMIN') {
    type = 'ADMIN'
  }

  try {
    await dbClient.event.create({
      data: {
        type: type,
        topic: topic,
        content: oldPref,
        receivedById: user.id,
        createdAt: user.updatedAt
      }
    })
  } catch (err) {
    const error = new CreateEventError(user, 'update-privacy')
    myEmitter.emit('error', error)
    throw err
  }
}

export const createUpdateActivateEvent = async (user) => {
  let type = 'USER'
  let topic = ''
  if (user.role === 'ADMIN') {
    type = 'ADMIN'
  }
  if (user.isActive) {
    topic = 'activate-account'
  } else {
    topic = 'deactivate-account'
  }

  try {
    await dbClient.event.create({
      data: {
        type: type,
        topic: topic,
        receivedById: user.id,
        createdAt: user.updatedAt
      }
    })
  } catch (err) {
    const error = new CreateEventError(user, 'update-account-activate')
    myEmitter.emit('error', error)
    throw err
  }
}

export const createUpdateRoleEvent = async (assignee, oldRole, assigner) => {
  try {
    await dbClient.event.create({
      data: {
        type: 'ADMIN',
        topic: 'update-role',
        content: `from ${oldRole} to ${assignee.role}`,
        createdById: assigner.id,
        receivedById: assignee.id,
        createdAt: assignee.updatedAt
      }
    })
  } catch (err) {
    const error = new CreateEventError(assigner, 'update-role')
    myEmitter.emit('error', error)
    throw err
  }
}

export const createCohortCreatedEvent = async (cohort, admin) => {
  try {
    await dbClient.event.create({
      data: {
        type: 'COHORT',
        topic: 'create',
        createdById: admin.id,
        cohortId: cohort.id,
        createdAt: cohort.createdAt
      }
    })
  } catch (err) {
    const error = new CreateEventError(admin, 'create-cohort')
    myEmitter.emit('error', error)
    throw err
  }
}

export const createRenameCohortEvent = async (cohort, oldName, admin) => {
  try {
    await dbClient.event.create({
      data: {
        type: 'COHORT',
        topic: 'rename',
        content: `from ${oldName} to ${cohort.name}`,
        createdById: admin.id,
        cohortId: cohort.id,
        createdAt: cohort.updatedAt
      }
    })
  } catch (err) {
    const error = new CreateEventError(admin, 'rename-cohort')
    myEmitter.emit('error', error)
    throw err
  }
}

export const createDeleteCohortEvent = async (cohort, admin) => {
  try {
    await dbClient.event.create({
      data: {
        type: 'COHORT',
        topic: 'delete',
        createdById: admin.id,
        cohortId: cohort.id,
        createdAt: cohort.updatedAt
      }
    })
  } catch (err) {
    const error = new CreateEventError(admin, 'delete-cohort')
    myEmitter.emit('error', error)
    throw err
  }
}

export const createAddToCohortEvent = async (admin, student) => {
  try {
    await dbClient.event.create({
      data: {
        type: 'COHORT',
        topic: 'add-to-cohort',
        receivedById: student.id,
        createdById: admin.id,
        cohortId: student.cohortId
      }
    })
  } catch (err) {
    const error = new CreateEventError(admin, 'add-to-cohort')
    myEmitter.emit('error', error)
    throw err
  }
}

export const createRemoveFromCohortEvent = async (admin, student, cohort) => {
  try {
    await dbClient.event.create({
      data: {
        type: 'COHORT',
        topic: 'remove-from-cohort',
        receivedById: student.id,
        createdById: admin.id,
        cohortId: cohort.id,
        createdAt: cohort.updatedAt
      }
    })
  } catch (err) {
    const error = new CreateEventError(admin, 'remove-from-cohort')
    myEmitter.emit('error', error)
    throw err
  }
}

export const createExerciseCreatedEvent = async (exercise, user) => {
  await dbClient.event.create({
    data: {
      type: 'EXERCISE',
      topic: 'create-exercise',
      createdById: user.id
    }
  })
}

export const createDeleteExerciseEvent = async (exercise, user) => {
  await dbClient.event.create({
    data: {
      type: 'EXERCISE',
      topic: 'delete-exercise',
      createdById: user.id
    }
  })
}
// UNIT
export const createUnitCreatedEvent = async (unit, user) => {
  try {
    await dbClient.event.create({
      data: {
        type: 'CURRICULUM',
        topic: `create-unit-${unit.name}`,
        createdById: user.id,
        createdAt: unit.createdAt
      }
    })
  } catch (err) {
    const error = new CreateEventError(user, 'create-unit')
    myEmitter.emit('error', error)
    throw err
  }
}

export const createRenameUnitEvent = async (
  unit,
  user,
  oldName,
  oldDescription
) => {
  try {
    await dbClient.event.create({
      data: {
        type: 'CURRICULUM',
        topic: `update-unit-${unit.name} `,
        content: `from-name-${oldName}-to-${unit.name},-from-${oldDescription}-to-${unit.description}`,
        createdById: user.id,
        createdAt: unit.updatedAt
      }
    })
  } catch (err) {
    const error = new CreateEventError(user, 'update-module')
    myEmitter.emit('error', error)
    throw err
  }
}

export const createDeleteUnitEvent = async (unit, user) => {
  try {
    await dbClient.event.create({
      data: {
        type: 'CURRICULUM',
        topic: `deleted-unit-${unit.name}`,
        createdById: user.id,
        createdAt: unit.updatedAt
      }
    })
  } catch (err) {
    const error = new CreateEventError(user, 'delete-unit')
    myEmitter.emit('error', error)
    throw err
  }
}

export const createErrorEvent = async (errorEvent) => {
  let userId
  if (errorEvent.user) {
    userId = errorEvent.user.id
  }

  await dbClient.event.create({
    data: {
      type: 'ERROR',
      topic: errorEvent.topic,
      content: `${errorEvent.code} ${errorEvent.message}`,
      receivedById: userId
    }
  })
}

class ErrorEventBase {
  constructor(user, topic) {
    this.user = user
    this.topic = topic
  }
}

export class BadRequestEvent extends ErrorEventBase {
  constructor(user, topic, message = 'Incorrect request syntax') {
    super(user, topic)
    this.code = 400
    this.message = message
  }
}

export class NoValidationEvent {
  constructor(
    message = 'Unable to verify user',
    topic = 'validate-authentication'
  ) {
    this.user = null
    this.topic = topic
    this.code = 401
    this.message = message
  }
}

export class NoPermissionEvent extends ErrorEventBase {
  constructor(
    user,
    topic,
    message = 'You are not authorized to perform this action'
  ) {
    super(user, topic)
    this.code = 403
    this.message = message
  }
}

export class NotFoundEvent extends ErrorEventBase {
  constructor(user, topic, target) {
    super(user, topic)
    this.code = 404
    this.message = `The ${target} with the provided id does not exist`
  }
}

export class ConfictEvent extends ErrorEventBase {
  constructor(user, topic, message = 'Request conflicts with data on server') {
    super(user, topic)
    this.code = 409
    this.message = message
  }
}

export class DeactivatedUserEvent extends ErrorEventBase {
  constructor(user, topic) {
    super(user, topic)
    this.code = 400
    this.message = 'The target user account has been deactivated'
  }
}

export class ServerErrorEvent extends ErrorEventBase {
  constructor(user, topic, message = 'Internal Server Error') {
    super(user, topic)
    this.code = 500
    this.message = message
  }
}

export class CreateEventError extends ServerErrorEvent {
  constructor(user, topic, message = 'Failed to create an event') {
    super(user, topic, message)
  }
}

export class OtherErrorEvent extends ErrorEventBase {
  constructor(user, topic, code, message) {
    super(user, topic)
    this.code = code
    this.message = message
  }
}
