// reducing a soup means boiling away water to leave a thicker soup
// reducing an array means to create a single new value
//  by combining all the elements of the array
// psst.  use the Debugger or JS Tutor
//  practice using breakpoints to skip to the lines you want to study

const _1_numbers = [-12, 3.6, 83, 0];
let _1_sumOfNumbers = 0;
for (let number of _1_numbers) {
  _1_sumOfNumbers += number;
}

const _2_letters = ['a', 'b', 'c', 'd'];
let _2_snowball = '';
for (let letter of _2_letters) {
  const everythingSoFar = _2_snowball + letter;
  _2_snowball += everythingSoFar;
}


const _3_booleans = [true, false, true, false];

let _3_allTrue = true;
for (let boolean of _3_booleans) {
  _3_allTrue = _3_allTrue && boolean;
}

let _4_allFalse = true;
for (let boolean of _3_booleans) {
  _4_allFalse = _4_allFalse && !boolean;
}
