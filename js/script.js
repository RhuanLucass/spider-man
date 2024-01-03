setTimeout(() => {
  document.body.style.pointerEvents = 'auto';
}, 5000);


// /*==================== POINTS ====================*/ 

const points = document.querySelectorAll('.space-point');
const stylePoints = document.querySelectorAll('.point');
const images = document.querySelectorAll('.img-slider');
let i = 0;

points.forEach((point, index) => point.addEventListener('click', () => {
  images.forEach(img => img.style.opacity = '0');
  stylePoints.forEach(point => point.classList.remove('active-point'));
  
  images[index].style.opacity = '1';
  stylePoints[index].classList.add('active-point');
}));

changeBackground();
setInterval(changeBackground, 8000);

function changeBackground(){
  images.forEach(img => img.style.opacity = '0');
  stylePoints.forEach(point => point.classList.remove('active-point'));
  
  images[i].style.opacity = '1';
  stylePoints[i].classList.add('active-point');

  i++;
  if(i===4) i=0;
}

// /*==================== GSAP ====================*/ 

gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {


  var tl1 = gsap.timeline();
    
  tl1
  .to('.screen-loading', {
    duration: 2,
    opacity: 0, 
    delay: 3,
    //filter: 'blur(10px)',
    //y: "-10%",
    ease: "power4.out",
  })
  .from(".bg-slider", {
    duration: 1, 
    opacity: 0, 
    stagger:{each: 0.1},
    ease: "power4.out",
  }, '-=1.0')
  .from("nav li", {
    duration: 2, 
    opacity: 0, 
    y: 400,
    stagger:{each: 0.2},
    ease: "back.out(1.7)",
  }, '-=0.5')
  .from(".div-animation", {
    duration: 2, 
    opacity: 0, 
    y: 200,
    stagger:{each: 0.2},
    ease: "back.out(1.7)",
  }, '-=1.7')
  .from(".slider-points .space-point", {
    duration: 2, 
    opacity: 0, 
    x: -200,
    stagger:{each: 0.2},
    ease: "back.out(1.7)",
  }, '-=1.7')
    
});

ScrollTrigger.addEventListener("scrollStart", () => {
  ScrollTrigger.refresh();
});