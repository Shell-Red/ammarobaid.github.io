// Scroll Animation
const sections = document.querySelectorAll('section');
function scrollAnimation(){
  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if(rect.top < window.innerHeight - 100){
      section.style.opacity = '1';
      section.style.transform = 'translateY(0)';
    }
  });
}
window.addEventListener('scroll', ()=>requestAnimationFrame(scrollAnimation));
window.addEventListener('DOMContentLoaded', scrollAnimation);

// Typing Effect Loop
const typingText = "Cybersecurity Expert | SOC Analyst | Penetration Tester";
let index=0, forward=true;
function typingLoop(){
  const el = document.getElementById("typing");
  if(forward){
    el.innerHTML += typingText.charAt(index);
    index++;
    if(index>=typingText.length) forward=false;
  }else{
    el.innerHTML = typingText.substring(0,index-1);
    index--;
    if(index<=0) forward=true;
  }
  setTimeout(typingLoop,50);
}
window.addEventListener('DOMContentLoaded', typingLoop);

// Hamburger toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
hamburger.addEventListener('click', ()=>navLinks.classList.toggle('show'));

// Theme toggle
const themeBtn = document.querySelector('.theme-toggle');
themeBtn.addEventListener('click', ()=>{
  document.body.classList.toggle('light-theme');
  themeBtn.innerHTML = document.body.classList.contains('light-theme') 
                        ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
});

// Carousel
const carouselInner = document.querySelector('.carousel-inner');
const items = document.querySelectorAll('.carousel-item');
let currentIndex=0;
document.querySelector('.carousel-btn.next').addEventListener('click', ()=>{
  currentIndex=(currentIndex+1)%items.length;
  carouselInner.style.transform=`translateX(-${currentIndex*100}%)`;
});
document.querySelector('.carousel-btn.prev').addEventListener('click', ()=>{
  currentIndex=(currentIndex-1+items.length)%items.length;
  carouselInner.style.transform=`translateX(-${currentIndex*100}%)`;
});

// Lightbox
const lightboxOverlay = document.getElementById('lightbox-overlay');
const lightboxImg = document.getElementById('lightbox-img');
document.querySelectorAll('.lightbox-card img').forEach(img=>{
  img.addEventListener('click', ()=>{
    lightboxOverlay.style.display='flex';
    lightboxImg.src = img.src;
  });
});
document.querySelector('#lightbox-overlay .close').addEventListener('click', ()=>lightboxOverlay.style.display='none');
lightboxOverlay.addEventListener('click', (e)=>{ if(e.target==lightboxOverlay) lightboxOverlay.style.display='none'; });

// Skills progress animation
window.addEventListener('scroll', ()=>{
  const skillsSection = document.getElementById('skills');
  const rect = skillsSection.getBoundingClientRect();
  if(rect.top<window.innerHeight-100){
    document.querySelectorAll('.progress div').forEach(bar=>bar.style.width=bar.style.width);
  }
});
