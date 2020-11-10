'use strict';

(() => {

  const { dry, wet } = {
    wet: _,
    dry: 'bread'
  };
  console.assert(_ === 'bread', 'Test 1');
  console.assert(wet === 'soup', 'Test 2');

})();

(() => {

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
  console.assert(flying === _, 'Test 3');
  console.assert(_ === 'cheetah', 'Test 4');
  console.assert(swimming === 'mackerel', 'Test 5');
  console.assert(deepCompare(obj, {

  }), 'Test 6');

})();
