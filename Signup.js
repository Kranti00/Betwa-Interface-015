const signupForm = document.getElementById('signupForm');
const signupContainer = document.getElementById('signupContainer');
const loginLink = document.getElementById('loginLink');
let  backbtn = document.getElementById('signup_back_btn')

signupForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('signupUsername').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    const contact = document.getElementById('signupContact').value;
    signup(username, email, password, contact);
    window.location.href = "login.html"
  });


  loginLink.addEventListener('click', function (e) {
    e.preventDefault();
    window.location.href = "login.html"
    clearForm(loginForm);
  });


  async function signup(username, email, password, contact) {
    try {
      CartArray = [];
      const response = await fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username,
          email,
          password,
          contact,
          CartArray
        })
      });
      if (response.ok) {
        alert('Signup Successful please Login!');
        clearForm(signupForm);
      } else {
        alert('Signup Failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }


  function clearForm(form) {
    const inputs = form.querySelectorAll('input');
    inputs.forEach(input => input.value = '');
  }

  backbtn.addEventListener("click",()=>{
    window.location.href= 'index.html'
  })