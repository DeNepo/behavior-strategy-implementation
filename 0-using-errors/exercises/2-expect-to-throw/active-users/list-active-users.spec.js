import { listActiveUsers } from './list-active-users.js';

describe('listActiveUsers: an array of all active user names', () => {
  describe('filters out the inactive users from a valid array', () => {
    it('returns an empty array for an empty array', () => {
      const actual = listActiveUsers([]);
      expect(actual).toEqual([]);
    });
    it('returns an empty array when there are only inactive users', () => {
      const actual = listActiveUsers([
        { userName: 'a', name: '', active: false },
        { userName: 'b', name: '', active: false },
      ]);
      expect(actual).toEqual([]);
    });
    it('returns all users when all users are active', () => {
      const actual = listActiveUsers([
        { userName: 'a', name: '', active: true },
        { userName: 'b', name: '', active: true },
      ]);
      expect(actual).toEqual(['a', 'b']);
    });
    it('correctly filters an array of mixed users', () => {
      const actual = listActiveUsers([
        { userName: 'a', name: '', active: true },
        { userName: 'b', name: '', active: false },
        { userName: 'c', name: '', active: false },
        { userName: 'e', name: '', active: true },
      ]);
      expect(actual).toEqual(['a', 'e']);
    });
  });
  describe('uses the argument correctly', () => {
    it('does not modify the argument', () => {
      const usersArg = [
        { userName: 'a', name: '', active: true },
        { userName: 'b', name: '', active: false },
      ];
      listActiveUsers(usersArg);
      expect(usersArg).toEqual([
        { userName: 'a', name: '', active: true },
        { userName: 'b', name: '', active: false },
      ]);
    });
    it('returns a new array', () => {
      const usersArg = [
        { userName: 'a', name: '', active: true },
        { userName: 'b', name: '', active: false },
      ];
      const returned = listActiveUsers(usersArg);
      const areNotTheSameArray = usersArg !== returned;
      expect(areNotTheSameArray).toEqual(true);
    });
  });
  describe('guards against invalid arguments', () => {
    it('throws an error if the argument is not an array', () => {
      const notPassingAnArray = () => listActiveUsers('hello');
      expect(notPassingAnArray).toThrowError(_);
      expect(notPassingAnArray).toThrowError(_);
    });
    it('throws an error if the array contains non-objects (A)', () => {});
    it('throws an error if the array contains non-objects (B)', () => {});
    it('throws an error if the array is not all user objects', () => {});
  });
});
