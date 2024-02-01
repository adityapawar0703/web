var object = [
    {uersname: "..aditya" , dp:"https://media.licdn.com/dms/image/D4E03AQGYb8cmbQ5fww/profile-displayphoto-shrink_800_800/0/1699284138044?e=2147483647&v=beta&t=pmMrkX8SXW4rqZh2OyuVwRP6hFIZQeeu8Itaj8KIUxU",img: "https://media.istockphoto.com/id/917911572/photo/standing-woman-on-the-hill-against-mountain-valley-at-bright-sunny-day-landscape-with-girl.jpg?s=1024x1024&w=is&k=20&c=CdAO7r8O3xWGG_v3aqJCCEWwQTRG2PIvZqyZS0933T0="},
    {uersname: "..daksh" , dp:"https://media.licdn.com/dms/image/D4D03AQF307o1FIh3oQ/profile-displayphoto-shrink_800_800/0/1699347272776?e=2147483647&v=beta&t=nkqqPcYfwkhBqZi9DonqraeYOMF2-RZF5kysfm7kjOE", img: " https://cdn.pixabay.com/photo/2013/10/02/23/03/mountains-190055_640.jpg" },
    {uersname: "Tripathi.Aditya" , dp:"https://signature.freefire-name.com/img.php?f=2&t=A%20Tripathi", img: "https://cdn.pixabay.com/photo/2017/12/15/13/51/polynesia-3021072_640.jpg"},
    {uersname: "..vdoo" , dp:"https://media.licdn.com/dms/image/D5603AQHVQ2jLcib9TA/profile-displayphoto-shrink_800_800/0/1701948131559?e=2147483647&v=beta&t=0dXFYM5DoPHP_jxLHg-hJEhFircUgzrEg3sS5ZqIVaI" , img: "https://cdn.pixabay.com/photo/2016/10/22/17/46/mountains-1761292_640.jpg"},
    {uersname: "..hacker" , dp:"https://mastimorning.com/wp-content/uploads/2023/07/Attitude-Boy-black-whatsapp-dp-Images-Pics-fREE.jpg", img: "https://cdn.pixabay.com/photo/2013/10/09/02/27/lake-192990_640.jpg"},
    {uersname: "..kriti" , dp:"https://th.bing.com/th/id/OIP.kd1ErKZVuoPSSE25L-wYAAHaLH?rs=1&pid=ImgDetMain " , img: "https://cdn.pixabay.com/photo/2016/08/11/23/55/trees-1587301_640.jpg"},
    {uersname: "..aditya" , dp:"https://media.licdn.com/dms/image/D4E03AQGYb8cmbQ5fww/profile-displayphoto-shrink_800_800/0/1699284138044?e=2147483647&v=beta&t=pmMrkX8SXW4rqZh2OyuVwRP6hFIZQeeu8Itaj8KIUxU",img: "https://media.istockphoto.com/id/917911572/photo/standing-woman-on-the-hill-against-mountain-valley-at-bright-sunny-day-landscape-with-girl.jpg?s=1024x1024&w=is&k=20&c=CdAO7r8O3xWGG_v3aqJCCEWwQTRG2PIvZqyZS0933T0="},
    {uersname: "..vdoo" , dp:"https://media.licdn.com/dms/image/D5603AQHVQ2jLcib9TA/profile-displayphoto-shrink_800_800/0/1701948131559?e=2147483647&v=beta&t=0dXFYM5DoPHP_jxLHg-hJEhFircUgzrEg3sS5ZqIVaI" , img: "https://cdn.pixabay.com/photo/2016/10/22/17/46/mountains-1761292_640.jpg"},
]

var storybar= document.querySelector("#storybar")
   var clutter = ""

   object.forEach(function(elem, index){
    clutter+= `<div class="story">
    <img id=${index} src= ${elem.dp} alt= ""> 
    </div>`
   })

   var full = document.querySelector("#full")
   var h5 = document.querySelector("h5")
   var h6 = document.querySelector("h6")
   var userdp =document.querySelector("#user")
   

 storybar.innerHTML =clutter
 storybar.addEventListener("click",function(dets){
    console.log(object[dets.target.id].img)
    full.style.display = "block"
  full.style.backgroundImage = `url(${object[dets.target.id].img})`

//timepass 33-39 lines//
  var time = Math.floor(Math.random()*24)
  console.log(time)
  h5.innerHTML = `${object[dets.target.id].uersname}`
  h6.innerHTML = `${time + "hrs ago"}`
  userdp.style.backgroundImage = `url(${object[dets.target.id].dp})`


  setTimeout(function(){
   full.style.display = "none"
  },3000)
 })    

 