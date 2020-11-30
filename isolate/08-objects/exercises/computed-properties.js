'use strict';

(() => {
  const wet = 'soup';
  const dry = 'bread';
  const obj = {
    [_]: 'wet',
    _: _,
  };
  console.assert(obj.soup === 'wet', 'Test 1');
  console.assert(obj.bread === _, 'Test 2');
  console.assert(deepCompare(obj, {}), 'Test 3');
})();

(() => {
  const swimming = 'mackerel';
  const mackerel = 'swimming';
  const inTheSky = _;
  const obj = {
    [_]: 'crane',
    [_]: _, // use existing variables to complete this one
    running: _,
  };
  console.assert(obj.flying === 'crane', 'Test 4');
  console.assert(_ === 'cheetah', 'Test 5');
  console.assert(obj.swimming === 'mackerel', 'Test 6');
  console.assert(deepCompare(obj, {}), 'Test 7');
})();

// prettier-ignore
function deepCompare(actual, expect) { return ( actual === expect || Object.is(actual, expect) || (Object(actual) === actual && Object(expect) === expect && ((Array.isArray(actual) && Array.isArray(expect) && actual.length === expect.length && expect.every((expect, index) => deepCompare(actual[index], expect))) || (Object.keys(actual).length === Object.keys(expect).length && Object.keys(expect).every(key => deepCompare(actual[key], expect[key]))))));}
