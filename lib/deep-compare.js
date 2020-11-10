function deepCompare(actual, expect) {
  // are they the same thing?
  return actual === expect || Object.is(actual, expect)
    // compare arrays
    || (Object(actual) === actual && Object(expect) === expect) && (Array.isArray(actual) && Array.isArray(expect) && actual.length === expect.length && expect.every((expect, index) => deepCompare(actual[index], expect))
      // compare objects
      || Reflect.ownKeys(actual).length === Reflect.ownKeys(expect).length && Reflect.ownKeys(expect).every((key) => deepCompare(actual[key], expect[key])));
};
