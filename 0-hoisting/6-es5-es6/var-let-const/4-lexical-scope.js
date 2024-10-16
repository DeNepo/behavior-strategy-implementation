debugger; /* lexical scope

  finally, they all agree about something!

  all kinds of variables are scoped to function calls

*/

const allKinds = () => {
  aFruit = 'apple';
  var aFruit; // hoisting!

  let aVegetable;
  aVegetable = 'carrot';

  const aGrain = 'wheat';
  console.log(aGrain);
};

allKinds();
allKinds();
