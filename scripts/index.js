const tl = gsap.timeline({ defaults: { ease: 'power1.out' } });

tl.to('.text', {y: '0%', duration: 1, stagger: 0.2, delay: 0.4});

tl.to('.slider', {x: '-100%', duration: 1.4, delay: 0.4});

tl.to('.intro', {y: '-100%', duration: 1}, '-=1')