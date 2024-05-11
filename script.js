// Kranti section
let poplocation = document.getElementById("kpopuplocation");
let locationdiv = document.getElementById("kjs_location");
let crossmark = document.getElementById("kjs_xmark");


locationdiv.addEventListener("click", function(){
    poplocation.style.display = "block";
    poplocation.style.backgroundColor = "white";
})

crossmark.addEventListener("click", function(){
    poplocation.style.display = "none";
})

let paan=document.getElementById("")
// Kranti section end

//Haresh section

// script.js

const loginBtn = document.getElementById("login_h");
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




