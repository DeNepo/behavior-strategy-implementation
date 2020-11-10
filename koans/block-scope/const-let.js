'use strict';

const expect = chai.expect;

describe('curly braces create a new scope', () => {
  it('const is block scoped', () => {
    const a = 3;
    expect(a).to.equal(_);
    {
      const a = 5;
      expect(a).to.equal(_);
    }
    expect(a).to.equal(_);
  });
  it('let is block scoped', () => {
    let a = 'hi';
    expect(a).to.equal(_);
    {
      let a = 5;
      expect(a).to.equal(_);
    }
    expect(a).to.equal(_);
  });
  it('let is still block scoped', () => {
    let a = 'hi';
    expect(a).to.equal(_);
    {
      a = 5;
      expect(a).to.equal(_);
    }
    expect(a).to.equal(_);
  });
  it('both are block scoped', () => {
    let x = 3;
    let y = 12;
    expect(x).to.equal(_);
    expect(y).to.equal(_);
    {
      x = 10;
      const y = 5 + x;
      expect(x).to.equal(_);
      expect(y).to.equal(_);
    }
    expect(x).to.equal(_);
    expect(y).to.equal(_);
  });
});


