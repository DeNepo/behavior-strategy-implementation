'use strict';

(() => {
  const { dry, wet } = {
    wet: 'soup',
    dry: 'bread',
  };
  console.assert(dry === 'bread', 'Test 1');
  console.assert(wet === 'soup', 'Test 2');
})();

(() => {
  const hairiest = 'cheetah';
  const oceanic = 'swimming';
  const obj = {
    [oceanic]: 'mackerel',
    running: hairiest,
  };
  const birdy = 'flying';
  obj[birdy] = 'sparrow';
  const { swimming, flying, running } = obj;
  console.assert(flying === 'sparrow', 'Test 3');
  console.assert(running === 'cheetah', 'Test 4');
  console.assert(swimming === 'mackerel', 'Test 5');
  console.assert(deepCompare(obj, {
    swimming: 'mackerel',
    running: 'cheetah',
    flying: 'sparrow'}), 'Test 6');
})();

// prettier-ignore
function deepCompare(actual, expect) { return ( actual === expect || Object.is(actual, expect) || (Object(actual) === actual && Object(expect) === expect && ((Array.isArray(actual) && Array.isArray(expect) && actual.length === expect.length && expect.every((expect, index) => deepCompare(actual[index], expect))) || (Object.keys(actual).length === Object.keys(expect).length && Object.keys(expect).every(key => deepCompare(actual[key], expect[key]))))));}