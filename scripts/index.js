const dom = document

const animation =  () => {
    let animBool = sessionStorage.getItem('animation');
    if(!animBool)
    {
        const tl = gsap.timeline({ defaults: { ease: 'power1.out' } });
        tl.to('.text', {y: '0%', duration: 0.5, stagger: 0.2, delay: 0.1});

        tl.to('.slider', {x: '-100%', duration: 0.9, delay: 0.4});

        tl.to('.intro', {y: '-100%', duration: 1}, '-=1')
        sessionStorage.setItem('animation', true);
    }
    else {
        try{
            dom.querySelector('.slider').style.transform = 'translateX(-100%)';
            dom.querySelector('.intro').style.transform = 'translateY(-100%)';
        }
        catch(err) {
            console.log('');
        };
    };
}
animation();


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