const Value = document.querySelector('#value');

let counterValue = 0;

const bntDecrement = document.querySelector('button[data-action="decrement"]');
const bntIncrement = document.querySelector('button[data-action="increment"]');

bntDecrement.addEventListener("click",Decrement );
bntIncrement.addEventListener("click", Increment);

function Decrement() {
    counterValue -=1
Value.textContent = counterValue;    
}

function Increment () {
    counterValue += 1
Value.textContent = counterValue;    
}