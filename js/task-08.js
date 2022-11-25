
const form = document.querySelector('.login-form');

// const email = document.querySelector("input[name='email']");
// const password = document.querySelector("input[name='password']");



form.addEventListener("submit", sumbitForm);

function sumbitForm(e) {
   
    e.preventDefault();
    const { elements: { email, password } } = e.currentTarget;
    

    if (email.value==="" || password.value==="" ) {
       alert("Всі поля форми мають бути заповненні") 
    } else {

        console.log(`{${email.name}:${email.value},${password.name}:${password.value}}`);
    }
  e.currentTarget.reset();
}
