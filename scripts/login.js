function login(){
    
    let usersData = JSON.parse(localStorage.getItem("usersData"));

    let username = document.getElementById("username");
    let password = document.getElementById("password");
    if (username.value == "" || password.value == "") {
        alert("Missing Data");
    } 
    else {

                localStorage.setItem("userDetails", JSON.stringify(user));
                window.location.href = "./homePage.html";   
        }
}

