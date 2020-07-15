'use strict';

const expect = chai.expect;

describe('ES6 object literal shorthand', () => {
  it('types of tasty treats', () => {
    const wet = 'soup';
    const dry = 'bread';
    const obj = { _, _ };
    expect(obj.dry).to.eql(_);
    expect(obj._).to.eql('soup');
  });
  it('ES5, ES6', () => {
    const tall = 'tree';
    const obj = {
      _,
      _: 'bush'
    };
    expect(obj.short).to.eql(_);
    expect(_).to.eql('tree');
  });
  it('a menagerie', () => {
    const swimming = _;
    const obj = {
      flying: _,
      _,
      _: 'cheetah'
    };
    expect(_).to.eql('crane');
    expect(obj.running).to.eql(_);
    expect(_).to.eql('mackerel')
  });
});
