const burger = document.querySelector('.humb');
const headerNav = document.querySelector('.header__nav');
const headerHover = document.querySelector('.header');

function openMenu(){
   let nav = burger.classList.toggle('active');
    headerNav.classList.toggle('active');
    if(nav){
        document.body.style.overflow = 'hidden';
        headerHover.style.opacity = 1;
    }if(!nav){
        document.body.style.overflow = 'auto';
        headerHover.style.opacity = 0.7;
    }
}
const screenWidth = window.screen.width

function openContext(){
    burger.classList.toggle('active');

}
burger.addEventListener('click', openMenu);

const mySwiper = new Swiper('.swiper', {
    effect: 'cards',
    grabCursor: true,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
})




