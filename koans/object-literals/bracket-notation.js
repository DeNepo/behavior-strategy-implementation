'use strict';

const expect = chai.expect;

describe('bracket notation', () => {
  it('types of tasty treats', () => {
    const key1 = 'dry';
    const key2 = _;
    const obj = {};
    obj[key2] = _;
    obj[_] = 'bread'
    expect(obj.wet).to.equal('soup');
    expect(obj[_]).to.equal(_);
  });
  it('a menagerie', () => {
    const motion = 'running';
    const fastAnimal = 'cheetah';
    const water = _;
    const obj = {
      swimming: 'mackerel'
    };
    obj[_] = _;
    obj['flying'] = _;
    expect(object.flying).to.equal('crane');
    expect(obj.running).to.equal(fastAnimal);
    expect(obj[water]).to.equal('mackerel')
  });
});
