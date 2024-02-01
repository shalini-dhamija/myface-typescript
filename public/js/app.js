document.addEventListener("DOMContentLoaded", function () {
  //Change color of list items in Post List
if(document.URL.endsWith('/posts')){
   const btnChangeColor = document.getElementById("btnChangeColor");
   btnChangeColor.addEventListener("click", function() {
     const listElements = document.getElementsByClassName('parent');        
     for(let i=1; i<listElements.length; i++){
       listElements[i].style.backgroundColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
     } 
});
}

//Hide/Show the menu 
const btnMenu = document.getElementById("btnMenu");
btnMenu.addEventListener("click", function() {
    const navigationBar = document.getElementsByClassName('topNav'); 
    
    if(navigationBar[0].classList.contains('hideMenu')){
      navigationBar[0].classList.remove('hideMenu')
      navigationBar[0].classList.add('showMenu')
      btnMenu.innerText = 'Hide Menu'
    }
    else if(navigationBar[0].classList.contains('showMenu')){
      navigationBar[0].classList.remove('showMenu');
      navigationBar[0].classList.add('hideMenu')
      btnMenu.innerText = 'Show Menu'
    }
});

});
