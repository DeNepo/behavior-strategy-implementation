// We start by creating a simple object
const foods = {
  bread: 'for dipping',
  chili: 'a soup',
  milk: 'drink it'
};

// We declare our function that accepts an object 
const startDisplaying = (food) => {
  for (let key of Object.keys(food)) {
    console.log(key)
  }
}

// We call the function with a reference
startDisplaying(foods);