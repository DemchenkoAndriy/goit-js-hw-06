const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const newList = [];
   ingredients.forEach(item => {
     const newItem = document.createElement("li");
       newItem.textContent = item;
newItem.setAttribute("class","item")
     newList.push(newItem);
})


const list = document.querySelector('ul#ingredients');
list.prepend(...newList);

// console.log(list);
// console.log(newList);