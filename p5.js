var btn = document.querySelector("button")
var perc = document.querySelector("h2")
var prog = document.querySelector("#prog")
var grow=0
btn.addEventListener("click",function(){
    setInterval(function(){
        if(grow<=100){
         perc.innerHTML = grow +"%"
         prog.style.width = `${grow}%`
        grow++
        }
    },10);
  
   
})

