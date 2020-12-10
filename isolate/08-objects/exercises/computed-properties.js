'use strict';

(() => {
  const wet = 'soup';
  const dry = 'bread';
  const obj = {
    [wet]: 'wet',
    [dry]: 'bread',
  };
  console.assert(obj.soup === 'wet', 'Test 1');
  console.assert(obj.bread === 'bread', 'Test 2');
  console.assert(deepCompare(obj, {
      soup: 'wet',
      bread: 'bread'
    }), 'Test 3');
})();

(() => {
  const swimming = 'mackerel';
  const mackerel = 'swimming';
  const inTheSky = 'flying';
  const obj = {
    [inTheSky]: 'crane',
    [mackerel]: 'mackerel', // use existing variables to complete this one
    running: 'cheetah',
  };
  console.assert(obj.flying === 'crane', 'Test 4');
  console.assert(obj.running === 'cheetah', 'Test 5');
  console.assert(obj.swimming === 'mackerel', 'Test 6');
  console.assert(deepCompare(obj, {
      flying: 'crane',
      running: 'cheetah',
      swimming: 'mackerel'
    }), 'Test 7');
})();

// prettier-ignore
function deepCompare(actual, expect) { return ( actual === expect || Object.is(actual, expect) || (Object(actual) === actual && Object(expect) === expect && ((Array.isArray(actual) && Array.isArray(expect) && actual.length === expect.length && expect.every((expect, index) => deepCompare(actual[index], expect))) || (Object.keys(actual).length === Object.keys(expect).length && Object.keys(expect).every(key => deepCompare(actual[key], expect[key]))))));}