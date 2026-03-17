const sections = document.querySelectorAll('section');
window.addEventListener('scroll', () => {
  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if(rect.top < window.innerHeight - 100){
      section.style.opacity = 1;
      section.style.transform = 'translateY(0)';
      section.style.transition = 'all 0.8s ease-out';
    } else {
      section.style.opacity = 0;
      section.style.transform = 'translateY(50px)';
    }
  });
});
