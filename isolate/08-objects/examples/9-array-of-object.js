// Objects can be stored in an array
const spaghetti = {
 name: "spaghetti",
 kcal: 420,
 taste: 9,
 price: 4.65,
 personalOpinion: "Very tasty"
}

const steak = {
    name: "steak",
    kcal: 320,
    taste: 8,
    price: 6.50,
    personalOpinion: "Damn.. steak"
}

// we declare an array containing our favorite food
const favoriteDishes = [spaghetti, steak];

/*
*       Sort array
*   Sort is an array function that allows sorting the array. 
*   If no compare function is supplied all elements are converted to string and their values compared that way
*   
*   The compare function take two array elements. If the result of substraction is negative a will come first otherwise b will come first
*/
const healthiestDishes = favoriteDishes.sort((a, b) => a.kcal - b.kcal);



(dishes => dishes.forEach(dish => console.log(dish.name)))(healthiestDishes); 
