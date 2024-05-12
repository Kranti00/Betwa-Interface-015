const signupForm = document.getElementById('signupForm');
const loginLink = document.getElementById('loginLink');
const backbtn = document.getElementById('signup_back_btn');

signupForm.addEventListener('submit', async function (e) {
    e.preventDefault();
    const username = document.getElementById('signupUsername').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    const contact = document.getElementById('signupContact').value;
    await signup(username, email, password, contact);
    window.location.href = "login.html";
});

loginLink.addEventListener('click', function (e) {
    e.preventDefault();
    window.location.href = "login.html";
});

backbtn.addEventListener("click", function () {
    window.location.href = 'index.html';
});

async function signup(username, email, password, contact) {
    try {
        const CartArray = [];
        const response = await fetch('https://betwa-interface-015.onrender.com/users', {
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
            alert('Signup Successful. Please Login!');
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
