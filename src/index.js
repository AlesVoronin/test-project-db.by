import './styles/index.scss';
import './assets/fonts/Roboto-Regular.ttf';
import './component.js';

const burger_button = document.querySelector(".burger-menu");
const mobile_menu = document.querySelector(".mobile-navbar-container")
//const navigation_menu = document.getElementsByClassName("navigation_menu");



function burger_active(){
  if(mobile_menu.classList.contains("mobile-navbar-container_act") == true){
    mobile_menu.classList.remove("mobile-navbar-container_act");
  }
  else{
    mobile_menu.classList.add("mobile-navbar-container_act");
  }
}


burger_button.addEventListener("mousedown", burger_active);

