'use strict';

const expect = require('chai').expect;

describe('curly braces create a new scope', () => {
  describe('const is block scoped', () => {
    const a = 3;
    it('before block', () => expect(a).to.equal(3));
    {
      const a = 5;
      it('inside block', () => expect(a).to.equal(5));
    }
    it('after block', () => expect(a).to.equal(3));
  });
  
  describe('let is block scoped', () => {
    let a = 'hi';
    it('before block', () => expect(a).to.equal('hi'));
    {
      let a = 5;
      it('inside block', () => expect(a).to.equal(5));
    }
    it('after block', () => expect(a).to.equal('hi'));
  });
  describe('let is still block scoped', () => {
    let a = 'hi';
    it('before block', () => expect(a).to.equal('hi'));
    {
      a = 5;
      it('inside block', () => expect(a).to.equal(5));
    }
    it('after block', () => expect(a).to.equal(5));
  });
  describe('both are block scoped', () => {
    let x = 3;
    let y = 12;
    it('x before block', () => expect(x).to.equal(3));
    it('y before block', () => expect(y).to.equal(12));
    {
      x = 10;
      const y = 5 + x;
      it('x inside block', () => expect(x).to.equal(10));
      it('y inside block', () => expect(y).to.equal(15));
    }
    it('x after block', () => expect(x).to.equal(10));
    it('y after block', () => expect(y).to.equal(12));
  });
});


