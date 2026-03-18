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

// Theme toggle
const themeToggle = document.querySelector('.theme-toggle i');
themeToggle.addEventListener('click', ()=>{
  document.body.classList.toggle('light');
  themeToggle.classList.toggle('fa-sun');
});

// Scroll animation + Lazy loading
const sections = document.querySelectorAll('section');
const lazyImages = document.querySelectorAll('.lazy');

function onScroll(){
  sections.forEach(section=>{
    const rect = section.getBoundingClientRect();
    if(rect.top < window.innerHeight-100){
      section.style.opacity = '1';
      section.style.transform = 'translateY(0)';
    }
  });
  lazyImages.forEach(img=>{
    const rect = img.getBoundingClientRect();
    if(rect.top < window.innerHeight){
      img.src = img.dataset.src;
      img.onload = ()=>img.style.opacity='1';
    }
  });
}
window.addEventListener('scroll', onScroll);
window.addEventListener('DOMContentLoaded', onScroll);

// Typing effect
const text = "Cybersecurity Expert | SOC Analyst | Penetration Tester";
let i=0, forward=true;
function typingEffect(){
  const el = document.getElementById("typing");
  if(forward){
    el.innerHTML += text.charAt(i); i++;
    if(i>=text.length) forward=false;
  } else{
    el.innerHTML = text.substring(0,i-1); i--;
    if(i<=0) forward=true;
  }
  setTimeout(typingEffect,50);
}
typingEffect();

// Skills animation
const skills = document.querySelectorAll('.progress div');
window.addEventListener('scroll', ()=>{
  const skillsSection = document.getElementById('skills');
  const rect = skillsSection.getBoundingClientRect();
  if(rect.top < window.innerHeight-100){
    skills.forEach(bar => bar.style.width = bar.dataset.width);
  }
});

// Carousel
const carouselInner = document.querySelector('.carousel-inner');
const items = document.querySelectorAll('.carousel-item');
let currentIndex = 0;
const prevBtn = document.querySelector('.carousel-btn.prev');
const nextBtn = document.querySelector('.carousel-btn.next');

function updateCarousel(){
  carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
}
prevBtn.addEventListener('click', ()=>{
  currentIndex = (currentIndex === 0) ? items.length-1 : currentIndex-1;
  updateCarousel();
});
nextBtn.addEventListener('click', ()=>{
  currentIndex = (currentIndex === items.length-1) ? 0 : currentIndex+1;
  updateCarousel();
});

// Lightbox
const lightboxCards = document.querySelectorAll('.lightbox-card img');
const lightboxOverlay = document.getElementById('lightbox-overlay');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxClose = document.querySelector('#lightbox-overlay .close');

lightboxCards.forEach(img=>{
  img.addEventListener('click', ()=>{
    lightboxOverlay.style.display = 'flex';
    lightboxImg.src = img.src;
  });
});
lightboxClose.addEventListener('click', ()=> lightboxOverlay.style.display='none');
lightboxOverlay.addEventListener('click', e=>{
  if(e.target===lightboxOverlay) lightboxOverlay.style.display='none';
});
