'use strict';

describe('computed properties', () => {
  describe('types of tasty treats', () => {
    const wet = 'soup';
    const dry = 'bread';
    const obj = {
      [_]: 'wet',
      _: _,
    };
    it('obj.soup', () => {
      expect(obj.soup).toBe('wet');
    });
    it('obj.dry', () => {
      expect(obj.bread).toBe(_);
    });
  });
  describe('a menagerie', () => {
    const swimming = 'mackerel';
    const mackerel = 'swimming';
    const inTheSky = _;
    const obj = {
      [_]: 'crane',
      [_]: _, // use existing variables to complete this one
      running: _,
    };
    it('obj.flying', () => {
      expect(obj.flying).toBe('crane');
    });
    it('obj.running', () => {
      expect(_).toBe('cheetah');
    });
    it('obj.swimming', () => {
      expect(obj.swimming).toBe('mackerel');
    });
  });
});
