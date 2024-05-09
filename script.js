// Kranti section

// Kranti section end

//Haresh section

const loginBtn = document.getElementById("loginBtn");

const isLogin = JSON.parse(localStorage.getItem("key"));
console.log(isLogin);

if(isLogin){
    loginBtn.innerText = "Logout";
    loginBtn.addEventListener("click",localStorage.setItem("key",false));
}else{
    loginBtn.innerText = "Login";
}



// Haresh section end

// Soumyadeep section

// Soumyadeep section end

// Adarsh section

// Adarsh section end
