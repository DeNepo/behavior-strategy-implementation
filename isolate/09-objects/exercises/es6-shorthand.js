'use strict';


(() => {

  const wet = 'soup';
  const dry = 'bread';
  const obj = { _, _ };
  console.assert(obj.dry === _, 'Test 1');
  console.assert(obj._ === 'soup', 'Test 2');
  console.assert(deepCompare(obj, {

  }), 'Test 3');

})();

(() => {

  const tall = 'tree';
  const obj = {
    _,
    _: 'bush'
  };
  console.assert(obj.short === _, 'Test 4');
  console.assert(_ === 'tree', 'Test 5');
  console.assert(deepCompare(obj, {

  }), 'Test 6');

})();

(() => {

  const swimming = _;
  const obj = {
    flying: _,
    _,
    _: 'cheetah'
  };
  console.assert(_ === 'crane', 'Test 7');
  console.assert(obj.runni === _, 'Test 8');
  console.assert(_ === 'mackerel', 'Test 9');
  console.assert(deepCompare(obj, {

  }), 'Test 10');

})();


