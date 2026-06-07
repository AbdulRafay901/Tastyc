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

const slides = document.querySelectorAll(".slide");
const paginationContainer = document.querySelector(".pagination");
let current = 0;


slides.forEach((slide, i) => {
  const bullet = document.createElement("div");
  bullet.classList.add("pagination-bullet");
  if(i === 0) bullet.classList.add("active");
  bullet.addEventListener("click", () => goToSlide(i));
  paginationContainer.appendChild(bullet);
});

function updatePagination() {
  document.querySelectorAll(".pagination-bullet").forEach((b, i) => {
    b.classList.toggle("active", i === current);
  });
}

function goToSlide(index) {
  if(index === current) return;
  const direction = index > current ? 1 : -1; 

  gsap.to(slides[current], {
    opacity: 0,
    y: direction * -100, 
    duration: 0.8,
    ease: "power2.inOut"
  });


  gsap.fromTo(slides[index], 
    { opacity: 0, y: direction * 100 }, 
    { opacity: 1, y: 0, duration: 0.8, ease: "power2.inOut" }
  );

  current = index;
  updatePagination();
}

function nextSlide() {
  goToSlide((current + 1) % slides.length);
}

function prevSlide() {
  goToSlide((current - 1 + slides.length) % slides.length);
}


let startX = 0;
const slider = document.querySelector(".slider-container");

slider.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
});

slider.addEventListener("touchend", (e) => {
  const endX = e.changedTouches[0].clientX;
  if (startX - endX > 40) {
    nextSlide(); 
  } else if (endX - startX > 40) {
    prevSlide();
  }
});


let isDragging = false;
let dragStartX = 0;

slider.addEventListener("mousedown", (e) => {
  isDragging = true;
  dragStartX = e.clientX;
});

slider.addEventListener("mouseup", (e) => {
  if(!isDragging) return;
  const dragEndX = e.clientX;
  if (dragStartX - dragEndX > 40) nextSlide();
  else if (dragEndX - dragStartX > 40) prevSlide();
  isDragging = false;
});


setInterval(() => {
    nextSlide(); 
}, 5000);


const prevBtn = document.querySelector(".prev-slide");
const nextBtn = document.querySelector(".next-slide");


prevBtn.addEventListener("click", () => {
    prevSlide();
});

nextBtn.addEventListener("click", () => {
    nextSlide();
});


const video_btn = document.querySelectorAll(".btn button");
const video_div = document.querySelector("#video-div");
const video_cross = document.querySelector("#video-cross");


video_btn.forEach(video_btns => {
video_btns.addEventListener("click", (() => {
     video_div.classList.add("video-div-js")
     document.getElementById("video-div").innerHTML = `<i class="ri-xrp-fill" id="video-cross"> </i><iframe width="60%" height="60%" src="https://www.youtube.com/embed/SXJqEnauNaY?si=WkmQdcvE91GbtTfl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
}))
})
video_div.addEventListener("click", (e) => {
    if (e.target.id === "video-cross") {
        video_div.classList.remove("video-div-js");
        video_div.innerHTML = "";
    }
});


// Slide 2           Start

    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 3,
      spaceBetween: 30,
      loop: true, 
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


    const back_to_top = document.querySelector(".last-text button");
    
    back_to_top.addEventListener("click", (() => {
       window.scrollTo({
         top: 0,
         behavior: "smooth"
       })
    }))

    AOS.init();

    
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





