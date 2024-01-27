import dbClient from '../utils/dbClient.js';

export const findAllUsers = () =>
  dbClient.user.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });

export const findUserByEmail = (email) =>
  dbClient.user.findUnique({
    where: { email: email },
    include: {
      profile: true,
    },
  });

export const findUserByUsername = (username) =>
  dbClient.user.findFirst({
    where: { 
      profile: {
        username: username 
      },
    }, 
  });

export const findUserById = (userId) =>
  dbClient.user.findUnique({
    where: {
      id: userId,
    },
    include: {
      profile: true,
    },
  });

export const findUserByIdBasic = (userId) =>
  dbClient.user.findUnique({
    where: {
      id: userId,
    },
  });



export const resetUserLoginRecord = (recordId, newLoginTime) =>
  dbClient.loginRecord.update({
    where: {
      id: recordId,
    },
    data: {
      collectedReward: true,
      daysInARow: 1,
      lastLoginDateTime: newLoginTime,
    },
  });


export const findUsersByRole = (role) =>
  dbClient.user.findMany({
    where: {
      role: role,
    },
    include: {
      profile: true,
      cards: true,
      packs: true,
      bank: true,
      loginRecord: true,
    },
  });

export const createUser = (username, score) =>
  dbClient.user.create({
    data: {
      username: username,
      score: score,
    },
  });


export const findVerification = (userId) =>
  dbClient.userVerification.findUnique({
    where: {
      userId: userId,
    },
  });

export const findResetRequest = (userId) =>
  dbClient.passwordReset.findUnique({
    where: {
      userId: userId,
    },
  });

export const resetUserPassword = (userId, password) =>
  dbClient.user.update({
    where: {
      id: userId,
    },
    data: {
      password: password,
    },
  });

export const deleteUserById = (userId) =>
  dbClient.user.delete({
    where: {
      id: userId,
    },
  });
