'use strict';




(() => {
  const tall = 'tree';
  const obj = {
    tall,
    short: 'bush',
  };
  console.assert(obj.short === 'bush', 'Test 4');
  console.assert(obj.tall === 'tree', 'Test 5');
  console.assert(deepCompare(obj, {
    short: 'bush',
    tall: 'tree'
    }), 'Test 6');
})();

(() => {
  const swimming = 'mackerel';
  const obj = {
    flying:'crane',
    swimming,
    runni: 'cheetah',
  };
  console.assert(obj.flying === 'crane', 'Test 7');
  console.assert(obj.runni === 'cheetah', 'Test 8');
  console.assert(obj.swimming === 'mackerel', 'Test 9');
  console.assert(deepCompare(obj, {
    flying: 'crane',
    runni: 'cheetah',
    swimming: 'mackerel'
    }), 'Test 10');
})();

// prettier-ignore
function deepCompare(actual, expect) { return ( actual === expect || Object.is(actual, expect) || (Object(actual) === actual && Object(expect) === expect && ((Array.isArray(actual) && Array.isArray(expect) && actual.length === expect.length && expect.every((expect, index) => deepCompare(actual[index], expect))) || (Object.keys(actual).length === Object.keys(expect).length && Object.keys(expect).every(key => deepCompare(actual[key], expect[key]))))));}
