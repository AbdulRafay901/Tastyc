     var iso = new Isotope('.grid', {
  itemSelector: '.grid-item',
  layoutMode: 'fitRows'
});

document.querySelectorAll('.M-s2-buttons button').forEach(btn => {
  btn.addEventListener('click', () => {
    let filterValue = btn.getAttribute('data-filter');
    iso.arrange({ filter: filterValue });
  });
});

const buttons = document.querySelectorAll(".M-s2-buttons button");
buttons.forEach(all => {
    all.addEventListener("click", ((e) => {
        buttons.forEach(remove => remove.classList.remove("M-s2-buttons-js"));
        e.target.classList.add("M-s2-buttons-js")
    }))
    
})

AOS.init()