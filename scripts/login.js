let underHint = document.getElementById('underHint')


function login(){
    
    let usersData = JSON.parse(localStorage.getItem("usersData"));

    let username = document.getElementById("username");
    let password = document.getElementById("password");
    if (username.value == "" || password.value == "") {
        underHint.innerHTML = "Incorrect Data, Please try again!";
        clearHint()
    } 
    else if (username.value==usersData.username && password.value==usersData.password)
    {

                localStorage.setItem("userDetails", JSON.stringify(usersData));
                window.location.href = "./homePage.html";   
    }
}


async function clearHint(){
    await delay(3000)
    underHint.innerHTML = ''
}

function delay(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}
