'use strict';

const expect = require('chai').expect;

describe('curly braces create a new scope', () => {
  describe('const is block scoped', () => {
    const a = 3;
    it('before block', () => expect(a).to.equal(_));
    {
      const a = 5;
      it('inside block', () => expect(a).to.equal(_));
    }
    it('after block', () => expect(a).to.equal(_));
  });
  describe('let is block scoped', () => {
    let a = 'hi';
    it('before block', () => expect(a).to.equal(_));
    {
      let a = 5;
      it('inside block', () => expect(a).to.equal(_));
    }
    it('after block', () => expect(a).to.equal(_));
  });
  describe('let is still block scoped', () => {
    let a = 'hi';
    it('before block', () => expect(a).to.equal(_));
    {
      a = 5;
      it('inside block', () => expect(a).to.equal(_));
    }
    it('after block', () => expect(a).to.equal(_));
  });
  describe('both are block scoped', () => {
    let x = 3;
    let y = 12;
    it('x before block', () => expect(x).to.equal(_));
    it('y before block', () => expect(y).to.equal(_));
    {
      x = 10;
      const y = 5 + x;
      it('x inside block', () => expect(x).to.equal(_));
      it('y inside block', () => expect(y).to.equal(_));
    }
    it('x after block', () => expect(x).to.equal(_));
    it('y after block', () => expect(y).to.equal(_));
  });
});


