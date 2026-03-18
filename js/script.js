// Hamburger
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
hamburger.addEventListener('click', ()=>navLinks.classList.toggle('show'));

// Dark Mode
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', ()=>{
    document.body.classList.toggle('dark');
    themeToggle.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
});

// Typing effect
const typing = document.getElementById('typing');
const words = ['Cybersecurity Enthusiast', 'Penetration Tester', 'SOC Analyst'];
let i=0, j=0, currentWord='', isDeleting=false;
function type(){
    if(i>=words.length) i=0;
    currentWord = words[i];
    typing.textContent = currentWord.slice(0,j);
    if(!isDeleting && j<currentWord.length){j++; setTimeout(type,150);}
    else if(isDeleting && j>0){j--; setTimeout(type,100);}
    else {isDeleting=!isDeleting; if(!isDeleting){i++;} setTimeout(type,1000);}
}
type();

// Skills Animation
const skills = document.querySelectorAll('.progress div');
window.addEventListener('scroll', ()=>{
    const skillsTop = document.getElementById('skills').offsetTop;
    const scroll = window.scrollY + window.innerHeight;
    if(scroll > skillsTop){
        skills.forEach(skill=>skill.style.width = skill.dataset.width);
    }
});

// Lightbox
const lightbox = document.getElementById('lightbox-overlay');
const lightboxImg = document.getElementById('lightbox-img');
document.querySelectorAll('.lightbox-card img').forEach(img=>{
    img.addEventListener('click', ()=>{
        lightbox.style.display='flex';
        lightboxImg.src = img.src;
    });
});
document.querySelector('#lightbox-overlay .close').addEventListener('click', ()=>lightbox.style.display='none');

// Smooth scroll
document.querySelectorAll('.nav-links a').forEach(link=>{
    link.addEventListener('click', e=>{
        e.preventDefault();
        document.querySelector(link.getAttribute('href')).scrollIntoView({behavior:'smooth'});
    });
});
