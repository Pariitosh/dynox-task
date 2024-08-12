import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

gsap.from('.heading', {opacity:0,y:100, duration: 1 });
const circle = document.querySelector('.circle');

// First animation (video wrapper)
gsap.to('.video-wrapper', {
  scrollTrigger: {
    trigger: '.page1',
    pin: true,
    start: 'top top',
    end: '+=100%',
    scrub: 1,
  },
  width: "100vw",
  height: "100vh",
  duration: 1,
  ease: "none",
  onComplete:()=>vidFinsihed()
});

// Second page animation (pin and image rows)
// Pin and animate page 2
let tl = gsap.timeline({
  scrollTrigger: {
    trigger: '.page2',
    pin: true,
    start: 'top top',
    end: '+=300%', // Adjust based on how many animations you have
    scrub: 1,
  }
});

// Image row animations start together
tl.to('.name', {
  opacity:1,
  y: "-100%",
  duration: 10
});
tl.to('.name', {
  opacity:0,
  y: "-100%",
  duration: 10
});

tl.to('.image-row1', {
  x: '-260%',
  duration: 30
}, 'imageRows');

tl.to('.image-row2', {
  x: '260%',
  duration: 30
}, 'imageRows'); // Same label as image-row1

// Fourth animation (new)
tl.to('.name2', {
  opacity:1,
  y: "-100%",
  duration:10
});
tl.to('.name2', {
  opacity:0,
  y: "-100%",
  duration:50
});
tl.to('.cities-list',{
  y:'-80%',
  scale:0.7,
  duration:50,
  transform: "matrix3d(0.3, 0, 0, 0, 0, 0.3, 0, 0, 0, 0, 0.3, 0, 0, -1487, 0, 0.1)", // Scale down and move away  y:100,

})

