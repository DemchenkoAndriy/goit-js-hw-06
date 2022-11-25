const validation = document.querySelector('#validation-input');


validation.addEventListener("blur", (e) => {

    if (e.currentTarget.value.length === Number(validation.dataset.length)){
        validation.classList.add('valid');
        validation.classList.remove('invalid');
      
    } else  if(e.currentTarget.value.length ===0){
        validation.classList.remove('valid');
         validation.classList.remove('invalid');

    } else {
        validation.classList.add('invalid');

    }
 
});
