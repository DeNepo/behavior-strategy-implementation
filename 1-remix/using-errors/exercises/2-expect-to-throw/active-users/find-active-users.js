// their code

/**
 * takes an array of user objects and keeps all the active users
 * a user object must have with a boolean .active property
 * @param {object[]} users - an array of user objects
 * @returns {object[]} an array of only active users
 */
export const findActiveUsers = (users) => {
  if (!Array.isArray(users)) {
    throw new TypeError("users is not an array");
  }
  if (users.some((user) => !user || typeof user !== "object")) {
    throw new TypeError("users is not an array of objects");
  }
  if (users.some((user) => !("active" in user))) {
    throw new TypeError("users is not an array of user objects");
  }

  return users.filter((user) => user.active === true);
};
