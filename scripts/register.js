let underHint = document.getElementById('underHint')

function userSubmition(username, password, confirmPass, email) {

    let personObj = {
        username: username,
        password: password,
        confirmPass: confirmPass,
        email: email,
    }

    if (!password || !username) {
        underHint.innerHTML = "YOU FORGOT TO FILL SOME INPUTS!";
        clearHint()
        localStorage.clear();
        return false;
    } else
     if (password !== confirmPass) {
        underHint.innerHTML = "Passwords do not match.";
        clearHint()
        localStorage.clear();
        return false;
    }else 
    {
        localStorage.setItem("usersData", JSON.stringify(personObj));
        window.location.href = ("../pages/login.html");
    }
}

async function clearHint(){
    await delay(3000)
    underHint.innerHTML = ''
}

function delay(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}