let card = JSON.parse(localStorage.getItem("card")) || [];

card.forEach(item => {
    document.getElementById("productsContainer").innerHTML += 
         `<div class="col-lg-6">
                <div class="S-s2-column1">
                        <div class="img" style="background-image: url('${item.image}');">

                        </div>
                </div>
            </div>
            <div class="col-lg-6 p-0">
                <div class="S-s2-column2">
                        <div class="text">
                            <h1>${item.Name}</h1>
                            <h2>€${item.Price}</h2>
                            <p>${item.Description}</p>
                        </div>
                        <div class="quantity-button">
                            <div class="quantity">
                                    <button class="plus">+</button>
                                    <p id="counting">${item.quantity}</p>
                                    <button class="minus">-</button>
                            </div>
                            <div class="button">
                                    <a href=""><button>ADD TO CART</button></a>
                            </div>
                        </div>
                </div>
            </div>`
    ;
});

