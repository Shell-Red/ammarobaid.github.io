// ==================== Scroll Animation ====================
const sections = document.querySelectorAll('section');

function scrollAnimation() {
  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      section.style.opacity = '1';
      section.style.transform = 'translateY(0)';
    }
  });
}
window.addEventListener('scroll', () => {
  requestAnimationFrame(scrollAnimation);
});
window.addEventListener('DOMContentLoaded', scrollAnimation);

// ==================== Typing Effect ====================
const typingText = "Cybersecurity Expert | SOC Analyst | Penetration Tester";
let index = 0;

function typingEffect() {
  if (index < typingText.length) {
    document.getElementById("typing").innerHTML += typingText.charAt(index);
    index++;
    setTimeout(typingEffect, 50);
  }
}
window.addEventListener('DOMContentLoaded', typingEffect);

// ==================== Hamburger Toggle ====================
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});
