'use strict';

const expect = chai.expect;

describe('dot notation', () => {
  it('types of tasty treats', () => {
    const favorite = _;
    const obj = {
      _: favorite,
      dry: _
    };
    expect(_).to.eql('bread');
    expect(obj.wet).to.eql('soup');
  });
  it('a menagerie', () => {
    const swimming = 'mackerel';
    const obj = {
      flying: _,
      _: swimming,
      _: 'cheetah'
    };
    expect(_).to.eql('crane');
    expect(obj.running).to.eql(_);
    expect(obj.swimming).to.eql('mackerel')
  });
});
