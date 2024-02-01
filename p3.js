var a = Math.random()*10
var b = Math.floor(a)

console.log(b)
var box = document.querySelector("#box")





var btn = document.querySelector("button")

btn.addEventListener("click", function(){
   
        var a = Math.floor((Math.random()*255))
        var b = Math.floor((Math.random()*255))
        var c = Math.floor((Math.random()*255))
  
          box.style.backgroundColor = `rgb(${a}, ${b}, ${c})`
    console.log(a, b ,c)
      })

 var box2 = document.querySelector("#box2")
 box2.addEventListener("dblclick",function(){

 })    
 //it it a time dealy function;
 setTimeout(function(){
    console.log("hello")
 }, 4000);




