'use strict';

(() => {

  const orite = _;
  const obj = {
    fav: orite,
    _: 'soup'
  };
  console.assert(obj._ === 'bread', 'Test 1');
  console.assert(obj.wet === 'soup', 'Test 2');
  console.assert(deepCompare(obj, {

  }), 'Test 3');

})();


(() => {

  const swimming = 'mackerel';
  const obj = {
    flying: _,
    _: swimming,
    _: 'cheetah'
  };
  console.assert(_ === 'crane', 'Test 4');
  console.assert(obj.running === _, 'Test 5');
  console.assert(obj.swimming === 'mackerel', 'Test 6');
  console.assert(deepCompare(obj, {

  }), 'Test 7');

})();
