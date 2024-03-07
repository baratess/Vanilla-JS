const formAction = document.getElementById("form");

formAction.addEventListener("submit", (e) => {
    e.preventDefault();
    var userID = document.getElementById("id").value;
    var p4ssword = document.getElementById("password").value;
    console.log(userID);

    if (isRegistered(userID, p4ssword)) {
         window.location.href = "bankAcc.html";
    } else {
        alert("Please register first.");
    }
});

function isRegistered(userID, p4ssword) {
    var storedPassword = JSON.parse(localStorage.getItem(userID));
    console.log(storedPassword);
    var p1ssword = storedPassword.password;
    console.log(p1ssword);
    if (p1ssword === p4ssword && p1ssword !== null) {
        return true;
    } else {
        return false;
    }
}

