let lis = document.querySelectorAll(".home header .contaner ul li");
let lisArray =Array.from(lis);
lisArray.forEach(function(ele) {
  ele.addEventListener("click",function(e){
    lisArray.forEach(function(ele){
      ele.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
  });
});
document.addEventListener("scroll",function(){
    if (window.scrollY >= 0 && window.scrollY < 500) {
    lisArray.forEach(function(e){
      e.classList.remove("active");
    });
    lisArray[0].classList.add("active");
  }else if (window.scrollY >= 500 && window.scrollY < 1050) {
    lisArray.forEach(function(e){
      e.classList.remove("active")
    });
    lisArray[1].classList.add("active");
  }else if (window.scrollY >= 1050 && window.scrollY < 2250) {
    lisArray.forEach(function(e){
      e.classList.remove("active")
    });
    lisArray[2].classList.add("active");
  }else if (window.scrollY >= 2250 && window.scrollY < 3800) {
    lisArray.forEach(function(e){
      e.classList.remove("active")
    });
    lisArray[3].classList.add("active");
  }else if (window.scrollY >= 3800 && window.scrollY < 4750) {
    lisArray.forEach(function(e){
      e.classList.remove("active")
    });
    lisArray[4].classList.add("active");
  }else if (window.scrollY >= 4750 && window.scrollY < 6000) {
    lisArray.forEach(function(e){
      e.classList.remove("active")
    });
    lisArray[5].classList.add("active");
  }else if (window.scrollY >= 6000) {
    lisArray.forEach(function(e){
      e.classList.remove("active")
    });
    lisArray[6].classList.add("active");
  }
})
let icon = document.querySelector(".home header .contaner i");
let liMenu = document.querySelector(".home header .contaner ul");
document.addEventListener("click",function(e){
  if(e.target.classList.contains("fa-bars")) {
    icon.style.cssText="transform: rotate(-90deg);color: var(--secound-color);";
    liMenu.style.cssText="transform: rotateX(0deg);";
  } else {
    icon.style.cssText="transform: rotate(0deg);color:white;";
    liMenu.style.removeProperty("transform");
  };
});
let lisMenus = document.querySelectorAll(".portifolio .contaner .galare ul li");
let lisMenusArary =Array.from(lisMenus);
let card = document.querySelectorAll(".portifolio .contaner .galare .photos .photo");
let cardArary =Array.from(card);
lisMenusArary.forEach(function(ele){
  ele.addEventListener("click",function(e){
    lisMenusArary.forEach(function(event){
      event.classList.remove("active");
    });
    cardArary.forEach(function(ele){
      ele.style.cssText="display:none;"
    });
    e.currentTarget.classList.add("active");
    let value =document.querySelectorAll(e.currentTarget.dataset.choose);
    let valueArray = Array.from(value);
    valueArray.forEach(function(ele){
      ele.style.cssText="display:block;";
    });
  });
});
let icons = document.querySelectorAll(".portifolio .contaner .galare .photos .photo figure i");
let iconsArray =Array.from(icons);
let C = document.querySelectorAll(".portifolio .contaner .galare .cards .card");
let CArary = Array.from(C);
let BC = document.querySelector(".portifolio .contaner .galare .cards");
let cancel = document.querySelectorAll(".portifolio .contaner .galare .cards .card figcaption .data i");
let cancelArray =Array.from(cancel);
iconsArray.forEach(function(event){
  event.addEventListener("click",function(e){
    if (window.innerWidth <= 692) {
      BC.style.cssText="height: 610px;";
    }else {
      BC.style.cssText="height: 366px;";
    };
    CArary.forEach(function(e){
      e.style.display="none";
    });
    document.querySelector(e.target.dataset.icon).style.display="flex";
  });
});
document.addEventListener("click",function (e) {
  if (e.target.classList.contains("fa-xmark")) {
    BC.style.cssText="height:0px;";
  };
});

let btnUp =document. querySelector(".UP");
window.onscroll=function(){
  if (window.scrollY >= 300) {
    btnUp.style.opacity="1";
  }else {
    btnUp.style.opacity="0";
  };
}
btnUp.addEventListener("click",function(){
  window.scrollTo({
    top:0,
    left:0,
    behavior:"smooth"
  });
});

let bar = document.querySelectorAll(".About .contaner .info2 .skills .present .tringle .type");
let barArray =Array.from(bar);
console.log(barArray);
window.addEventListener("scroll",function(){
  if(window.scrollY >= 2820 && window.scrollY < 3500) {
    barArray[0].style.cssText="transition:0.5s; width:85%;";
    barArray[1].style.cssText="transition:0.5s; width:80%;";
    barArray[2].style.cssText="transition:0.5s; width:90%;";
    barArray[3].style.cssText="transition:0.5s; width:95%;";
  }else {
    barArray[0].style.cssText="transition:0.5s; width:0%;";
    barArray[1].style.cssText="transition:0.5s; width:0%;";
    barArray[2].style.cssText="transition:0.5s; width:0%;";
    barArray[3].style.cssText="transition:0.5s; width:0%;";
  };
  if (window.innerWidth <= 692){
    if(window.scrollY >= 6600 && window.scrollY < 7800) {
      barArray[0].style.cssText="transition:0.5s; width:85%;";
      barArray[1].style.cssText="transition:0.5s; width:80%;";
      barArray[2].style.cssText="transition:0.5s; width:90%;";
      barArray[3].style.cssText="transition:0.5s; width:95%;";
    }else {
      barArray[0].style.cssText="transition:0.5s; width:0%;";
      barArray[1].style.cssText="transition:0.5s; width:0%;";
      barArray[2].style.cssText="transition:0.5s; width:0%;";
      barArray[3].style.cssText="transition:0.5s; width:0%;";
    };
  }
});
// document.onresize=function(){
//   console.log(window.scrollX)
// }
