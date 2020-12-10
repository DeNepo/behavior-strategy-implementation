'use strict';

(() => {
  const orite = 'bread';
  const obj = {
    fav: orite,
    wet: 'soup',
  };
  console.assert(obj.fav === 'bread', 'Test 1');
  console.assert(obj.wet === 'soup', 'Test 2');
  console.assert(deepCompare(obj, {
    fav: 'bread',
    wet: 'soup'
    }), 'Test 3');
})();

(() => {
  const swimming = 'mackerel';
  const obj = {
    flying: 'crane',
    swimming: swimming,
    running: 'cheetah'
  };
  console.assert(obj.flying === 'crane', 'Test 4');
  console.assert(obj.running === 'cheetah', 'Test 5');
  console.assert(obj.swimming === 'mackerel', 'Test 6');
  console.assert(deepCompare(obj, {
    flying: 'crane',
    swimming: 'mackerel',
    running: 'cheetah'
    }), 'Test 7');
})();

// prettier-ignore
function deepCompare(actual, expect) { return ( actual === expect || Object.is(actual, expect) || (Object(actual) === actual && Object(expect) === expect && ((Array.isArray(actual) && Array.isArray(expect) && actual.length === expect.length && expect.every((expect, index) => deepCompare(actual[index], expect))) || (Object.keys(actual).length === Object.keys(expect).length && Object.keys(expect).every(key => deepCompare(actual[key], expect[key]))))));}