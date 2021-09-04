var userInfoArr = document.cookie.split(";")
// (4) ["name=aa", "age=22", "gender=m", "color=red"]

var image = document.querySelector("img")
var userNam
var color

for (var i = 0; i < userInfoArr.length; i++) {
    var info = userInfoArr[i].split("=")
    console.log(info)
    if(info[0].toLowerCase().trim()== "gender"){
        if(info[1]== "m"){
            image.src="man.png";
        }else{
            image.src="woman.png"   
        }
    }
    if(info[0].toLowerCase().trim() == "color"){
        color = info[1]
    }
    if(info[0].toLowerCase() == "username"){
        userNam = info[1]
    }

}

var pe = document.getElementById("pe")

pe.innerHTML = "hello " +"<span>"+ userNam+"</span>"  + " you are here";

var span =document.querySelector("span")
span.style.color = color;
span.style.fontWeight = "bold"


