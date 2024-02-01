var img1 = document.querySelector("#img1")
var img2 = document.querySelector("#img2")

var btn = document.querySelector("button")

 btn.addEventListener("click",function(){
    var i1 = img1.getAttribute("src")
    var i2 = img2.getAttribute("src")
    img2.setAttribute("src",i1)
    img1.setAttribute("src",i2)
 })
