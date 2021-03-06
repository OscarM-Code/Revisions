const btn_1 = document.querySelector("input + button");
const btn_2 = document.querySelector("div + button");
const btn_3 = document.querySelector("div + button + div + button");
const names = document.querySelector("input + button + div");
const newNames = document.querySelector("div + button + div");
let nameArray = [];
let newArray = [];

if(localStorage.getItem("nameArray") != null){
    window.addEventListener("load",  function(){
        if (localStorage.getItem("nameArray").split(",")[0] != "") {
            nameArray = localStorage.getItem("nameArray").split(",");
            let i = 0;
            while(i < nameArray.length){
                let newP = document.createElement("p");
                newP.textContent = nameArray[i];
                newP.id = nameArray[i];
                names.appendChild(newP);
                i++;
            }
        }
        if (localStorage.getItem("newArray") != null) {
            newArray = localStorage.getItem("newArray").split(",");
            let j = 0;
            while(j < newArray.length){
                let newP = document.createElement("p");
                newP.textContent = newArray[j];
                newP.id = newArray[j];
                newNames.appendChild(newP);
                j++;
            }
        }
    })
}

btn_1.addEventListener("click", () => {
    let getName = document.querySelector("input").value;
    let newName = document.createElement("p");
    newName.textContent = getName;
    newName.id = getName;
    nameArray.push(getName);
    names.appendChild(newName);
    localStorage.setItem("nameArray", nameArray);
})

btn_2.addEventListener("click", () => {
    let rdm = Math.floor(Math.random() * nameArray.length);
    let rdmName = nameArray[rdm];
    let newName = document.createElement("p");
    let nameSelect = document.getElementById(rdmName);
    newName.textContent = rdmName;
    newNames.appendChild(newName);
    names.removeChild(nameSelect);
    newArray.push(rdmName);
    nameArray.splice(rdm, 1);
    localStorage.setItem("nameArray", nameArray);
    localStorage.setItem("newArray", newArray);
})

btn_3.addEventListener("click", () => {
    localStorage.clear();
    location.reload();
}) 