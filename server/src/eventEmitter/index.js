import EventEmitter from 'events'
import {
  createCohortCreatedEvent,
  createRegisterEvent,
  createUpdateEmailEvent,
  createUpdatePrivacyEvent,
  createUpdateActivateEvent,
  createUpdateRoleEvent,
  createRenameCohortEvent,
  createDeleteCohortEvent,
  createAddToCohortEvent,
  createRemoveFromCohortEvent,
  createExerciseCreatedEvent,
  createDeleteExerciseEvent,
  createErrorEvent
} from './utils.js'

class MyEventEmitter extends EventEmitter {}
export const myEmitter = new MyEventEmitter()

myEmitter.on('register', (user) => createRegisterEvent(user))
myEmitter.on('update-email', (user, oldEmail) =>
  createUpdateEmailEvent(user, oldEmail)
)
myEmitter.on('update-privacy', (user, oldPref) =>
  createUpdatePrivacyEvent(user, oldPref)
)
myEmitter.on('update-account-activate', (user, admin = null) =>
  createUpdateActivateEvent(user, (admin = null))
)
myEmitter.on('update-role', (assignee, oldRole, assigner) =>
  createUpdateRoleEvent(assignee, oldRole, assigner)
)

myEmitter.on('create-cohort', (cohort, admin) =>
  createCohortCreatedEvent(cohort, admin)
)
myEmitter.on('rename-cohort', (cohort, oldName, admin) =>
  createRenameCohortEvent(cohort, oldName, admin)
)
myEmitter.on('delete-cohort', (cohort, admin) =>
  createDeleteCohortEvent(cohort, admin)
)
myEmitter.on('add-to-cohort', (admin, student) =>
  createAddToCohortEvent(admin, student)
)
myEmitter.on('remove-from-cohort', (admin, student, cohort) =>
  createRemoveFromCohortEvent(admin, student, cohort)
)

myEmitter.on('create-exercise', (exercise, user) =>
  createExerciseCreatedEvent(exercise, user)
)
myEmitter.on('delete-exercise', (exercise, user) =>
  createDeleteExerciseEvent(exercise, user)
)

myEmitter.on('error', (error) => createErrorEvent(error))
