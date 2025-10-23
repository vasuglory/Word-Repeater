const menuIcon = document.getElementById("menu-icon");
const menuDisplay = document.getElementById("navbar");
menuIcon.addEventListener("click",()=>{
  console.log("menu clicked");
  menuDisplay.classList.toggle("display-visible");
})