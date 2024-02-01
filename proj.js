var cover = document.querySelector("#cover")
 var page = document.querySelector("#page")



var menu =document.querySelector("h6")

menu.addEventListener("click",function(){
   cover.style.top = "0%";
   menu.innerHTML = '<i class="ri-close-fill"></i>'
   
})
