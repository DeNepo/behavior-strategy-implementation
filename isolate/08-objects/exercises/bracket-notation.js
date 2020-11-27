'use strict';

(() => {
  const key1 = 'dry';
  const key2 = _;
  const obj = {};
  obj[key2] = _;
  obj[_] = 'bread';
  console.assert(obj.wet === 'soup', 'Test 1');
  console.assert(obj.dry === _, 'Test 2');
  console.assert(deepCompare(obj, {}), 'Test 3');
})();

(() => {
  const motion = 'running';
  const fastAnimal = 'cheetah';
  const water = _;
  const obj = {
    swimming: 'mackerel',
  };
  obj[_] = _;
  obj['flying'] = _;
  console.assert(obj.flying === 'crane', 'Test 4');
  console.assert(obj.running === fastAnimal, 'Test 5');
  console.assert(obj[water] === 'mackerel', 'Test 6');
  console.assert(deepCompare(obj, {}), 'Test 3');
})();

// prettier-ignore
function deepCompare(actual, expect) { return ( actual === expect || Object.is(actual, expect) || (Object(actual) === actual && Object(expect) === expect && ((Array.isArray(actual) && Array.isArray(expect) && actual.length === expect.length && expect.every((expect, index) => deepCompare(actual[index], expect))) || (Object.keys(actual).length === Object.keys(expect).length && Object.keys(expect).every(key => deepCompare(actual[key], expect[key]))))));}
