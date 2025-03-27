export function showCatagoryList(list, docObjId) {
    // let docObj = document.getElementById(docObjId);
    // docObj.innerHTML = "";
    console.log("showCatagoryList")
    sortByParentID(list);
    const root = document.getElementById("categoryList0");
    root.innerHTML = ""
    
    //Aggiungi le categorie
    list.forEach(category => {
        let parent = document.getElementById("categoryList"+category.parentId)
        let nodeLi = document.createElement("li")
        let nodeSpan = document.createElement("span")
        nodeSpan.classList.add("caret")
        nodeSpan.innerText = category.name
        nodeLi.appendChild(nodeSpan)
        let nodeUl = document.createElement("ul")
        nodeUl.classList.add("nested")
        nodeUl.id = "categoryList"+category.id
        nodeLi.appendChild(nodeUl)
        
        parent.appendChild(nodeLi)
    });
    //
    
    
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