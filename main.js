import './style.scss'

var cube = document.querySelector('.cube');
var top = document.querySelector('.top');
var bottom = document.querySelector('.bottom');
var left = document.querySelector('.left');
var right = document.querySelector('.right');
var front = document.querySelector('.front');
var back = document.querySelector('.back');
window.addEventListener('scroll', () => {
  var value = window.scrollY * 0.25;
	cube.style.transform = `rotateX(360deg) rotateZ(45deg) rotateY(-45deg) rotate(${value}deg)`; 
  top.style.background = `#fff`;
	top.style.transform = `rotateX(90deg) translateZ(calc(var(--size) * .5))`; 
  bottom.style.background = `#999`;
	bottom.style.transform = `rotateX(90deg) translateZ(calc(var(--size) * -.5))`; 
  left.style.background = `#ccc`;
	left.style.transform = `rotateY(90deg) translateZ(calc(var(--size) * .5))`; 
  right.style.background = `#ddd`;
	right.style.transform = `rotateY(90deg) translateZ(calc(var(--size) * -.5))`; 
  front.style.background = `#aaa`;
	front.style.transform = `translateZ(calc(var(--size) * .5))`; 
  back.style.background = `#bbb`;
	back.style.transform = `translateZ(calc(var(--size) * -.5))`; 
}, false);

const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
});

function raf(time) {
  lenis.raf(time);
  ScrollTrigger.update();
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);




