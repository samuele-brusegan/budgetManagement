// /app/spScript/inv.js

import {Item} from "../../models/Item.js"
import * as Ctrl from "../../controllers/Controller.js"

let list = document.getElementById("products-list");
let products = Ctrl.getCurrAccount().inventory;

showProductList()

function showProductList(){
    list.innerHTML = "";
    products.forEach(product => {
        // list.innerHTML +=
        // `<div class="product-card">
        //     <!-- Image and Description -->
        //     <div class="d-flex align-items-center justify-content-start">
        //         <img src="../assets/placeholder.svg" class="product-image" alt="placeholder">
        //         <div>
        //             <h3 class="product-title">${product.name}</h3>
        //             <p class="product-subtitle">${product.description}</p>
        //         </div>
        //     </div>
        //     <!-- Quantity Counter -->
        //     <div class="quantity-container">
        //         <div class="quantity-counter">${product.quantity}</div>
        //         <div class="quantity-btn-container">
        //             <div class="quantity-btn">+</div>
        //             <div class="quantity-btn">-</div>
        //         </div>
        //     </div>
        // </div>`;
        let prodCard = document.createElement("div");
        prodCard.classList.add("product-card");
        prodCard.innerHTML =
        `<!-- Image and Description -->
        <div class="d-flex align-items-center justify-content-start">
            <img src="../assets/placeholder.svg" class="product-image" alt="placeholder">
            <div>
                <h3 class="product-title">${product.name}</h3>
                <p class="product-subtitle">${product.description}</p>
            </div>
        </div>
        <!-- Quantity Counter -->`;
        let quanityContainer = document.createElement("div");
        quanityContainer.classList.add("quantity-container");
            let qtCont = document.createElement("div");
            qtCont.classList.add("quantity-counter");
            qtCont.textContent = product.quantity;
        quanityContainer.appendChild(qtCont);
            let btnContainer = document.createElement("div");
            btnContainer.classList.add("quantity-btn-container");
                let btnAdd = document.createElement("div");
                btnAdd.classList.add("quantity-btn");
                btnAdd.textContent = "+";
                let btnRem = document.createElement("div");
                btnRem.classList.add("quantity-btn");
                btnRem.textContent = "-";
            btnContainer.appendChild(btnAdd);
            btnContainer.appendChild(btnRem);
        quanityContainer.appendChild(btnContainer);
        prodCard.appendChild(quanityContainer);
        list.appendChild(prodCard);
        
        //Set Listeners
        btnAdd.addEventListener("click", function () {
            product.quantityAdd()
            showProductList()
        });
        btnRem.addEventListener("click", function () {
            product.quantityRem()
            showProductList()
        });
    });
}