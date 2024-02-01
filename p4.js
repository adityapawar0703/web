var btn = document.querySelector("button")
var stats = document.querySelector("h2")


var flag = 0
btn.addEventListener("click", function () {
    if (flag == 0) {
        btn.innerHTML = "unsend"
        stats.innerHTML = "sending request"
        stats.style.color = "rgb(163, 128, 128)"
        var a = Math.floor(Math.random() * 2000)
        setTimeout(function () {
            stats.innerHTML = "Freinds"
            stats.style.color = "green"
            btn.innerHTML = "Remove Freind"
            btn.style.backgroundColor = "rgb(69, 69, 194"
        }, a)
        flag = 1;

    }else{
        btn.innerHTML = "Add Friend"
        stats.innerHTML = "Stranger"
        stats.style.color ="rgb(228, 73, 11)"
        btn.style.backgroundColor = "rgb(69, 69, 194"
        flag=0
    }
})

var cursor = document.querySelector("#cursor")
document.addEventListener("mousemove",function(dets){
    cursor.style.top = dets.y + "px"
cursor.style.left = dets.x + "px"
})


