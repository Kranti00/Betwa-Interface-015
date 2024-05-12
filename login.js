const loginForm = document.getElementById('loginForm');
const loginContainer = document.getElementById('loginContainer');
const signupLink = document.getElementById('signupLink');
const backbtn = document.getElementById('login_back_btn');

loginForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    login(email, password);
  });

  signupLink.addEventListener('click', function (e) {
    e.preventDefault();
    window.location.href = 'Signup.html'
    clearForm(signupForm);
    
  });

  async function login(email, password) {
    try {
      const response = await fetch('https://betwa-interface-015.onrender.com/users');
      const users = await response.json();
      const user = users.find(user => user.email === email && user.password === password);
      if (user) {
        alert('Login Successful');
        localStorage.setItem("key",true);
        // Redirect or perform further actions after successful login
        clearForm(loginForm);
        window.location.href = "index.html";
        // loginBtn.innerText = 'Logout'
      } else {
        alert('Invalid email or password');
        clearForm(loginForm);
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
  