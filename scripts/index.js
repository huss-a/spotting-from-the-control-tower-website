const tl = gsap.timeline({ defaults: { ease: 'power1.out' } });

tl.to('.text', {y: '0%', duration: 1, stagger: 0.2, delay: 0.4});

tl.to('.slider', {x: '-100%', duration: 1.4, delay: 0.4});

tl.to('.intro', {y: '-100%', duration: 1}, '-=1')

const dom = document

// Toggle nav
const navSlide = () => {
    const burger = dom.querySelector('.burger');
    const nav = dom.querySelector('.nav-links');
    const navLi = dom.querySelectorAll('.nav-links li');
    burger.addEventListener('click', () => {
        nav.classList.toggle('burger-nav-active');
        // animate links
        navLi.forEach((link, index) => {
            if(link.style.animation) {
                link.style.animation = ''
            }
            else{
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`
            };
        });
    });
};




navSlide();