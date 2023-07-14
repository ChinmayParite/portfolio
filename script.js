        // Toggle icon navbar
//let menuIcon = document.querySelector('#menu-icon');
//let navbar = document.querySelector('.navbar');

//menuIcon.onclick = () => {
  // menuIcon.classList.toggle('bx-x');
   //navbar.classList.toggle('active');
//};


function openNewTab() {
      window.open("https://a360.co/3IB66C", "_blank");
      window.open("https://death-rider2468.github.io/DT_Project/", "_flank");
      window.open("http://localhost:8888/notebooks/AI_1/AI_PRO.ipynb", "_spank");
    }


// Scroll sections active link
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.addEventListener('scroll', () => {
   let currentSection = '';

   sections.forEach((section) => {
       const sectionTop = section.offsetTop - 150;
       const sectionHeight = section.offsetHeight;
       if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
           currentSection = section.getAttribute('id');
       }
   });

   navlinks.forEach((navlink) => {
       navlink.classList.remove('active');
       if (navlink.getAttribute('href').slice(1) === currentSection) {
           navlink.classList.add('active');
       }
   });
   

   // Sticky navbar
   let header = document.querySelector('header');
   header.classList.toggle('sticky', window.scrollY > 100);
});
