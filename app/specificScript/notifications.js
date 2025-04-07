let notificationArr = [
    // {"title": "Notification 1", "text": "Notification 1", "id": 0},
    // {"title": "Notification 1", "text": "Notification 1", "id": 1},
    // {"title": "Notification 1", "text": "Notification 1", "id": 2},
    // {"title": "Notification 1", "text": "Notification 1", "id": 3},
    // {"title": "Notification 1", "text": "Notification 1", "id": 4},
    // {"title": "Notification 1", "text": "Notification 1", "id": 5},
    // {"title": "Notification 1", "text": "Notification 1", "id": 6},
    // {"title": "Notification 1", "text": "Notification 1", "id": 7},
    // {"title": "Notification 1", "text": "Notification 1", "id": 8},
]
for (let i = 1; i <= 10; i++) {
    notificationArr.push({"title": `Notification ${i}`, "text": `Notification ${i}`, "id": i})
}

showNotifications()

function showNotifications() {
    let list = document.getElementById("notifications-list")
    list.innerHTML = ""
        notificationArr.forEach(notification => {
            let swiper = document.createElement("div");
            swiper.className = "swiper notification-card";
            swiper.setAttribute("uid", notification.id);
                let swWrap = document.createElement("div");
                swWrap.className = "swiper-wrapper d-flex";
                    let notificationBody = document.createElement("div");
                    notificationBody.className = "swiper-slide";
                        let div = document.createElement("div");
                            let h3 = document.createElement("h3");
                            h3.className = "notification-title";
                            h3.innerText = notification.title;
                            let p = document.createElement("p");
                            p.className = "notification-subtitle";
                            p.innerText = notification.text;
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
                        delBtn.setAttribute("uid", notification.id);
                        delBtn.innerText = "Elimina";
                    delBtnDiv.appendChild(delBtnMask);
                    delBtnDiv.appendChild(delBtn);
                swWrap.appendChild(notificationBody)
                swWrap.appendChild(delBtnDiv)
            swiper.appendChild(swWrap)
            list.appendChild(swiper)
            //Delete listener
            delBtnDiv.addEventListener("click", () => {
                let uid = delBtnDiv.querySelector(".delete-btn").getAttribute("uid")
                let index = notificationArr.findIndex((elem) => {return elem.id === parseInt(uid)})
                notificationArr.splice(index, 1)
                showNotifications()
            });
        });
    var swiper = new Swiper(".swiper", {
        slidesPerView: "auto",
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
}

