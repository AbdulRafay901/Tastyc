
const menu = document.querySelector("#menu");
const links = document.querySelector(".links");
const navbar = document.querySelector(".navbar-content");
const cross = document.querySelector("#cross");
const navbar_absolute = document.querySelector(".navbar-absolute"); 

menu.addEventListener("click", (() => {
     links.classList.add("links-js");
     setTimeout(() => {
          cross.classList.add("cross-js");
     },5);
     setTimeout(() => {
        cross.classList.add("cros-animation")
     },15);
     menu.classList.add("menu-js")
}))

cross.addEventListener("click", (() => {
    links.classList.remove("links-js");
    cross.classList.remove("cross-js");
    cross.classList.remove("cros-animation")
    menu.classList.remove("menu-js")
}))

window.addEventListener("scroll", (() => {
    if(window.scrollY > 40){
       navbar.classList.add("navbar-content-js");
       navbar_absolute.classList.add("navbar-absolute-js");
    }
    else{
        navbar.classList.remove("navbar-content-js");
        navbar_absolute.classList.remove("navbar-absolute-js");
    }
}))
             
             
             // Slide 2           Start

    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 3,
      spaceBetween: 30,
      loop: true, 
      speed: 800,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
       breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        
        992: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      },
    });

    // Slide 2           End


    // Footer Slider     Start

    var swiper = new Swiper(".mySwiper2", {
      slidesPerView: 4,
      spaceBetween: 0,
      loop: true, 
      speed: 1000,
      // pagination: {
      //   el: ".swiper-pagination",
      //   clickable: true,
      // },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
       breakpoints: {
        767: {
          slidesPerView: 3,
          spaceBetween: 0,
        },
        
        1024: {
          slidesPerView: 4,
          spaceBetween: 0,
        },
      },
    });

    // 

     const back_to_top = document.querySelector(".last-text button");
    
    back_to_top.addEventListener("click", (() => {
       window.scrollTo({
         top: 0,
         behavior: "smooth"
       })
    }))

    




gsap.registerPlugin(ScrollTrigger);

document.querySelectorAll(".counter").forEach(counter => {
  const target = +counter.dataset.count;
  const suffix = counter.dataset.suffix || "";

  gsap.fromTo(counter,
    { innerText: 0 },
    {
      innerText: target,
      duration: 2,
      ease: "power1.out",
      snap: { innerText: 1 },
      scrollTrigger: {
        trigger: counter,
        start: "top 80%",
        once: true
      },
      onUpdate() {
            counter.innerHTML =
          `${Math.round(counter.textContent)} <span>${suffix}</span>`;
      
      }
    }
  );
});

AOS.init();




  


    