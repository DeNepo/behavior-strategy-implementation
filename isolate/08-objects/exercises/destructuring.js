'use strict';

const expect = chai.expect;

describe('destructuring', () => {
  it('types of tasty treats', () => {
    const { dry, wet } = {
      wet: _,
      dry: 'bread'
    };
    expect(_).to.eql('bread');
    expect(wet).to.eql('soup');
  });
  it('a menagerie', () => {
    const hairiest = 'cheetah';
    const oceanic = _;
    const obj = {
      [oceanic]: 'mackerel',
      running: hairiest
    };
    const birdy = _;
    obj[birdy] = _;
    const {
      swimming,
      flying,
      running
    } = obj;
    expect(flying).to.eql(_);
    expect(_).to.eql('cheetah');
    expect(swimming).to.eql('mackerel')
  });
});
