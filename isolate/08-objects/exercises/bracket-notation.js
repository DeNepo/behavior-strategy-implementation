'use strict';

(() => {
  const key1 = 'dry';
  const key2 = 'wet';
  const obj = {};
  obj[key2] = 'soup';
  obj[key1] = 'bread';
  console.assert(obj.wet === 'soup', 'Test 1');
  console.assert(obj.dry === 'bread', 'Test 2');
  console.assert(deepCompare(obj, {
      wet: 'soup',
      dry: 'bread'
    }), 'Test 3');
})();

(() => {
  const motion = 'running';
  const fastAnimal = 'cheetah';
  const water = 'swimming';
  const obj = {
    swimming: 'mackerel',
  };
  obj['running'] = 'cheetah';
  obj['flying'] = 'crane';
  console.assert(obj.flying === 'crane', 'Test 4');
  console.assert(obj.running === fastAnimal, 'Test 5');
  console.assert(obj[water] === 'mackerel', 'Test 6');
  console.assert(deepCompare(obj, {
    swimming: 'mackerel',
    flying: 'crane',
    running: 'cheetah'
    }), 'Test 3');
})();

// prettier-ignore
function deepCompare(actual, expect) { return ( actual === expect || Object.is(actual, expect) || (Object(actual) === actual && Object(expect) === expect && ((Array.isArray(actual) && Array.isArray(expect) && actual.length === expect.length && expect.every((expect, index) => deepCompare(actual[index], expect))) || (Object.keys(actual).length === Object.keys(expect).length && Object.keys(expect).every(key => deepCompare(actual[key], expect[key]))))));}