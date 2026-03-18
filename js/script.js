/* ================= NAVBAR SHRINK ================= */
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('shrink', window.scrollY > 50);
});


/* ================= HAMBURGER ================= */
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});


/* ================= THEME TOGGLE ================= */
const themeIcon = document.querySelector('.theme-toggle i');

themeIcon.addEventListener('click', () => {
  document.body.classList.toggle('light');
  themeIcon.classList.toggle('fa-sun');
});


/* ================= SCROLL ANIMATION ================= */
const sections = document.querySelectorAll('section');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.2 });

sections.forEach(section => {
  sectionObserver.observe(section);
});


/* ================= LAZY LOADING ================= */
const lazyImages = document.querySelectorAll('.lazy');

const imageObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target;
      img.src = img.dataset.src;

      img.onload = () => {
        img.style.opacity = '1';
      };

      observer.unobserve(img);
    }
  });
});

lazyImages.forEach(img => imageObserver.observe(img));


/* ================= TYPING EFFECT (PRO) ================= */
const typingText = [
  "Cybersecurity Expert",
  "SOC Analyst",
  "Penetration Tester"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typingEl = document.getElementById("typing");

function typeEffect() {
  const currentWord = typingText[wordIndex];

  if (isDeleting) {
    charIndex--;
  } else {
    charIndex++;
  }

  typingEl.textContent = currentWord.substring(0, charIndex);

  let speed = isDeleting ? 40 : 70;

  if (!isDeleting && charIndex === currentWord.length) {
    speed = 1200;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % typingText.length;
    speed = 300;
  }

  setTimeout(typeEffect, speed);
}

typeEffect();


/* ================= SKILLS ANIMATION ================= */
const skillsSection = document.getElementById('skills');
const skillBars = document.querySelectorAll('.progress div');

const skillsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      skillBars.forEach(bar => {
        bar.style.width = bar.dataset.width;
      });
    }
  });
}, { threshold: 0.3 });

skillsObserver.observe(skillsSection);


/* ================= LIGHTBOX ================= */
const lightboxCards = document.querySelectorAll('.lightbox-card img');
const lightboxOverlay = document.getElementById('lightbox-overlay');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxClose = document.querySelector('#lightbox-overlay .close');

lightboxCards.forEach(img => {
  img.addEventListener('click', () => {
    lightboxOverlay.style.display = 'flex';
    lightboxImg.src = img.src;
  });
});

lightboxClose.addEventListener('click', () => {
  lightboxOverlay.style.display = 'none';
});

lightboxOverlay.addEventListener('click', (e) => {
  if (e.target === lightboxOverlay) {
    lightboxOverlay.style.display = 'none';
  }
});
