var img = document.querySelector("img")
var btn = document.querySelector("button")

btn.addEventListener("click", function(){
    var a = Math.floor(Math.random()*100)
    var b = Math.floor(Math.random()*100)
    var c = Math.floor(Math.random()*360)
    img.style.top = a+"%"
    img.style.left = b+"%"
    img.style.rotate = c + "deg"
    console.log(a,b,c)
    
})