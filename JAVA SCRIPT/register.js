const formAction = document.getElementById("form"); 

formAction.addEventListener("submit" , (e)=>{
    e.preventDefault();
    var name = document.getElementById("username");
    var ID = document.getElementById("id");
    var phoneNumber = document.getElementById("pNumber");
    var passwd = document.getElementById("password");
    
    checkLength(name,passwd,ID,phoneNumber);
})

function checkLength(name,passwd,ID,phoneNumber)
{
    
    function capitalize(str) 
    {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    var nameUpper = name.value;
    var UpperName = nameUpper.split(" ")
        .map(capitalize)
        .join(" ");

    var values = {
        "name": UpperName,
        "phoneNumber": phoneNumber.value,
        "password": passwd.value
    };
    if (name.value.length < 5 || passwd.value.length < 6)
    {
        alert("Username or Password is too short");
    }
    else if (name.value.length > 15 || passwd.value.length > 15)
    {
        alert("Username or Password is too long");
    }
    
    else
    {
        if(ID.value.length!=11 || phoneNumber.value.length != 11){
            alert("Your ID and Phone Number's Lenght Must Be Equal 11");
        }
        else if (localStorage.hasOwnProperty(ID.value)){
            alert("This ID is being used");
        }
        else{
            var jsonValues = JSON.stringify(values);
            localStorage.setItem(ID.value, jsonValues);
            alert("Registration Successful :)");
            setTimeout(()=>window.location.href ="login.html",900);
        }
    }
}

