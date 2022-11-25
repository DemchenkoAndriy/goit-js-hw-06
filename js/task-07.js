const text = document.querySelector('#text');
const slider =  document.querySelector('#font-size-control');

slider.addEventListener("input", e =>{
    text.style.fontSize  = e.currentTarget.value+"px";
  
}
)
