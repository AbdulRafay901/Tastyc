AOS.init();

             const map_btn = document.querySelector(".map-btn button");
             const div = document.querySelector(".A-s1-text");
             const lock = document.querySelector("#lock-icon");
             const unlock = document.querySelector("#unlock-icon")

             map_btn.addEventListener("click", (() => {
                  div.classList.toggle("A-s1-text-js");
                  lock.classList.toggle("lock-js");
                  unlock.classList.toggle("unlock-js");
                  map_btn.classList.toggle("map-btn-js");

             }))