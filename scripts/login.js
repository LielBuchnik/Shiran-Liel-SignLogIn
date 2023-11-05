function login(){
    
    let usersData = JSON.parse(localStorage.getItem("usersData"));

    let username = document.getElementById("username");
    let password = document.getElementById("password");
    if (username.value == "" || password.value == "") {
        alert("Missing Data");
    } 
    else if (username.value==usersData.username && password.value==usersData.password)
    {

                localStorage.setItem("userDetails", JSON.stringify(usersData));
                window.location.href = "./homePage.html";   
    }
}

