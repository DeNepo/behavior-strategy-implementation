'use strict';

const expect = chai.expect;

describe('computed properties', () => {
  it('types of tasty treats', () => {
    const wet = 'soup';
    const dry = 'bread';
    const obj = {
      [_]: 'wet',
      _: _
    };
    expect(obj.soup).to.equal('wet');
    expect(obj.dry).to.equal(_);
  });
  it('a menagerie', () => {
    const swimming = 'mackerel';
    const mackerel = 'swimming';
    const inTheSky = _;
    const obj = {
      [_]: 'crane',
      [_]: _,
      running: _
    };
    expect(obj.flying).to.equal('crane');
    expect(_).to.equal('cheetah');
    expect(obj[mackerel]).to.equal(swimming)
  });
});
