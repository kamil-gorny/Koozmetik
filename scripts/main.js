const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("hamburger-nav");


const handleClick = () =>{
    nav.classList.toggle("nav--active");
}

hamburger.addEventListener('click', handleClick);