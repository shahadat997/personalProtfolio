 /*==========================toggle icon navbar =========================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar')

menuIcon.onclick = () => {
menuIcon.classList.toggle('bx-x');
navbar.classList.toggle('active');
};






 /*==========================scrill sections avtive link =========================*/

let sections = socument. querySelectorall('section');
let navLinks = socument. querySelectorall('header nav a');


Window.onscroll = () => {
   sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offdetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height){
        navLinks.forEach(links => {
            links.classList.remove('active');
            document.querySelectir('header nav a[href*=' + id + ']').classList.add('active');
        });
    };
   });
   /*==========================sticry navbar =========================*/
   let header = document.querySelector('header');

   header.classList.toggle('sticky', window.scrollY > 100);

    /*========================== remove toggle icon and navbar when click navbar link (scroll) =========================*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');


};