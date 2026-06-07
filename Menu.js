
// let card_count = 0;
const buttons = document.querySelectorAll(".M-s2-buttons button");


buttons.forEach(all => {
    all.addEventListener("click", ((e) => {
        buttons.forEach(remove => remove.classList.remove("M-s2-buttons-js"));
        e.target.classList.add("M-s2-buttons-js")
    }))
})


   

// const container = document.querySelector("#productsContainer");
// let products = [];


// fetch("./Menu.json")
//     .then(res => res.json())
//     .then(data => {
//         products = data;
//         displayProducts(products);
// })

// function displayProducts(items){

//     document.getElementById("productsContainer").innerHTML = "";
    
//     items.forEach(item => {
//         document.getElementById("productsContainer").innerHTML += `
//         <div class="col-lg-6">
//              <div class="M-s2-column1">
//                      <div class="card1">
//                          <div class="img" style="background-image: url('${item.image}');"></div>
//                          <div class="text">
//                                  <h1>${item.Name}</h1>
//                                  <p>${item.Description}</p>
//                          </div>
//                      </div>
//                      <div class="card2">
//                          <p><span>€</span> ${item.Price}</p>
//                          <button class="counting-btn" data-id="${item.id}"><img src="${item.Cardimg}"></button>
//                      </div>
//              </div>
//          </div>`
//     })           
    
//     document.querySelectorAll(".counting-btn").forEach(btn => {
//     btn.addEventListener("click", (() => {
//          const id = btn.getAttribute("data-id");

//          const product = products.find(p => p.id == id);

//          let card = JSON.parse(localStorage.getItem("card")) || [];

         

//          const Exist = card.find(item => item.id == id);

//          if(!Exist){
//             product.quantity = 1;
//             card.push(product);
//          }else{
//             product.quantity += 1;
//          }

//          localStorage.setItem("card", JSON.stringify(card));
//          card_count++;
//          document.getElementById("quantity-count").innerHTML = card_count;
//     }))
// })


//  window.Category = function(CategoryName){
//     let product = products.filter(item => item.Category == CategoryName);
//     displayProducts(product);

//     if(CategoryName == "All"){
//         displayProducts(products);
//     }
  
// }


// }


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





 