// noinspection EqualityComparisonWithCoercionJS
// /app/spScript/inv.js
import {Item} from "../../models/Item.js"
import * as Ctrl from "../../controllers/Controller.js"
import * as Cookie from "../../models/cookies.js"

let list = document.getElementById("products-list");
let products = Ctrl.getCurrAccount().inventory;
showProductList()
function createProductCard(product) {
    // Creazione del container principale della card del prodotto
    let productCard = document.createElement("div");
    productCard.classList.add("swiper", "w-100", "product-card");
    productCard.style.padding = "0";
    productCard.style.margin = "0 0 10px 0";
    
    // Creazione del contenitore principale dello slider
    let swiperWrapper = document.createElement("div");
    swiperWrapper.classList.add("swiper-wrapper", "d-flex");
    
    // Creazione del contenitore della prima slide dello slider
    let firstSlide = document.createElement("div");
    firstSlide.classList.add("swiper-slide", "product-card");
    firstSlide.style.padding = "0 20px 0 0";
    
    // Creazione del contenitore interno della card del prodotto
    let innerProductCard = document.createElement("div");
    innerProductCard.classList.add("inner-product-card");
    innerProductCard.setAttribute("uid", product.id);
    
    // Creazione dell'immagine del prodotto
    let img = document.createElement("img");
    img.src = "../assets/placeholder.svg";
    img.alt = "placeholder";
    img.classList.add("product-image");
    
    // Creazione del contenitore per il titolo e la descrizione del prodotto
    let detailsContainer = document.createElement("div");
    
    // Creazione del titolo del prodotto
    let title = document.createElement("h3");
    title.classList.add("product-title");
    title.textContent = product.name;
    
    // Creazione della descrizione del prodotto
    let description = document.createElement("p");
    description.classList.add("product-subtitle");
    description.textContent = product.description;
    
    // Aggiunta dei figli al contenitore dettagli
    detailsContainer.appendChild(title);
    detailsContainer.appendChild(description);
    
    // Aggiunta dell'immagine e del contenitore dettagli al contenitore interno della card del prodotto
    innerProductCard.appendChild(img);
    innerProductCard.appendChild(detailsContainer);
    
    // Creazione del container per il contatore di quantità
    let quantityContainer = document.createElement("div");
    quantityContainer.classList.add("quantity-container");
    
    // Creazione del conteggio della quantità
    let quantityCounter = document.createElement("div");
    quantityCounter.classList.add("quantity-counter");
    quantityCounter.textContent = product.quantity;
    
    // Creazione del container per i bottoni di incremento e decremento
    let btnContainer = document.createElement("div");
    btnContainer.classList.add("quantity-btn-container");
    btnContainer.setAttribute("uid", product.id);
    
    // Creazione del bottone di incremento
    let btnAdd = document.createElement("div");
    btnAdd.classList.add("quantity-btn");
    btnAdd.setAttribute("act", "add");
    btnAdd.textContent = "+";
    
    // Creazione del bottone di decremento
    let btnRem = document.createElement("div");
    btnRem.classList.add("quantity-btn");
    btnRem.setAttribute("act", "rem");
    btnRem.textContent = "-";
    
    // Aggiunta dei bottoni al container per i bottoni di incremento e decremento
    btnContainer.appendChild(btnAdd);
    btnContainer.appendChild(btnRem);
    
    // Aggiunta del conteggio della quantità e del contenitore per i bottoni al container del contatore di quantità
    quantityContainer.appendChild(quantityCounter);
    quantityContainer.appendChild(btnContainer);
    
    // Aggiunta del contenitore interno della card del prodotto e del container del contatore di quantità al contenitore principale della prima slide dello slider
    firstSlide.appendChild(innerProductCard);
    firstSlide.appendChild(quantityContainer);
    
    // Creazione del contenitore della seconda slide dello slider
    let secondSlide = document.createElement("div");
    secondSlide.classList.add("swiper-slide", "h-auto");
    secondSlide.style.position = "relative";
    
    // Creazione del maschera per il pulsante di eliminazione
    let deleteBtnMask = document.createElement("div");
    deleteBtnMask.classList.add("delete-btn-mask");
    
    // Creazione del bottone di eliminazione
    let deleteBtn = document.createElement("div");
    deleteBtn.classList.add("delete-btn", "d-flex", "justify-content-center", "align-items-center");
    deleteBtn.setAttribute("uid", product.id);
    deleteBtn.textContent = "Elimina";
    
    // Aggiunta dei figli al contenitore della seconda slide dello slider
    secondSlide.appendChild(deleteBtnMask);
    secondSlide.appendChild(deleteBtn);
    
    // Aggiunta delle slide allo slider principale
    swiperWrapper.appendChild(firstSlide);
    swiperWrapper.appendChild(secondSlide);
    
    // Aggiunta del contenitore principale dello slider alla card del prodotto
    productCard.appendChild(swiperWrapper);

    return productCard;
}

/*
* <div class="swiper w-100 product-card" style="padding: 0; margin: 0 0 10px 0;">
                <div class="swiper-wrapper d-flex">
                    <div class="swiper-slide product-card" style="padding: 0 20px 0 0;">
                        <div class="inner-product-card" uid="${product.id}">
                            <img src="../assets/placeholder.svg" class="product-image" alt="placeholder">
                            <div>
                                <h3 class="product-title">${product.name}</h3>
                                <p class="product-subtitle">${product.description}</p>
                            </div>
                        </div>
                        <!-- Quantity Counter -->
                        <div class="quantity-container">
                            <div class="quantity-counter">${product.quantity}</div>
                            <div class="quantity-btn-container" uid="${product.id}">
                                <div class="quantity-btn" act="add">+</div>
                                <div class="quantity-btn" act="rem">-</div>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-slide h-auto" style="position: relative;">
                        <div class="delete-btn-mask"></div>
                        <div class="delete-btn d-flex justify-content-center align-items-center" uid="${product.id}">Elimina</div>
                    </div>
                </div>
            </div>
* */
function showProductList() {
    let list = document.getElementById("products-list");
    list.innerHTML = "";
    if (products.length === 0) {
        let noProducts = document.createElement("div");
        noProducts.classList.add("no-products");
        noProducts.textContent = "Non ci sono prodotti";
        list.appendChild(noProducts);
        return;
    }
    products.forEach(product => {
        console.log(product)
        let prodCard = createProductCard(product);
        list.appendChild(prodCard);

        // Set Listeners
        prodCard.querySelector(".quantity-btn[act='add']").addEventListener("click", function () {
            product.quantityAdd();
            showProductList();
        });

        prodCard.querySelector(".quantity-btn[act='rem']").addEventListener("click", function () {
            product.quantityRem();
            showProductList();
        });

        prodCard.querySelector(".inner-product-card").addEventListener("click", function () {
            Cookie.set("prodId", product.id, 0.25);
            router.navigateTo("modify-element");
        });
        
        prodCard.querySelector(".delete-btn").addEventListener("click", () => {
            Ctrl.getCurrAccount().remItem(product)
            showProductList();
        });
    });

    let swiper = new Swiper(".swiper", {
        slidesPerView: "auto",
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
}