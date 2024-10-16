import { findActiveUsers } from './find-active-users.js';

describe('findActiveUsers: returns all users with .active === true', () => {
  describe('filters out the inactive users from a valid array', () => {
    it('returns an empty array for an empty array', () => {
      const actual = findActiveUsers([]);
      expect(actual).toEqual([]);
    });
    it('returns an empty array when there are only inactive users', () => {
      const actual = findActiveUsers([
        { userName: '', name: '', active: false },
        { userName: '', name: '', active: false },
      ]);
      expect(actual).toEqual([]);
    });
    it('returns all users when all users are active', () => {
      const actual = findActiveUsers([
        { userName: '', name: '', active: true },
        { userName: '', name: '', active: true },
      ]);
      expect(actual).toEqual([
        { userName: '', name: '', active: true },
        { userName: '', name: '', active: true },
      ]);
    });
    it('correctly filters an array of mixed users', () => {
      const actual = findActiveUsers([
        { userName: '', name: '', active: true },
        { userName: '', name: '', active: false },
        { userName: '', name: '', active: false },
        { userName: '', name: '', active: true },
      ]);
      expect(actual).toEqual([
        { userName: '', name: '', active: true },
        { userName: '', name: '', active: true },
      ]);
    });
  });
  describe('uses the argument correctly', () => {
    it('does not modify the argument', () => {
      const usersArg = [
        { userName: '', name: '', active: true },
        { userName: '', name: '', active: false },
      ];
      findActiveUsers(usersArg);
      expect(usersArg).toEqual([
        { userName: '', name: '', active: true },
        { userName: '', name: '', active: false },
      ]);
    });
    it('returns a new array', () => {
      const usersArg = [
        { userName: '', name: '', active: true },
        { userName: '', name: '', active: false },
      ];
      const returned = findActiveUsers(usersArg);
      const areNotTheSameArray = usersArg !== returned;
      expect(areNotTheSameArray).toEqual(true);
    });
  });
  describe('guards against invalid arguments', () => {
    it('throws an error if the argument is not an array', () => {
      const notPassingAnArray = () => findActiveUsers('hello');
      expect(notPassingAnArray).toThrowError(TypeError);
      expect(notPassingAnArray).toThrowError('users is not an array');
    });
    it('throws an error if the array contains non-objects (A)', () => {
      const notPassingAnArray = () => findActiveUsers(['hello', true]);
      expect(notPassingAnArray).toThrowError(TypeError);
      expect(notPassingAnArray).toThrowError(
        'users is not an array of objects'
      );
    });
    it('throws an error if the array contains non-objects (B)', () => {
      const notPassingAnArray = () => findActiveUsers([{}, null, {}]);
      expect(notPassingAnArray).toThrowError(TypeError);
      expect(notPassingAnArray).toThrowError(
        'users is not an array of objects'
      );
    });
    it('throws an error if the array is not all user objects', () => {
      const notPassingAnArray = () =>
        findActiveUsers([
          { userName: '', name: '', active: true },
          {},
          { userName: '', name: '', active: false },
        ]);
      expect(notPassingAnArray).toThrowError(TypeError);
      expect(notPassingAnArray).toThrowError(
        'users is not an array of user objects'
      );
    });
  });
});
