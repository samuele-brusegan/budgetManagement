export function showCatagoryList(list, docObjId) {
    let docObj = document.getElementById(docObjId);
    docObj.innerHTML = "";
    sortByParentID(list);

    // <ul id="myUL">
    //     <li><span className="caret">Beverages</span><ul className="nested"> //Parent Class
    //         <li>Water</li> //Son no childs
    //         <li>Coffee</li>
    //         <li><span className="caret">Tea</span><ul className="nested"> //Son with childs
    //             <li>Black Tea</li>
    //             <li>White Tea</li>
    //             <li><span className="caret">Green Tea</span><ul className="nested">
    //                 <li>Sencha</li>
    //                 <li>Gyokuro</li>
    //                 <li>Matcha</li>
    //                 <li>Pi Lo Chun</li>
    //             </ul></li>
    //         </ul></li>
    //     </ul></li>
    // </ul>

    let toggler = document.getElementsByClassName("caret");
    let i;

    for (i = 0; i < toggler.length; i++) {
        toggler[i].addEventListener("click", function () {
            this.parentElement.querySelector(".nested").classList.toggle("active");
            this.classList.toggle("caret-down");
        });
    }
}

function sortByParentID(list) {
    let n = list.length;
    let i, j, temp;
    let swapped;
    for (i = 0; i < n - 1; i++) {
        swapped = false;

        for (j = 0; j < n - i - 1; j++) {
            if (list[j].parentId > list[j + 1].parentId) {
                // Swap arr[j] and arr[j+1]
                temp = list[j];
                list[j] = list[j + 1];
                list[j + 1] = temp;
                swapped = true;
            }
        }

        if (swapped === false) break; // IF no two elements were swapped by inner loop, then break
    }
}
class CategoryDocObj {
    getHtmlTag(){
        "└"
    }
}