const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks=document.getElementsByClassName('navbar-links')[0]
const parallax= document.getElementById("div1")


toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})
// parallax pozadina

window.addEventListener('scroll', function(){
    let offset = window.scrollY;
    parallax.style.backgroundPositionY = offset*0.7+"px";

})

