'use strict';

import { findActiveUsers } from './their-code.js';

/**
 * returns an array of all active user names
 * @param {object[]} users - an array of user objects
 * @returns {string[]} an array of user names
 */
export const listActiveUsers = users => {
  const activeUsers = findActiveUsers(users);
  return activeUsers.map(user => user.userName);
};
