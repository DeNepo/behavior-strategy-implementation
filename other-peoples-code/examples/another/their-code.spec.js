'use strict';

import { findActiveInUsers } from './their-code.js';

describe('findActiveUsers: returns all users with .active === true', () => {
  describe('filters out the inactive users from a valid array', () => {
    it('returns an empty array for an empty array', () => {
      const actual = findActiveInUsers([]);
      expect(actual).toStrictEqual([]);
    });
    it('returns an empty array when there are only inactive users', () => {
      const actual = findActiveInUsers([{ active: false }, { active: false }]);
      expect(actual).toStrictEqual([]);
    });
    it('returns all users when all users are active', () => {
      const actual = findActiveInUsers([{ active: true }, { active: true }]);
      expect(actual).toStrictEqual([{ active: true }, { active: true }]);
    });
    it('correctly filters an array of mixed users', () => {
      const actual = findActiveInUsers([
        { active: true },
        { active: false },
        { active: false },
        { active: true },
      ]);
      expect(actual).toStrictEqual([{ active: true }, { active: true }]);
    });
  });
  describe('uses the argument correctly', () => {
    it('does not modify the argument', () => {
      const usersArg = [{ active: true }, { active: false }];
      findActiveInUsers(usersArg);
      expect(usersArg).toStrictEqual([{ active: true }, { active: false }]);
    });
    it('returns a new array', () => {
      const usersArg = [{ active: true }, { active: false }];
      const returned = findActiveInUsers(usersArg);
      const areNotTheSameArray = usersArg !== returned;
      expect(areNotTheSameArray).toStrictEqual(true);
    });
  });
  describe('guards against invalid arguments', () => {
    it('throws an error if the argument is not an array', () => {
      const notPassingAnArray = () => findActiveInUsers('hello');
      expect(notPassingAnArray).toThrowError(
        TypeError,
        'users is not an array'
      );
    });
    it('throws an error if the array contains non-objects (A)', () => {
      const notPassingAnArray = () => findActiveInUsers(['hello', true]);
      expect(notPassingAnArray).toThrowError(
        TypeError,
        'users is not an array of objects'
      );
    });
    it('throws an error if the array contains non-objects (B)', () => {
      const notPassingAnArray = () => findActiveInUsers([{}, null, {}]);
      expect(notPassingAnArray).toThrowError(
        TypeError,
        'users is not an array of objects'
      );
    });
    it('throws an error if the array is not all user objects', () => {
      const notPassingAnArray = () =>
        findActiveInUsers([{ active: true }, {}, { active: false }]);
      expect(notPassingAnArray).toThrowError(
        TypeError,
        'users is not an array of user objects'
      );
    });
  });
});
