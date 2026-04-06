$(document).ready(function(){

  // mobile menu
  $(".menu-toggle").click(function(){
    $(".nav").toggle();
  });

  // scroll animation
  $(window).scroll(function(){
    $(".fade-up").each(function(){
      if($(window).scrollTop()+600 > $(this).offset().top){
        $(this).addClass("show");
      }
    });
  });

});

// ===== SCROLL ANIMATION =====
const elements = document.querySelectorAll('.fade-up');

window.addEventListener('scroll', () => {
  const trigger = window.innerHeight * 0.85;

  elements.forEach(el => {
    const top = el.getBoundingClientRect().top;

    if (top < trigger) {
      el.classList.add('show');
    }
  });
});


// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));

    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});


// ===== HEADER SCROLL EFFECT =====
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.style.background = "rgba(0,0,0,0.7)";
    header.style.backdropFilter = "blur(10px)";
  } else {
    header.style.background = "transparent";
  }
});


// ===== HOVER PARALLAX CARD =====
const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.transform = `
      rotateY(${(x - rect.width/2)/20}deg)
      rotateX(${-(y - rect.height/2)/20}deg)
    `;
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'rotate(0)';
  });
});