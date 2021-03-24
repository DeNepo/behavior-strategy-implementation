'use strict';

describe('curly braces create a new scope', () => {
  describe('const is block scoped', () => {
    const a = 3;
    it('before block', () => expect(a).toEqual(_));
    {
      const a = 5;
      it('inside block', () => expect(a).toEqual(_));
    }
    it('after block', () => expect(a).toEqual(_));
  });
  describe('let is block scoped', () => {
    let a = 'hi';
    it('before block', () => expect(a).toEqual(_));
    {
      let a = 5;
      it('inside block', () => expect(a).toEqual(_));
    }
    it('after block', () => expect(a).toEqual(_));
  });
  describe('let is still block scoped', () => {
    let a = 'hi';
    it('before block', () => expect(a).toEqual(_));
    {
      a = 5;
      it('inside block', () => expect(a).toEqual(_));
    }
    it('after block', () => expect(a).toEqual(_));
  });
  describe('both are block scoped', () => {
    let x = 3;
    let y = 12;
    it('x before block', () => expect(x).toEqual(_));
    it('y before block', () => expect(y).toEqual(_));
    {
      x = 10;
      const y = 5 + x;
      it('x inside block', () => expect(x).toEqual(_));
      it('y inside block', () => expect(y).toEqual(_));
    }
    it('x after block', () => expect(x).toEqual(_));
    it('y after block', () => expect(y).toEqual(_));
  });
});
