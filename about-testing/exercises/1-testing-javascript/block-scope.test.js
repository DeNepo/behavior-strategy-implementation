'use strict';

describe('curly braces create a new scope', () => {
  describe('const is block scoped', () => {
    const a = 3;
    it('before block', () => expect(a).toBe(_));
    {
      const a = 5;
      it('inside block', () => expect(a).toBe(_));
    }
    it('after block', () => expect(a).toBe(_));
  });
  describe('let is block scoped', () => {
    let a = 'hi';
    it('before block', () => expect(a).toBe(_));
    {
      let a = 5;
      it('inside block', () => expect(a).toBe(_));
    }
    it('after block', () => expect(a).toBe(_));
  });
  describe('let is still block scoped', () => {
    let a = 'hi';
    it('before block', () => expect(a).toBe(_));
    {
      a = 5;
      it('inside block', () => expect(a).toBe(_));
    }
    it('after block', () => expect(a).toBe(_));
  });
  describe('both are block scoped', () => {
    let x = 3;
    let y = 12;
    it('x before block', () => expect(x).toBe(_));
    it('y before block', () => expect(y).toBe(_));
    {
      x = 10;
      const y = 5 + x;
      it('x inside block', () => expect(x).toBe(_));
      it('y inside block', () => expect(y).toBe(_));
    }
    it('x after block', () => expect(x).toBe(_));
    it('y after block', () => expect(y).toBe(_));
  });
});


