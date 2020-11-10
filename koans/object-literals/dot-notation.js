'use strict';

const expect = chai.expect;

describe('dot notation', () => {
  it('types of tasty treats', () => {
    const favorite = _;
    const obj = {
      _: favorite,
      dry: _
    };
    expect(_).to.equal('bread');
    expect(obj.wet).to.equal('soup');
  });
  it('a menagerie', () => {
    const swimming = 'mackerel';
    const obj = {
      flying: _,
      _: swimming,
      _: 'cheetah'
    };
    expect(_).to.equal('crane');
    expect(obj.running).to.equal(_);
    expect(obj.swimming).to.equal('mackerel')
  });
});
