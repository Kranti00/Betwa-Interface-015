// Kranti section

// Kranti section end

//Haresh section

// script.js

const loginBtn = document.getElementById("loginBtn");
let isLogin = JSON.parse(localStorage.getItem("key"));

if (isLogin) {
    loginBtn.innerText = "Logout";
}

loginBtn.addEventListener('click', () => {
    if (isLogin) {
        // Perform logout actions here 
        updateLoginStatus();
    } else {
        // Perform login actions here
        window.location.href = 'login.html';
    }
});

function updateLoginStatus() {
    isLogin = !isLogin;
    loginBtn.innerText = isLogin ? "Logout" : "Login";
    localStorage.setItem("key", isLogin);
}




// Haresh section end

// Soumyadeep section

// Soumyadeep section end

// Adarsh section

// Adarsh section end
