'use strict';

(() => {

  const wet = 'soup';
  const dry = 'bread';
  const obj = {
    [_]: 'wet',
    _: _
  };
  console.assert(obj.soup === 'wet', 'Test 1');
  console.assert(obj.dry === _, 'Test 2');
  console.assert(deepCompare(obj, {

  }), 'Test 3');

})();


(() => {

  const swimming = 'mackerel';
  const mackerel = 'swimming';
  const inTheSky = _;
  const obj = {
    [_]: 'crane',
    [_]: _,
    running: _
  };
  console.assert(obj.flying === 'crane', 'Test 4');
  console.assert(_ === 'cheetah', 'Test 5');
  console.assert(obj[mackerel] === swimming, 'Test 6');
  console.assert(deepCompare(obj, {

  }), 'Test 7');

})();
