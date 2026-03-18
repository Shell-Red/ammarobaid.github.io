// Navbar shrink
window.addEventListener('scroll', ()=>{
  const navbar = document.querySelector('.navbar');
  if(window.scrollY > 50) navbar.classList.add('shrink');
  else navbar.classList.remove('shrink');
});

// Hamburger toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
hamburger.addEventListener('click', ()=>navLinks.classList.toggle('show'));
