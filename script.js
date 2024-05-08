// Kranti section


// Kranti section end



//Haresh section
const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');
const loginBtn = document.getElementById('loginBtn');
const loginContainer = document.getElementById('loginContainer');
const signupContainer = document.getElementById('signupContainer');
const signupLink = document.getElementById('signupLink');
const loginLink = document.getElementById('loginLink');

loginForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  login(email, password);
});

signupForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const username = document.getElementById('signupUsername').value;
  const email = document.getElementById('signupEmail').value;
  const password = document.getElementById('signupPassword').value;
  const contact = document.getElementById('signupContact').value;
  signup(username, email, password, contact);
});

loginBtn.addEventListener('click', function (e) {
  e.preventDefault();
  loginBtn.textContent = 'Login';
  loginContainer.classList.add('active');
  signupContainer.classList.remove('active');
  clearForm(loginForm);
});

signupLink.addEventListener('click', function (e) {
  e.preventDefault();
  loginContainer.classList.remove('active');
  signupContainer.classList.add('active');
  clearForm(signupForm);
});

loginLink.addEventListener('click', function (e) {
  e.preventDefault();
  loginContainer.classList.add('active');
  signupContainer.classList.remove('active');
  clearForm(loginForm);
});

async function login(email, password) {
  try {
    const response = await fetch('http://localhost:3000/users');
    const users = await response.json();
    const user = users.find(user => user.email === email && user.password === password);
    if (user) {
      alert('Login Successful');
      // Redirect or perform further actions after successful login
      clearForm(loginForm);
      loginContainer.classList.remove('active');
      loginBtn.innerText = 'Logout'
    } else {
      alert('Invalid email or password');
      clearForm(loginForm);
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

async function signup(username, email, password, contact) {
  try {
    const response = await fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username,
        email,
        password,
        contact
      })
    });
    if (response.ok) {
      alert('Signup Successful please Login!');
      clearForm(signupForm)
      loginContainer.classList.add('active');
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

  
// Haresh section end





// Soumyadeep section


// Soumyadeep section end





// Adarsh section


// Adarsh section end