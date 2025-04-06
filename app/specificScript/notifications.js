let list = document.getElementById("notifications-list")
list.innerHTML = ""
// notificationArr.forEach(notification => {});
for (let i = 0; i < 12; i++) {
    let swiper = document.createElement("div");
    swiper.className = "swiper notification-card";
        let swWrap = document.createElement("div");
        swWrap.className = "swiper-wrapper d-flex";
            let notificationBody = document.createElement("div");
            notificationBody.className = "swiper-slide";
                let div = document.createElement("div");
                    let h3 = document.createElement("h3");
                    h3.className = "notification-title";
                    h3.innerText = "NomeNotifica";
                    let p = document.createElement("p");
                    p.className = "notification-subtitle";
                    p.innerText = "Sottotitolo";
                div.appendChild(h3);
                div.appendChild(p);
            notificationBody.appendChild(div)
            let delBtnDiv = document.createElement("div");
            delBtnDiv.className = "swiper-slide h-auto";
            delBtnDiv.style.position = "relative";
                let delBtnMask = document.createElement("div");
                delBtnMask.className = "delete-btn-mask";
                let delBtn = document.createElement("div");
                delBtn.className = "delete-btn d-flex justify-content-center align-items-center";
                delBtn.innerText = "Elimina";
            delBtnDiv.appendChild(delBtnMask);
            delBtnDiv.appendChild(delBtn);
        swWrap.appendChild(notificationBody)
        swWrap.appendChild(delBtnDiv)
    swiper.appendChild(swWrap)
list.appendChild(swiper)
}
var swiper = new Swiper(".swiper", {
    slidesPerView: "auto",
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});
