var userName = document.getElementById("txt")
var userAge = document.getElementById("age")
var userGender = document.querySelectorAll('[name="gender"]')
var userColor = document.querySelector("select")

var displayInfo = document.querySelector("[type='button']")

var nam, age, gend, color

displayInfo.addEventListener("click", displayFun)

function displayFun(){
    if(userName.value.trim() != ""){
        nam = userName.value.trim()
        if(userAge.value.trim() != "" && userAge.value.trim() > 10){
            age = userAge.value.trim()
            
            color = userColor.value
            console.log(color)
            document.cookie="username=" + nam + ";expiers=23-5-2022";
            document.cookie="userage=" + age + ";expiers=23-5-2022";
            document.cookie="gender=" + gend + ";expiers=23-5-2022";
            document.cookie="color=" + color + ";expiers=23-5-2022";
            window.open("data.html","_self")
        } else {
            alert("please enter your age , should be more than 10")
        }
    } else {
        alert("please enter your name")
    }
}


for (var i = 0; i < userGender.length; i++) {
    // console.log(userGender[i].value)
    userGender[i].addEventListener("change", function (e){
        console.log( e.target.value)
        gend= e.target.value
    })
}





