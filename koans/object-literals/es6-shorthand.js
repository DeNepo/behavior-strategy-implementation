'use strict';

const expect = chai.expect;

describe('ES6 object literal shorthand', () => {
  it('types of tasty treats', () => {
    const wet = 'soup';
    const dry = 'bread';
    const obj = { _, _ };
    expect(obj.dry).to.equal(_);
    expect(obj._).to.equal('soup');
  });
  it('ES5, ES6', () => {
    const tall = 'tree';
    const obj = {
      _,
      _: 'bush'
    };
    expect(obj.short).to.equal(_);
    expect(_).to.equal('tree');
  });
  it('a menagerie', () => {
    const swimming = _;
    const obj = {
      flying: _,
      _,
      _: 'cheetah'
    };
    expect(_).to.equal('crane');
    expect(obj.running).to.equal(_);
    expect(_).to.equal('mackerel')
  });
});
