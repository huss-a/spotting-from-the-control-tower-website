const dom = document;

const animation = () => {
  let animBool = sessionStorage.getItem("animation");
  if (!animBool) {
    const tl = gsap.timeline({ defaults: { ease: "power1.out" } });
    tl.to(".text", { y: "0%", duration: 0.5, stagger: 0.2, delay: 0.1 });

    tl.to(".slider", { x: "-100%", duration: 0.9, delay: 0.4 });

    tl.to(".intro", { y: "-100%", duration: 1 }, "-=1");
    sessionStorage.setItem("animation", true);
  } else {
    try {
      dom.querySelector(".slider").style.transform = "translateX(-100%)";
      dom.querySelector(".intro").style.transform = "translateY(-100%)";
    } catch (err) {
      console.log("");
    }
  }
};

// Toggle nav
const navSlide = () => {
  const burger = dom.querySelector(".burger");
  const burgerDivs = dom.querySelectorAll(".burger div");
  const nav = dom.querySelector(".nav-links");
  const navLi = dom.querySelectorAll(".nav-links li");
  burger.addEventListener("click", () => {
    burgerDivs.forEach((div) => {
      if (div.style.animation) div.style.animation = "";
      else {
        div.style.animation = "burger-animation ease 0.3s";
      };
    });
    nav.classList.toggle("burger-nav-active");
    // animate links
    navLi.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.3
        }s`;
      }
    });
  });
};

const loadBlogs = () => {
  fetch("../data.json")
    .then((res) => res.json())
    .then((data) =>
      /*console.log(data.blogs)*/ data.blogs.reverse().forEach((blog) => {
        const blogsHTML = document.querySelector(".blog-grid");
        blogsHTML.innerHTML += `<a href="${blog.url}" target="_blank"><img src="${blog.imgUrl}" alt="Edition ${blog.id}"></a>`;
      })
    );
};

const app = () => {
  animation();
  navSlide();
  loadBlogs();
};

app();
