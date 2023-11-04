
//for menu and close button**********************
const menu = document.getElementById('menu-bar')
const nav= document.getElementById('navbar')
const close= document.getElementById('close')

if(nav){
  menu.addEventListener('click',()=>{
    nav.classList.add('act');
  })
}

if(close){
  close.addEventListener('click',()=>{
    nav.classList.remove('act');
  })
}
window.onscroll = () => {
  nav.classList.remove('act')
}


//for owl carousel***************************************
$(document).ready(function () {
  var owl = $('.owl-carousel');
  owl.owlCarousel({
    items: 4,
    dots: false,
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
    //   nav: true,
    navText: [$('.owl-nav .owl-nav-prev'), $('.owl-nav .owl-nav-next')],
    //   navText: [$('.owl-nav .owl-nav-prev'), $('.owl-nav2.owl-nav2-next')],

  });
});



const header = document.querySelector("header")
window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 80);
})

const sr = ScrollReveal(
  {
    origin: 'top',
    distance: '85px',
    duration: 2500,
    reset: true
  }
)
