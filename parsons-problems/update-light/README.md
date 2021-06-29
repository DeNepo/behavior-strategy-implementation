# Update Light

> from [Thinkful - Logic Drills: Traffic light](https://www.codewars.com/kata/58649884a1659ed6cb000072/solutions) on CodeWars

You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.

Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.

For example, `update_light('green')` should return `'yellow'`.

## Unit Tests

```js
describe('Random tests', function () {
  let colors = ['green', 'yellow', 'red'],
    color,
    expected;
  for (let i = 0; i < 10; i++) {
    color = colors[Math.floor(Math.random() * 3)];
    expected = { green: 'yellow', yellow: 'red', red: 'green' }[color];
    it("Testing: '" + color + "', expecting: '" + expected + "'", function () {
      Test.assertEquals(updateLight(color), expected);
    });
  }
});
```
