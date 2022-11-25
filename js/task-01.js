const categories = document.querySelectorAll("li.item");

console.log(categories.length);


categories.forEach(item => {
    console.log("Category: " + item.querySelector('h2').textContent);
    console.log("Elements: " + item.querySelectorAll('li').length)
});